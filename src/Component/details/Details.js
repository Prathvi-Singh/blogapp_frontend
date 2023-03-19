import {React ,useState ,useEffect,useContext} from 'react';
import {useParams,Link,useNavigate} from 'react-router-dom';
import API from '../../service/api.js'
import Banner from '../Banner/banner.js';
import { DataContext } from '../../context/DataProvider.js';
import {Comments} from './comments/Comments'
import del from '../images/del.svg'
import edit from '../images/edit.svg'

 
const style1={
  height:"400px",
  width:"100%"
}

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
        //    var datefrompost =post.createDate.toDateString();
           
           
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
   // const date=post.createDate;
    return (
        <>
                  <div className="container-fluid " >
        <img src={post.picture} style={style1}></img>
</div>  
        <div class="container-fluid ">
          <div className="container-fluid  border border-dark">
         <h1 class="text-center" style={{ wordWrap: "break-word"}}>{post.title}</h1>
         <div class="row ">


          <div class="col-12 col-sm-12 col-lg-6 ">
          <h1 style={{ wordWrap: "break-word"}}>Author : {post.name}</h1>
          </div >
          <div class="col-12 col-sm-12 col-lg-6 text-center">
          {/* <h1>category : {post.categories}</h1>    */}
          <h5 class="mt-2">{new Date(post.createDate).toDateString()}</h5>  
          </div>
          </div>
       
       

        <div style={{ wordWrap: "break-word"}} class="my-4"><span class="text-left h3" >Description : </span>{post.description}</div> 
        {/* <h1>{post.picture}</h1> */}
        <div class="d-flex justify-content-end">
        {
        
       account.email===post.email ? <div> <div type="submit" onClick={deleteBlog}><img src={del}></img></div>
       <Link replace to={`/update/${id}`} >
       <div type="submit" ><img src={edit}></img></div>  
       </Link>
       </div> 
       :
       <div>hello</div> 
        }
        </div>
        <div className="container  mt-5">
        <Comments post={post}/>
        </div>
        </div>
        </div>
         </>  
    )
}