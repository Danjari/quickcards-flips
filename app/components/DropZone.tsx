

"use client";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Inbox, Loader } from "lucide-react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import Deck from "./Deck";
import { useUser } from '@clerk/nextjs';

const DropZone = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [flashcards, setFlashcards] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  const [cards, setCards] = useState<Array<{ id: number; frontHTML: string; backHTML: string }>>([]);
  const [file, setFile] = useState<File>();
  const [isUploaded, setIsUploaded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        setFile(acceptedFiles[0]);
        setIsUploaded(true);
        setIsGenerating(false); // Reset generating status
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !user) return;

    setIsLoading(true);
    const fileRef = ref(storage, `files/${user.id}/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", user.id);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success === false) {
          throw new Error(data.message || "Unknown error occurred");
        }
        // Further processing if necessary
      } else {
        throw new Error(`Server responded with status ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error occurred while uploading and processing the file:", error);
      alert(`Error: ${error.message}`);
    }

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          setFlashcards(json.flashcardsArray);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
        setIsGenerating(true);
      }
    );
  };

  useEffect(() => {
    if (flashcards && flashcards.length > 0) {
      flashcards.forEach((flashcard: any) => {
        setCards((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            frontHTML: `${flashcard.front}`,
            backHTML: `${flashcard.back}`,
          },
        ]);
      });
    }
  }, [flashcards]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-8 bg-indigo-50 px-4 overflow-y-auto">
      <div className="p-6 bg-white shadow-lg rounded-xl max-w-lg w-full">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
          <div
            {...getRootProps({
              className:
                "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
            })}
          >
            <input {...getInputProps()} />
            <Inbox className="w-10 h-10 text-indigo-600 text-center" />
            {isUploaded ? (
              <p className="mt-2 text-sm text-gray-600">
                {file?.name} has been uploaded, click 'Generate' to create your flashcards
              </p>
            ) : (
              <p className="mt-2 text-sm text-gray-600">
                Drag &apos;n&apos; drop a PDF here, or click to select a file
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="animate-spin mx-auto h-5 w-5" /> : "Generate"}
          </button>
        </form>

        {uploadProgress > 0 && (
          <div className="mt-4">
            <progress value={uploadProgress} max="100" className="w-full" />
            <p className="text-center text-sm text-gray-500 mt-2">
              Uploading: {uploadProgress}%
            </p>
          </div>
        )}
      </div>

      {isGenerating && (
        <div className="text-center text-gray-700">
          <Loader className="animate-spin mx-auto h-8 w-8" />
          <p className="mt-2 text-sm">Generating flashcards, please wait...</p>
        </div>
      )}

      {cards.length > 0 && <Deck cards={cards} />}
    </div>
  );
};

export default DropZone;

