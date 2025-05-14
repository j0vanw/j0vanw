import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  updateProfile 
 } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyALugoOXkaCMKuScnEtALYmLsxbatlQ9qo",
    authDomain: "j0vanw.firebaseapp.com",
    projectId: "j0vanw",
    storageBucket: "j0vanw.firebasestorage.app",
    messagingSenderId: "217236690154",
    appId: "1:217236690154:web:174925f710cc29c9267393",
    measurementId: "G-Z9HDW7ZDHN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.auth = auth;

export { auth };
export const firebaseFunctions = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
  updateProfile
};