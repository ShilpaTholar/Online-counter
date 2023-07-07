import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCCFeJANInWMh5zhv2nz6PxtYQVDdvHg20",
  authDomain: "online-counter-83e86.firebaseapp.com",
  projectId: "online-counter-83e86",
  storageBucket: "online-counter-83e86.appspot.com",
  messagingSenderId: "740810335815",
  appId: "1:740810335815:web:10bc1daed137551d053362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;