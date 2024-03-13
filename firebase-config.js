import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "fir-connection-pamfa4tap.firebaseapp.com",
  projectId: "fir-connection-pamfa4tap",
  storageBucket: "fir-connection-pamfa4tap.appspot.com",
  messagingSenderId: "39363287656",
  appId: "1:39363287656:web:76f60fc763cc808493f9dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
