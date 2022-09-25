import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC97hWqSp1-TPJ3dRIzUQVWNotm8hr_LqY",
  authDomain: "mail-clone-app-2e95f.firebaseapp.com",
  projectId: "mail-clone-app-2e95f",
  storageBucket: "mail-clone-app-2e95f.appspot.com",
  messagingSenderId: "899262684145",
  appId: "1:899262684145:web:f15171b6bc7e60c2430250",
  measurementId: "G-FNK4XKBXY3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
