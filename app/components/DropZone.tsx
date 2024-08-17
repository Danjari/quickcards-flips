"use client";
import React, { useEffect, useState, ReactNode } from "react";
import { useDropzone } from "react-dropzone";
import { Inbox } from "lucide-react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FlashcardArray } from "react-quizlet-flashcard";
import { storage } from "../../firebase";
import Deck from "./Deck";
const DropZone = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [flashcards, setFlashcards] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  const [cards, setCards] = useState<
    Array<{ id: number; frontHTML: string; backHTML: string }>
  >([]);
  const [file, setFile] = useState<File>();
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        setFile(acceptedFiles[0]);
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const fileRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(Math.round(progress));
      },
      (error) => {
        console.log(error);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadURL(downloadURL);
        });
        try {
          const data = new FormData();
          data.set("file", file);
          const response = await fetch("api/upload", {
            method: "POST",
            body: data,
          });
          if (!response.ok) throw new Error(await response.text());
          const json = await response.json();
          setFlashcards(json.flashcardsArray); // Set flashcards here
        } catch (error) {
          console.error(error);
        }
      },
    );
  };

  // Run addFlashcardsAsCards whenever flashcards state changes
  useEffect(() => {
    if (flashcards.length > 0) {
      console.log("Adding cards to quizlet");
      flashcards.forEach((flashcard: any) => {
        console.log(flashcard);
        setCards((prev) => [
          ...prev,
          {
            id: prev.length + 1, // Ensure each card has a unique ID
            frontHTML: `${flashcard.front}`,
            backHTML: `${flashcard.back}`,
          },
        ]);
      });
    }
  }, [flashcards]); // Dependency array ensures this runs when flashcards changes

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
      <div className="p-2 bg-white rounded-xl">
        <form onSubmit={handleSubmit}>
          <div
            {...getRootProps({
              className:
                "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
            })}
          >
            <input {...getInputProps()} />
            <>
              <Inbox className="w-10 h-10 text-blue-500 text-center" />
            </>
            <p className="mt-2 text-sm text-slate-400">
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
          <button className="text-black" type="submit">
            Save File
          </button>
        </form>

        {uploadProgress > 0 && (
          <progress value={uploadProgress} max="100" className="w-full" />
        )}
      </div>
      {cards.length > 0 && <Deck cards={cards} />}
    </div>
  );
};

export default DropZone;
