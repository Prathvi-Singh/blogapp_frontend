import {React ,useState ,useEffect,useContext} from 'react';
import {useParams,Link,useNavigate} from 'react-router-dom';
import API from '../../service/api.js'
import Banner from '../Banner/banner.js';
import { DataContext } from '../../context/DataProvider.js';
import {Comments} from './comments/Comments'

// const 


export const Details=()=>{
  const Navigate=useNavigate();

    const {account}= useContext(DataContext)
    const [post,setPost]=useState({})
    console.log("--- ",account.email);
    const {id}=useParams();
    console.log("in ddetails",id);

    useEffect(()=>{
      const fetchData =async()=>{
          const response =await API.getPostById(id);
          console.log(response);
          if(response.isSuccess){
            setPost(response.data);
          }
      }

      fetchData();
    },[]);

    const deleteBlog=async()=>{
        let response=await API.deletePost(id);

        if(response.isSuccess){
          Navigate('/');
        }

    }

    return (
        <>
        <Banner></Banner>
        <div class="container-fluid border border-primary">
          <div className="container-fluid  border border-primary">
         <h1 class="text-center">{post.title}</h1>
         <div class="row border border-primary">


          <div class="col-12 col-sm-12 col-lg-6 ">
          <h1 >Author : {post.email}</h1>
          </div >
          <div class="col-12 col-sm-12 col-lg-6 text-center">
          {/* <h1>category : {post.categories}</h1>    */}
          <h5 class="mt-2">{post.createDate}</h5>  
          </div>
          </div>
       
       

        <h7 style={{ wordWrap: "break-word"}}><h2 class="text-left">Description :</h2>{post.description}</h7> 
        {/* <h1>{post.picture}</h1> */}
        {
        
       account.email===post.email ? <div><button onClick={deleteBlog}>Delete</button>
       <Link replace to={`/update/${id}`} >
       <button> edit</button>  
       </Link>
       </div> 
       :
       <div>hello</div> 
        }
        </div>
        <div className="container  border border-primary">
        <Comments post={post}/>
        </div>
        </div>
         </>  
    )
}