import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDaDZeT9dR5lELsGMXyYthSJ4fdaTLDKE4",
  authDomain: "react-de674.firebaseapp.com",
  projectId: "react-de674",
  storageBucket: "react-de674.appspot.com",
  messagingSenderId: "293789376805",
  appId: "1:293789376805:web:a4fd1d585e76642d43facc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)