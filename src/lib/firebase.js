import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e6f8b.firebaseapp.com",
  projectId: "reactchat-e6f8b",
  storageBucket: "reactchat-e6f8b.appspot.com",
  messagingSenderId: "875859549967",
  appId: "1:875859549967:web:d2d22d366760346e51687a"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore();
export const storage=getStorage();