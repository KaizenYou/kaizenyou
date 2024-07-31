
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA9r1Ejq1P7DcpaNTybV09R68pL093K4So",
  authDomain: "kaizenyou-ee24e.firebaseapp.com",
  projectId: "kaizenyou-ee24e",
  storageBucket: "kaizenyou-ee24e.appspot.com",
  messagingSenderId: "550553727550",
  appId: "1:550553727550:web:25b7f26ed2ed569b4c176f",
  measurementId: "G-7Y9PZKDT2E"
};


const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}