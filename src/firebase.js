import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBWy4ChPekmxAYnZnBJtJ-GH4VOTfU5m6o",
  authDomain: "cecytemreactpracticas-1730c.firebaseapp.com",
  projectId: "cecytemreactpracticas-1730c",
  storageBucket: "cecytemreactpracticas-1730c.firebasestorage.app",
  messagingSenderId: "304227437571",
  appId: "1:304227437571:web:9b9bc863db9c9d223f5236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
