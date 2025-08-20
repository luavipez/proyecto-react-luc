import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AuthForm from './components/AuthForm/AuthForm'
import SignupForm from './components/SignupForm/SignupForm'
import PrivateRoute from './components/Router/PrivateRoute'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return(     
    <Router>
      <h1>Hola, este es mi nuevo cambio</h1>
      <nav>
        <Link to="/">Login</Link> | <Link to="/signup">Registro</Link>        
      </nav>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default App
