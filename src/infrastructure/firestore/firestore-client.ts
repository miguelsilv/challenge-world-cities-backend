import * as admin from "firebase-admin";

// Inicializa o Firebase Admin SDK
admin.initializeApp();

// Retorna uma instância do Firestore
export const firestore = admin.firestore();
