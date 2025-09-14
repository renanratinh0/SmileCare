// Importe as funções dos SDKs que você precisa
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-functions.js";

// A configuração do seu projeto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDVwKBczQfCvnAltobaKZ3UZ9UkXeO3viA",
    authDomain: "smilecare-b8819.firebaseapp.com",
    projectId: "smilecare-b8819",
    storageBucket: "smilecare-b8819.appspot.com",
    messagingSenderId: "870423617839",
    appId: "1:870423617839:web:SEU_APP_ID"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Exporte os serviços para usar em outras partes do seu código
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);