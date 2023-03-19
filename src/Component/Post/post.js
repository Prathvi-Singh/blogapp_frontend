import {React,useState,useEffect} from 'react'
import API from '../../service/api.js'
import {Post1} from './post1.js'
import { useSearchParams } from "react-router-dom";
import {Link} from  'react-router-dom'

export const Post=()=>{
    const [posts,setPosts]=useState([])
   const [count,setCount]=useState(0);
   const [searchParams]=useSearchParams();
   const category = searchParams.get('category');
   console.log(category);
    useEffect(()=>{
       const fetchData =async()=>{
        console.log('Fetching');
            let response=await API.getAllPosts({category:category || ''});
            if(response.isSuccess){
             ///  console.log('Fetching');
               setPosts(response.data);
               console.log(posts);
            }
       }
       fetchData();
    },[category]);
  
   //  setTimeout(() => {
   //    setCount((count) => count + 1);
   //  }, 10000);
    
 return (
    <>

     {

   posts && posts.length > 0 ? posts.map(post=>(<div>
    <Link to={`details/${post._id}`}  style={{textDecoration:'none' ,color:'inherit'}}>
    <Post1 title={post.title} description={post.description} picture={post.picture} date={post.createDate} category={post.categories} useremail={post.email} name={post.name}>
      </Post1>
      </Link>
      </div>) ) 
    : <div>there no data available</div>



     }


  
    
    </>
 )
}