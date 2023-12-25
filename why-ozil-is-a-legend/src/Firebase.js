// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXtQyyxEm0hVUPsJmOR-aGt0_DQ8R8tAA",
  authDomain: "why-ozil-is-a-legend.firebaseapp.com",
  projectId: "why-ozil-is-a-legend",
  storageBucket: "why-ozil-is-a-legend.appspot.com",
  messagingSenderId: "605064807467",
  appId: "1:605064807467:web:ea614852a003f49f3a966e",
  measurementId: "G-VN4G2DPFS3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);


export { app, auth, storage };