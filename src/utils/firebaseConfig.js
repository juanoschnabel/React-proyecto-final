import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVXArm2-btjTGSCmuI1Tu85jv05rBa1_c",
  authDomain: "ko-market.firebaseapp.com",
  projectId: "ko-market",
  storageBucket: "ko-market.appspot.com",
  messagingSenderId: "834049287010",
  appId: "1:834049287010:web:66fe12a0830f2422a6023b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
