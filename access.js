// ---- firebase-config.js ----

// Import Firebase core & services
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// ✅ Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTPc2lzhFHP2piME_BMeCwI1VjyZVa0CI",
  authDomain: "ticket-management-system-1528e.firebaseapp.com",
  projectId: "ticket-management-system-1528e",
  storageBucket: "ticket-management-system-1528e.firebasestorage.app",
  messagingSenderId: "756886145987",
  appId: "1:756886145987:web:230a4e49124ffd96fecb76",
  measurementId: "G-ZXG780D7SP"
};

// ✅ Initialize Firebase once
export const app = initializeApp(firebaseConfig);

// ✅ Export Firestore & Auth references
export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("✅ Firebase connected successfully!");
