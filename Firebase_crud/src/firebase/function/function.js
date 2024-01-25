// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";

import {
    getFirestore
} from "firebase/firestore";
import {
    getStorage
} from "firebase/storage";
import {
    getAuth
} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiU2NiYAx7jn1Pa3MHniihUPVie2Wk3aY",
    authDomain: "fir-crud-38434.firebaseapp.com",
    projectId: "fir-crud-38434",
    storageBucket: "fir-crud-38434.appspot.com",
    messagingSenderId: "55238451751",
    appId: "1:55238451751:web:d28f6eb8e4d2b79fd3a402",
    measurementId: "G-4GYCS4P9N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth();
const storage = getStorage(app);
export {
    app,
    db,
    storage
};