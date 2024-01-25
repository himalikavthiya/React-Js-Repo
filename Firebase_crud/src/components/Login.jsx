import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase/function/function'
import {signInWithEmailAndPassword}from 'firebase/auth'

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navitage = useNavigate()

      const handleLogin = (e) => {
    e.preventDefault();

     signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // dispatch({type:"LOGIN", payload:user})
        navitage("/users")
      })
      .catch((error) => {
        setError(true);
      });
      }
  return (
    <>
      <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
    </>
  )
}

export default Login
