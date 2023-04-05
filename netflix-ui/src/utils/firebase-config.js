import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdHaDn1W-AYIgeubRMHr7d-d1FwTIjdQI",
  authDomain: "react-netflix-clone-bc4e7.firebaseapp.com",
  projectId: "react-netflix-clone-bc4e7",
  storageBucket: "react-netflix-clone-bc4e7.appspot.com",
  messagingSenderId: "325107520035",
  appId: "1:325107520035:web:8a4536b990c69a3a571796",
  measurementId: "G-WEVR0S94S9"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);