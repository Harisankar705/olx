import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN1AYer-bmVQV1wUOXL5dVAr3tftrQdkw",
  authDomain: "olx-clone-react-9debf.firebaseapp.com",
  projectId: "olx-clone-react-9debf",
  storageBucket: "olx-clone-react-9debf.appspot.com",
  messagingSenderId: "632491105253",
  appId: "1:632491105253:web:3100af431c427c1ce36d0c",
  measurementId: "G-X1KT9EXP32",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage=firebase.storage()
export {firebaseApp, firestore, auth,storage };
export default firebase
