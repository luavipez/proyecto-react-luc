import React, {useState} from "react";
import {auth} from "../../firebase"
import styles from './AuthForm.module.css'
import {signInWithEmailAndPassword} from "firebase/auth"
import {Form, useNavigate} from "react-router-dom"
function AuthForm(){
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const handleLogin = async(e)=>{
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth,email,password)
            navigate("/dashboard")
        } catch (error) {
            setMessage("Error: " + error.message)
        }
    }    
return(
    <form className={styles.form} onSubmit={handleLogin}>
        <h1>Hola, este es mi nuevo cambio</h1>
        <h2>Iniciar Sesión</h2>
        <input 
        className={styles.input}        
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        />
        <input 
        className={styles.input}        
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        />
        <button className={styles.button} type="submit">Ingresar</button>
        {message && <p className={styles.message}>{message}</p>}
    </form>
)
}
export default AuthForm