import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvvB_uk2OPRuO6DB2gAFhnX_JOB4eOfMQ",
  authDomain: "test-eshkon.firebaseapp.com",
  projectId: "test-eshkon",
  storageBucket: "test-eshkon.appspot.com",
  messagingSenderId: "894460838982",
  appId: "1:894460838982:web:4e06e5d9ff8665dfe33647",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default db;
export { auth };
