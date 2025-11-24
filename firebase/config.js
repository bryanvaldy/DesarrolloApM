// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtXAbPU3c3zAEYFvKvk9ay9wVdK87oqvs",
  authDomain: "ds-moviles-g01.firebaseapp.com",
  projectId: "ds-moviles-g01",
  storageBucket: "ds-moviles-g01.firebasestorage.app",
  messagingSenderId: "872007438143",
  appId: "1:872007438143:web:3709f58008d4bd6bf38d8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);