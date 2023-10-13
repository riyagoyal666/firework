import React,{useState} from "react";
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {app} from "../firebase";

const auth =  getAuth(app);
const GoogleProvider =  new GoogleAuthProvider();
const SignupPage = () =>{
    const [ email,setEmail] =  useState("");
    const [ password,setpassword]= useState("");
    const createUser =()=>{
        createUserWithEmailAndPassword(auth,email,password).then((value)=>alert("Sucess"));
    };
    const signupWithGoogle =()=>{
        signInWithPopup(auth,GoogleProvider);
    };
    return (
        <div className="signup-page">
            <h1>Signup Page</h1>
            <label>Email</label>
            <label>Email</label>
            <input onChange={(e) =>setEmail(e.target.value)}
            value={email}
            type="email"
            required
            placeholder="enter your email here"/>
            <label>Password</label>
            <input
            onChange={(e) =>setpassword(e.target.value)}
            value={password}
            type="password"
            required
            placeholder="enter your email here"/>
          <br/>
          <button onClick={signupWithGoogle}>Signin with Google</button>
          <button onClick={createUser}>Signup</button>
            </div>
    )

}
export default SignupPage;