import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const config = {
    apiKey: "AIzaSyDflZmSxoUZ1O57wo628pk7gP0Ei9erQtk",
    authDomain: "firestore-demo-8b5c5.firebaseapp.com",
    projectId: "firestore-demo-8b5c5",
    storageBucket: "firestore-demo-8b5c5.appspot.com",
    messagingSenderId: "983699327486",
    appId: "1:983699327486:web:06d32e2ed5a2b1e44298af"
}

const app = initializeApp(config)
export const db = getFirestore(app)