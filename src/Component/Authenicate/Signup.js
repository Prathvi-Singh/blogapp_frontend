import React , {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import API from '../../service/api';
 const style1={
//     width:"1000%", 
//     height:"100%",
//     display:"flex",
//     flexDirection:"column",
//     justifyContent:"center",
//     alignItems:"center",
//     border:" 3px solid black",
//     topMargin:"50px",
     width:"60%",
 }

 function checkPassword(password) {
   
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
  
    
    if (uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password)) {
      return true;
    } else {
      return false;
    }
  }


const Signup=(props)=>{
    const Navigate=useNavigate();
     const [details,setDetails]=useState({
         name:"",
         email:"",
         password:"",

     })
      
     const inputChange=(event)=>{
        console.log(event.target.value,event.target.name);
        setDetails({...details,[event.target.name]:event.target.value});
      
     }

     const signupUser = async()=>{
        
       // const [name,email,password]=details;

       if(details.name.length ==0 || details.password.length==0 || details.email.length==0){
        alert("Please all enter details");
        return;
       }
        
        if(details.password.length<8 ){
            alert("password length must be at least 8 characters");
            return;
        }
        else if(!checkPassword(details.password)){
            alert("password must at least one Uppercase ,Lowercase and special character");
            return;
        }
       
        
      
        
   
        const response= await API.userSignup(details);
        console.log("---->",response);
        if(response.data.message==="duplicate"){
            alert("email already in use");
        } 
        else if(response.isSuccess){ 
           setDetails({});
           Navigate('/');
        }
       
        console.log(response);

     }


        return(
        <>
            <div class="container mt-5 text-center" style={style1}>
                <h1>👀App</h1>
                <div  >
                    <div class="form-group mt-5">

                        <input type="text" class="form-control" id="exampleInputPassword1" 
                        placeholder="Name" 
                        name="name" 
                        onChange={inputChange}/>
                    </div>
                    <div class="form-group">

                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        placeholder="Email address"
                        name="email"
                        onChange={inputChange}
                         />

                    </div>
                     <div class="form-group">

                        <input type="password" class="form-control" id="exampleInputPassword1" 
                        placeholder="Password" 
                        name="password"
                        onChange={inputChange}
                        />
                    </div>
                    <button type="submit" class="btn btn-outline-primary btn-lg mt-4" onClick={signupUser}>Submit</button>
                    <br></br>
                    <br></br>
                    <button type="submit" class="btn btn-outline-success btn-lg" 
                    style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}
                    onClick={()=>{
                          props.onSelect(props.index);
                    }} >Already have Account</button>
                  

                </div>
            </div>
        </>
    )
};

export default Signup;