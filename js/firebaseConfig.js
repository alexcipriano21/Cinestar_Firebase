import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDNRYYL8GKEvE1amXJ4FYJJApguvSuMcT4",
    authDomain: "alex-cinestar.firebaseapp.com",
    projectId: "alex-cinestar",
    storageBucket: "alex-cinestar.firebasestorage.app",
    messagingSenderId: "538144343647",
    appId: "1:538144343647:web:da5b3daaa9bc5084ccfdea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
