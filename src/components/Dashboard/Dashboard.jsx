import React from "react";
import styles from './Dashboard.module.css'
import {auth} from '../../firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Dashboard(){
    const navigate = useNavigate()
    const handleLogout = async ()=>{
        await signOut(auth)
        navigate("/")
    }
    return(
        <div className={styles.container}>
            <h2>Bienvenido al Dashboard</h2>
            <p>Has iniciado sesión corectamente.</p>
            <button className={styles.button} onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
} 
export default Dashboard