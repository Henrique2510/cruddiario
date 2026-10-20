import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaB40WZdVurr2OEwM2xAwGbjQhhOD4ZeA",
  authDomain: "cruddiario.firebaseapp.com",
  projectId: "cruddiario",
  databaseURL: "https://cruddiario-default-rtdb.firebaseio.com/",
  storageBucket: "cruddiario.firebasestorage.app",
  messagingSenderId: "872385335310",
  appId: "1:872385335310:web:abbb83c45087e12a476c5f",
  measurementId: "G-1L0R5P6XCS"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);