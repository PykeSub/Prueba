import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

import { firebaseConfig } from "./credenciales.js";

// Inicializar la FireBase.
const app = initializeApp(firebaseConfig);

// Inicializar la nube Firestore y obtener la referencia al servicio.
export const db = getFirestore(app);


