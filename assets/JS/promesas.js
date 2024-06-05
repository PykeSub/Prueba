import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
import {db} from "./firebase.js"

export const registrarDepartamento = async(departamento)=>{
    console.log(departamento)
    const docRef = await addDoc(collection(db, "departamentos"), departamento);
}

export const obtenerDepartamentos = async()=>{
    const ref = collection(db, "departamentos");
    const querySnapshoot = await getDocs(ref);
    let departamentos = [];
    querySnapshoot.forEach((doc)=>{
        departamentos.push({...doc.data(), id : doc.id});
    });
    return departamentos;
}

export const actualizarDepartamento = async(departamento, id)=>{
    const ref = doc(db, "departamentos", id);
    await updateDoc(ref, departamento);
}

export const eliminarDepartamento = async()=>{
    const ref = doc(db, "departamentos", id);
    await deleteDoc(ref);
}