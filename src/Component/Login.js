import React ,{useState,useContext} from 'react';
import API from '../service/api';
import { DataContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';
 const style1={

     width:"40%",
 }

const Login=(props)=>{
    const Navigate=useNavigate();

    const [login,setLogin] =useState({
        email:"",
        password:""
    });

    const [error,setError]=useState('');

    const handleChange = (e)=>{
        console.log(e.target.name,e.target.value);
         setLogin({
          ...login,
            [e.target.name]:e.target.value
        })
    }    
    const {setAccount} =useContext(DataContext);

    const order=()=>{
        console.log("true");
        props.userAuth("true");
     }

    const loginUser = async()=>{
       const response=await API.userLogin(login);
      
    //    console.log(response)
       if(response.isSuccess){
         setError('');
         sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`)
         sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`)
         setAccount({email:response.data.email,name:response.data.name})  
         console.log(props.userAuth);
         order();
         Navigate('/');
       
        }
       else{
        setError("there is some error")
       }
    }
    
    

    return(
        <>
            <div class="container mt-5 text-center" style={style1}>
                <h1>👀App</h1>
                <div >
                    <div class="form-group">

                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        placeholder="Email address"
                        name="email"
                        onChange={handleChange}/>

                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control" id="exampleInputPassword1"
                         placeholder="Password"
                         name="password"
                         onChange={handleChange} />
                    </div>

                    <button type="submit" class="btn btn-outline-success btn-lg"  onClick={(loginUser)}>Submit</button>
                    <br></br>
                    <button type="submit" class="btn btn-outline-primary btn-lg mt-4" onClick={()=>{
                        console.log(props.index);
                        props.onSelect(props.index);
                    }} >Create Account</button>

                </div>
            </div>
        </>
    )
};

export default Login;
