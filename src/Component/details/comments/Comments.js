import {React ,useState,useContext,useEffect} from 'react'
import API from  '../../../service/api.js'
import { DataContext } from '../../../context/DataProvider.js'
import  deleteImage from '../../images/delete.png'
import {useParams,Link,useNavigate} from 'react-router-dom';
import del from '../../images/del.svg'

export const Comments =({post})=>{
  const {account}=useContext(DataContext);
   const [allcomments,setAllComment]=useState([]);
   console.log("----",account.email,post._id)
   const [comment,setComments]=useState({
    name:"",
    postId:"",
    userId:account.id,
    comment:"",
    date:new Date(),
   })
   const Navigate=useNavigate();
   const handleChange=(e)=>{
     
    setComments({...comment,
        name:account.name,
        postId:post._id,
        comment:e.target.value,
        userId:account.id
        
    })
    console.log(account.id);
    console.log(comment);
   }

   // useEffect(()=>{


   // },[])

   const getAllComments=async()=>{
      console.log("id :",post._id);
       const response=await API.comm({id:post._id});
       if(response.isSuccess){
         setAllComment(response.data)
          console.log(response.data);
       } 
   }

  

  const deletecomments=async(id)=>{
   
    const response = await API.deleteComm(id);
    if(response.isSuccess){

      console.log("comment deleted");
   //   setAllComment(response.data)
   getAllComments();
      Navigate(`/details/${post._id}`)
    }
  
  }

   const addComments=async()=>{
         const response=await API.newComment(comment);
         if(response.isSuccess){
            // getAllComments()
          //setComments(response.data);
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
             <button  onClick={addComments}>Post{allcomments.length}</button>
            </div>
        <button   class="btn btn-success my-4"  onClick={getAllComments}>show ALL Comments</button>
        
       
        </div>   
         </div>
         <div class="container">
            {
               
               allcomments.map(c=>(
                  <div>
                  <div class="card border border-dark" style={{width: "18rem;"}}>
                  <div class="card-header text-info">
                   {c.name}
                  </div>
                  <div class="container ">
                    <div class="row d-flex justify-content-between">
                     <div>
                     {c.comment}
                     </div>
                     <div class="row mr-2"> 
                     {/* <div>
                        
                     <button>edit</button>
                     </div> */}
                     <div>
                     {
                      account.id===c.userId ?  
                       <div onClick={()=>{
                       // console.log(c.userId);
                        deletecomments(c._id);
                     }}><img src={del}></img></div>
                     :
                     <div></div>

                     }
                   
                     </div>

                     </div>
                     </div>
                    
                  </div>
                </div>
                </div>

                  )
               )

            }

         </div>
        </>
    )
}