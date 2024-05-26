// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from "firebase/app";
// import 'firebase/auth'

//  const firebaseConfig = {
//   apiKey: "AIzaSyBtFzXJz6MsyphzINT1VxUOfFn5Jy1o48Q",
//   authDomain: "exclusive-ef190.firebaseapp.com",
//   projectId: "exclusive-ef190",
//   storageBucket: "exclusive-ef190.appspot.com",
//   messagingSenderId: "350128301802",
//   appId: "1:350128301802:web:913866dd753f46c6bd5993",
//   measurementId: "G-M9MJM6GGRT"
// };

//   firebase.initializeApp(firebaseConfig);
// export const firebaseAuth = firebase.auth()
 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 const firebaseConfig = {
  apiKey: "AIzaSyBtFzXJz6MsyphzINT1VxUOfFn5Jy1o48Q",
  authDomain: "exclusive-ef190.firebaseapp.com",
  projectId: "exclusive-ef190",
  storageBucket: "exclusive-ef190.appspot.com",
  messagingSenderId: "350128301802",
  appId: "1:350128301802:web:913866dd753f46c6bd5993",
  measurementId: "G-M9MJM6GGRT"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);