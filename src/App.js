import './App.css';
import Form  from "./form";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';


// Initilze firebase

const firebaseConfig = {
  apiKey: "AIzaSyB_oYaLeZHn7sUzJr8bB9qtsTHUGML8X58",
  authDomain: "reactbacj.firebaseapp.com",
  projectId: "reactbacj",
  storageBucket: "reactbacj.appspot.com",
  messagingSenderId: "782524797432",
  appId: "1:782524797432:web:5e36aa3df8a40d38c6460d",
  measurementId: "G-57FQBMZHTE"
};

// Initialize Firebase, firesore
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};

const addToDataBase = async(name) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        row1: {name},
      });
    
    } catch(e) {
      console.log("didn't go")
    }
}

function App() {
  return ( 
    <Form/>
  )
}

export default App;
