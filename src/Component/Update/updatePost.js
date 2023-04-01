import { React,useEffect,useState,useContext } from 'react';
import axios from 'axios';
import Banner from '../Banner/banner.js'
import {useLocation ,useNavigate ,useParams} from 'react-router-dom'
import { DataContext } from '../../context/DataProvider.js';
// import addimages from '../images/addimages.svg'
import API from '../../service/api.js'

const img2="https://images.pexels.com/photos/2792043/pexels-photo-2792043.jpeg?cs=srgb&dl=pexels-steshka-willems-2792043.jpg&fm=jpg";

const style1={
  height:"400px",
  width:"100%"
}

 const UpdatePost=()=>{
    const Navigate=useNavigate();
    const [postData,setData]=useState({
        email:"",
        title:"",
        description:"",
        picture:"gum ho gayi",
        createDate:new Date(),
        categories:"",
    })
    const {id}=useParams();
    const [file,setFiles]=useState()
    console.log("hello update aa gaya");
    const {account}=useContext(DataContext);


    const handleChange=(e)=>{
        
       setData({...postData,[e.target.name]:e.target.value}) 
    //    console.log(postData)
    }
    const location=useLocation();

    const url=postData.picture ? postData.picture : "imageurl";

    useEffect(()=>{
        const fetchData=async()=>{
          console.log("hello update aa gaya");
           let response = await API.getPostById(id);
           
           if(response.isSuccess){
             setData(response.data);
           }
        } 

       fetchData();
    },[]) 
    


    useEffect(()=>{
      const getImage=async()=>{
        const URL = "https://blog-app-backend-0q8t.onrender.com/file/upload";
        const data =new FormData() 
        data.append("file",file);
        data.append("name", file.name);
        
        try{
            let response= await axios.post(URL,data)
            if(response.status == 200){
             console.log("+++",response.data);
           // setData({ ...postData, });
           // data.filename=response.data
            // console.log("--",postData.filename,postData.description)
             postData.picture = response.data
             console.log("***",postData);
             
            }
           }
           catch(error){
            console.log('error..');
           }
       } 
  
       getImage();
  
      postData.categories=location.search?.split("=")[1] || "ALL";
      postData.email=account.email;
 
},[file]) 

    // console.log(postData);
    const handleChange2=(e)=>{
    console.log("jaimata de ",e.target.files[0]); 

    setFiles(e.target.files[0])
   // console.log("har har maha dev=",file);
   

}

    const updateBlogPost = async() =>{
      if(postData.title.length===0 || postData.description.length===0){
        alert("Please fill all entities");
        return ;
      }
     // console.log("mai toh upadate tu kha hai",postData);
      const response=await API.updateBlog(postData);
      if(response.isSuccess){
        Navigate(`/details/${id}`)
      }
         
    }


    return (
        <>
                  <div className="container-fluid" >
        <img src={postData.picture} style={style1}></img>
</div>  

<div className="container-fluid">
         <div className="row ">
            <div className=""></div>
            <div class="col-12 col-sm-12 col-lg-1 mt-2">
            <label for="myfile" name="picture"> select file</label>
  <input type="file" id="myfile"  style={{display:"None"}}
  
   onChange={handleChange2}
   />
            </div>
            <div class="col-12 col-sm-12 col-lg-10 mt-2">
            <input className="mt-2" type="text" style={{width:"100%"}} name="categories" placeholder='change categories' 
              value={postData.categories}
           onChange={handleChange}
       />  
            <input className="mt-2" type="text" style={{width:"100%"}} name="title" placeholder='title' 
              value={postData.title}
   onChange={handleChange}
   />
     <textarea className="mt-2" name="description"
      value={postData.description} 
     onChange={handleChange} style={{width:"100%"}}></textarea>
            </div>
            <div class="col-12 col-sm-12 col-lg-1 mt-3">
            <button type="submit" onClick={updateBlogPost}>Update</button>
            </div>
       
        
       
        </div>   
         </div>



        </>
    )
} 

 export default UpdatePost;

