import React , {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import API from '../service/api';
 const style1={
//     width:"1000%", 
//     height:"100%",
//     display:"flex",
//     flexDirection:"column",
//     justifyContent:"center",
//     alignItems:"center",
//     border:" 3px solid black",
//     topMargin:"50px",
     width:"40%",
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
       
        const response= await API.userSignup(details);
        // if(response.isSuccess){
        //    Navigate('/');
        // }
        console.log(response);

     }


        return(
        <>
            <div class="container mt-5 text-center" style={style1}>
                <h1>👀App</h1>
                <div  >
                    <div class="form-group">

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

                        <input type="string" class="form-control" id="exampleInputPassword1" 
                        placeholder="Password" 
                        name="password"
                        onChange={inputChange}
                        />
                    </div>
                    <button type="submit" class="btn btn-outline-primary btn-lg mt-4" onClick={signupUser}>Submit</button>
                    <br></br>
                    <br></br>
                    <button type="submit" class="btn btn-outline-success btn-lg" 
                    style={{ wordWrap: "break-word"}}
                    onClick={()=>{
                          props.onSelect(props.index);
                    }} >Already have Account</button>
                  

                </div>
            </div>
        </>
    )
};

export default Signup;