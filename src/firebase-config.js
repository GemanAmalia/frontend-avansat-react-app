import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvqKO9PAgCceLn6kwcPZzmolpDOLw5EaI",
    authDomain: "therapy-app-f5d52.firebaseapp.com",
    projectId: "therapy-app-f5d52",
    storageBucket: "therapy-app-f5d52.appspot.com",
    messagingSenderId: "498990711697",
    appId: "1:498990711697:web:fc79f676acd3af6a815030",
    measurementId: "G-ECSXZLPLS8"
  };

const app = initializeApp(firebaseConfig);

export const  db = getFirestore(app);