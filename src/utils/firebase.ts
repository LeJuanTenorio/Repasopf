import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, QuerySnapshot } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBM7MOyoSUmSkRCHOFqk5tVGCGtHjKHPqk",
  authDomain: "sphere-3b8a9.firebaseapp.com",
  projectId: "sphere-3b8a9",
  storageBucket: "sphere-3b8a9.appspot.com",
  messagingSenderId: "1063773883036",
  appId: "1:1063773883036:web:432e3837d153391335fb59"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addToDataBase = async (titleVariable: string, descriptionVariable: string,) => {
    try{
        const card = {
            title: titleVariable,
            description: descriptionVariable,
        }
    const where = collection(db,"tasks")
    await addDoc(where,card)
    }
    catch (error){
        console.error(error)
    }
}

export default {


}