import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyACCDzpZhCW2QcFA9nofO-urugh6Sm2oRw",
  authDomain: "staycation-12fbf.firebaseapp.com",
  projectId: "staycation-12fbf",
  storageBucket: "staycation-12fbf.appspot.com",
  messagingSenderId: "114651179669",
  appId: "1:114651179669:web:f8939f739a5cae4585099c",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
