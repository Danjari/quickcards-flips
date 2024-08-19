// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "flashcard-saas-29f0b.firebaseapp.com",
  projectId: "flashcard-saas-29f0b",
  storageBucket: "flashcard-saas-29f0b.appspot.com",
  messagingSenderId: "543199121556",
  appId: "1:543199121556:web:413c324817bd058309e481",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db, app };
