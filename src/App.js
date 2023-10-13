//import {getDatabase,ref,set} from "firebase/database";
import { useEffect,useState } from "react";
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import {app} from "./firebase";

import './App.css';
//const db = getDatabase(app);
const auth = getAuth(app);

function App() {
  // const putData = () =>{
  //   set(ref(db,"user/piyush"),{
  //     id:1,
  //     name:"Piyush",
  //     age:21,
  //   });
    const [user,setUser] = useState(null);
    useEffect(() => {
      onAuthStateChanged(auth,(user) => {
        if(user){
          setUser(user);

        }else{
          console.log("You are logged out");
          setUser(null);
        }
     });
    
  }, []);
  if(user === null)
  {
    return(
      <div className="App">
      <SignupPage/>
      <SigninPage/>
      </div>
    );
  }
  
  return (
    <div className="App">
      <h1> hello {user.email} </h1>
      <button onClick={() => signOut(auth)}>Logout</button>
     
    </div>
  );
}


export default App;
