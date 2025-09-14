// Importe as funções dos SDKs que você precisa
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// A configuração COMPLETA e CORRETA do seu projeto Firebase
// CORREÇÃO: Adicionamos 'export' para que outros arquivos possam importar esta configuração.
export const firebaseConfig = {
    apiKey: "AIzaSyDVwKBczQfCvnAltobaKZ3UZ9UkXeO3viA",
    authDomain: "smilecare-b8819.firebaseapp.com",
    projectId: "smilecare-b8819",
    storageBucket: "smilecare-b8819.appspot.com",
    messagingSenderId: "870423617839",
    appId: "1:8704236178dbd08125c541da"
};

// Inicialize o Firebase UMA ÚNICA VEZ
const app = initializeApp(firebaseConfig);

// Exporte os serviços já inicializados para usar em outras partes do seu código
export const auth = getAuth(app);
export const db = getFirestore(app);
