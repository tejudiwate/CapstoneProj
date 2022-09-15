import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTLQ8nEGNT-bCp07q3_whHJFaqziX29o0",
  authDomain: "restaurantapp-9a442.firebaseapp.com",
  databaseURL: "https://restaurantapp-9a442-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-9a442",
  storageBucket: "restaurantapp-9a442.appspot.com",
  messagingSenderId: "261141151105",
  appId: "1:261141151105:web:032e8b388023e7abb57c80"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
