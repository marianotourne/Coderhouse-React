// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQEGuKpxKg_naXOdwu7CZP5b2ESl9lOTg",
  authDomain: "ecommercecoderhouse-c3e58.firebaseapp.com",
  projectId: "ecommercecoderhouse-c3e58",
  storageBucket: "ecommercecoderhouse-c3e58.appspot.com",
  messagingSenderId: "666982215963",
  appId: "1:666982215963:web:cf48fc95c0137e420d63be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
