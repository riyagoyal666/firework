import React ,{useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase";
const auth=getAuth(app);
const SigninPage = () => {
    const [ email,setEmail] =  useState("");
    const [ password,setPassword]= useState("");
    const SigninPage = ()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((value) =>console.log("Signin success"))
        .catch((err) => console.log(err));
        }
    return (
    <div className="signin-pge">
        <h1>Sign in page</h1>
        <label>enter your email</label>
        <input
        onChange={(e) =>setEmail(e.target.value)}
            value={email}
            type="email"
          
            placeholder="enter your email here"
            />
            <label>enter your password</label>
        <input
        onChange={(e) =>setPassword(e.target.value)}
            value={password}
            type="password"
           
            placeholder="enter your pwd here"
            />
            <button onClick={SigninPage}>Signin me in</button>
            

       
    </div>
    );
    
};
export default SigninPage;