import React ,{useState} from 'react'
import Login from './Login'
import Signup from './Signup'

const Auth=({isUserAuthenticate})=>{
const [auth,setAuth]=useState("login");
    
   const changeAuth = (index) => {
    console.log(isUserAuthenticate)
  // isUserAuthenticate(true);
    console.log(index)
       setAuth(index);
   }
    return (
    <>
    {
      auth === "login" ?   <Login index={"signup"} onSelect={changeAuth} userAuth={isUserAuthenticate}> </Login> : <Signup  index={"login"} onSelect={changeAuth}/>
    
    }
    
    </>

    )

}

export default Auth