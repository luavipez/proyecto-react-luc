import React, {useState} from "react";
import styles from './SignupForm.module.css'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SignupForm(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const handleSignUp = async (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage("Las contraseñas no coinciden")
            return
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate("/dashboard")
        } catch (error) {
            setMessage("Error: "+error.message)
        }
    }
    return(
        
        <form className={styles.form} onSubmit={handleSignUp}>
            <h1>Hola, este es mi nuevo cambio</h1>
            <h2>Registrar</h2>
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
            <input 
                    className={styles.input}        
                    type="password"
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    required
            />
            <button className={styles.button} type="submit">Registrarse</button>
            {message && <p className={styles.message}>{message}</p>}
        </form>
    )
}
export default SignupForm