// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAnN7nlFEjVH1R93uCQ6Kiv64DpfbAfTl4",
  authDomain: "clone-65bd5.firebaseapp.com",
  projectId: "clone-65bd5",
  storageBucket: "clone-65bd5.appspot.com",
  messagingSenderId: "484241032637",
  appId: "1:484241032637:web:60e1571bf1751fc3f37ed4",
  measurementId: "G-7V4W6WLXKJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
