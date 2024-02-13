import { collection, addDoc } from "firebase/firestore/lite"
import {db} from "./App"

const sendData = async(person) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            row1 : person,
    })
    console.log("hit here in  file")
    } catch(e) {
        console.log("didn't send to databse", e)
    }
    window.location.href = "https://discord.gg/pQbmdkqcaJ"
}

export default sendData;