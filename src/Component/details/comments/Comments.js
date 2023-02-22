import {React ,useState,useContext} from 'react'
import API from  '../../../service/api.js'
import { DataContext } from '../../../context/DataProvider.js'

export const Comments =({post})=>{
  const {account}=useContext(DataContext);
  
   console.log("----",account.email)
   const [comment,setComments]=useState({
    name:"",
    postId:"",
    comments:"",
    date:new Date(),
   })

   const handleChange=(e)=>{
    setComments({...comment,
        name:account.email,
        postId:post._id,
        comments:e.target.value,
        
    })
   }

   const addComments=async()=>{
         const response=await API.newComment(comment);
         if(response.isSuccess){
            setComments(response.data);
         }
   }

    return (
        <>
        <div className="container">
         <div className="row ">
            <div className=""></div>
            <div class="col-12 col-sm-12 col-lg-1 mt-2">
               <h1 > 👦</h1>
            </div>
            <div class="col-12 col-sm-12 col-lg-10 mt-2">
               <textarea  style={{width:"100%"}} onChange={handleChange}></textarea>
            </div>
            <div class="col-12 col-sm-12 col-lg-1 mt-3">
             <button  onClick={addComments}>Post</button>
            </div>
       
        
       
        </div>   
         </div>
        </>
    )
}