import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARlr4ts5X2cORhx3z6K2bqUdk_cd98O5A",
  authDomain: "chats-f35dd.firebaseapp.com",
  projectId: "chats-f35dd",
  storageBucket: "chats-f35dd.appspot.com",
  messagingSenderId: "816470426848",
  appId: "1:816470426848:web:9dbffe1d32f02075ebfc85",
  measurementId: "G-H0ST8D851Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
