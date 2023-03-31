import {React,useState ,useEffect,useContext} from 'react';
import axios from 'axios';
import Banner from '../Banner/banner.js'
import {useLocation ,useNavigate} from 'react-router-dom'
import { DataContext } from '../../context/DataProvider.js';
import API from '../../service/api.js'
import addImg from '../images/add2.svg'
const img2="https://images.pexels.com/photos/2792043/pexels-photo-2792043.jpeg?cs=srgb&dl=pexels-steshka-willems-2792043.jpg&fm=jpg"

const style1={
  height:"400px",
  width:"100%"
}
const CreatePost=()=>{
    const Navigate=useNavigate();
   
    const {account}=useContext(DataContext);

    const [postData,setData]=useState({
        email:"",
        title:"",
        description:"",
        picture:img2,
        createDate:new Date(),
        categories:"",
        name:account.name
    })

    const [file,setFiles]=useState()

   


    const handleChange=(e)=>{
        
       setData({...postData,[e.target.name]:e.target.value}) 
       console.log(postData)
    }
    const location=useLocation();

    const url=postData.picture ? postData.picture : "imageurl";

    useEffect(()=>{
    //   const getImage =async()=>{
    //     console.log("OM",file,"OM");
    //       if(file){
    //          const data = new FormData();
    //         console.log("I am function in useEffect");

    //      //   console.log("before",data)
    //          data.append("file",file);
    //          data.append("name", file.name);
    //        //  console.log(file);
           
    //      //    console.log("after",data)

    //          for (const pair of data.entries()) {
    //             console.log(`${pair[0]}, ${pair[1]}`);
    //           }
    //           console.log(Object.fromEntries(data))
    //         const f1=file;
    //         console.log(`------${f1} -----`,f1);
    //         const response=await API.uploadFile(data); 
           
    //         postData.picture=response.data;
          
    //       }
         

    //   }
    //    getImage();
    const getImage=async()=>{
      const URL = "http://localhost:8000/file/upload";
      const data =new FormData() 
      data.append("file",file);
      data.append("name", file.name);
      
      try{
          let response= await axios.post(URL,data)
          if(response.status == 200){
           console.log(response.data);
         // setData({ ...postData, });
         // data.filename=response.data
          // console.log("--",postData.filename,postData.description)
           postData.picture = response.data
           
          }
         }
         catch(error){
          console.log('error..');
         }
     } 

     getImage();
      postData.categories=location.search?.split("=")[1] || "ALL";
      postData.email=account.email;
     //  console.log(postData);
      //console.log("hello I am useEffect");
},[file]) 

    // console.log(postData);
    const handleChange2=(e)=>{
    console.log("jaimata de ",e.target.files[0]); 

    setFiles(e.target.files[0])
   // console.log("har har maha dev=",file);
   

}

    const savePost = async() =>{
      if(postData.title.length===0 || postData.description.length===0){
        alert("Please fill all entities");
        return ;
      }
      const response=await API.createPost(postData);
      if(response.isSuccess){
        Navigate('/')
      }
         
    }


    return (
        <>
        {/* <Banner props={postData}></Banner> */}
        {/* <div  > */}
  
  {/* <label for="myfile" name="picture">Select a file:</label>
  <input type="file" id="myfile"  style={{display:"None"}}
   onChange={handleChange2}
   />
  <input type="text"  name="title" placeholder='title' 
   onChange={handleChange}
   />
  <button type="submit" onClick={savePost}>Publish</button>
  <br/> */}
{/* 
  <textarea  name="description" onChange={handleChange}></textarea>
</div> */}
           <div className="container-fluid" >
        <img src={postData.picture} style={style1}></img>
</div>  

<div className="container-fluid">
         <div className="row ">
            <div className=""></div>
            <div class="col-12 col-sm-12 col-lg-1 mt-2">
            <label for="myfile" name="picture" >select image</label>
  <input type="file" id="myfile"  style={{display:"None"}}
   onChange={handleChange2}
   />
   
            </div>
            <div class="col-12 col-sm-12 col-lg-10 mt-2">
            <input className="mt-2" type="text" style={{width:"100%"}} name="title" placeholder='title' 
   onChange={handleChange}
   />
     <textarea className="mt-2" placeholder='description' name="description" onChange={handleChange} style={{width:"100%"}}></textarea>
            </div>
            <div class="col-12 col-sm-12 col-lg-1 mt-3">
            <button type="submit" onClick={savePost}>Publish</button>
            </div>
       
        
       
        </div>   
         </div>

       
{/* </div> */}
        </>
    )
} 

export default CreatePost;

