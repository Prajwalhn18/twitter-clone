import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // all your firebase credentials goes here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
