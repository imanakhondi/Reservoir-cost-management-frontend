import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDgcyuCLYhRrtXr5lT1rg_orpSXXw41HFU",
  authDomain: "freelancer-app-bf7e0.firebaseapp.com",
  projectId: "freelancer-app-bf7e0",
  storageBucket: "freelancer-app-bf7e0.appspot.com",
  messagingSenderId: "658949569730",
  appId: "1:658949569730:web:44714b409e2dd990070f5b",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
