//this is the component that will be responsible for uploading our file to firebase
"use client";
import { Inbox } from "lucide-react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const DropZone = () => {
  //this is a hook to handle pdfs and files more easily
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");
  const [file, setFile] = useState<File>();
  const { getRootProps, getInputProps } = useDropzone({
    //these are just parameters to specify that we only accept 1 pdf
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
    // const fileRef = ref(storage, `files/${file.name}`)
    // const uploadTask = uploadBytesResumable(fileRef, file);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     setUploadProgress(Math.round(progress));
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => { //update the download url for future downloads
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       setDownloadURL(downloadURL);
    //     });
    //   },
    // );
    try {
      const data = new FormData();
      data.set("file", file);
      const response = await fetch("api/upload", {
        method: "POST",
        body: data,
      });
      if (!response.ok) throw new Error(await response.text());
    } catch (error) {
      console.error(error);
    }
  };
  return (
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
  );
};

export default DropZone;
