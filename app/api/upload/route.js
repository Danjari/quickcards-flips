import { NextResponse } from "next/server";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { createFlashcards } from "../../../lib/openai";
import { UnstructuredClient } from "unstructured-client";
import { Buffer } from "buffer";



export async function POST(req) {
    try {
      // Get the form data from the request
      const formData = await req.formData();
      const file = formData.get("file");
      const userId = formData.get("userId"); // Extract userId from form data
  
      if (!file || !userId) {
        return NextResponse.json({ success: false });
      }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileRef = ref(storage, `files/${userId}/${file.name}`);
    console.log("Attempting to upload/retrieve file at path:", `files/${userId}/${file.name}`);
    
    // Initialize UnstructuredClient
    const key = process.env.UNSTRUCTURED_API_KEY;
    const url = process.env.UNSTRUCTURED_API_URL;
    const client = new UnstructuredClient({
      security: {
        apiKeyAuth: key,
      },
      serverURL: url,
    });

    // Call UnstructuredClient API
    const response = await client.general.partition({
      partitionParameters: {
        files: {
          content: buffer,
          fileName: file.name,
        },
        splitPdfPage: true,
        splitPdfAllowFailed: true,
        splitPdfConcurrencyLevel: 15,
        languages: ["eng"],
      },
    });

    if (response.statusCode !== 200) {
      throw new Error(`Failed to process the document: ${response.statusCode}`);
    }
    //gettings the text from the pdf
    const jsonElements = JSON.stringify(response.elements, null, 2); 
    //now we are going to store the reference of the pdf in firestore
    const docRef = doc(db, "users", userId, "userPdfs", file.name);
    const data = {
      name: file.name,
      flashcard_deck_name: `Deck for ${file.name}`,
      corpus: jsonElements,
    };

    // Get the file URL from Firebase Storage
    const fileURL = await getDownloadURL(fileRef);
    data.url = fileURL;

    // Save document to Firestore
    await setDoc(docRef, data);

    // Create flashcards
    let flashcards = await createFlashcards(jsonElements);
    console.log(typeof flashcards);
    flashcards = JSON.parse(flashcards);
    console.log(typeof flashcards);
    //checking that we actually get an array
    const flashcardsArray = flashcards.flashcards;
    if (!flashcardsArray || !Array.isArray(flashcardsArray)) {
      throw new Error('OpenAI did not return valid flashcards.');
    }

    // Prepare flashcard data for Firestore
    const deckRef = doc(db, "users", userId, "userFlashcards", data.flashcard_deck_name);
    const flashcardData = {
      cards: flashcardsArray,
      origin: file.name,
    };

    // Save flashcards to Firestore
    await setDoc(deckRef, flashcardData);

    return NextResponse.json({
      flashcardsArray
    });
  } catch (error) {
    console.error("Error during document processing: ", error);
    return NextResponse.json({
      success: false,
      message: `Error during document processing: ${error.message}`,
    });
  }
}