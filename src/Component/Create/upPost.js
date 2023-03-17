import {React,useState ,useEffect,useContext} from 'react';
import Banner from '../Banner/banner.js'
import {useLocation ,useNavigate ,useParams} from 'react-router-dom'
import { DataContext } from '../../context/DataProvider.js';

import API from '../../service/api.js'
const img2="https://images.pexels.com/photos/2792043/pexels-photo-2792043.jpeg?cs=srgb&dl=pexels-steshka-willems-2792043.jpg&fm=jpg"

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

    const updateBlogPost = async() =>{
      const response=await API.updateBlog(postData);
      if(response.isSuccess){
        Navigate(`/details/${id}`)
      }
         
    }


    return (
        <>
        <Banner></Banner>
        {/* <div  > */}
  {/* <label for="myfile" name="picture">Select a file:</label>
  <input type="file" id="myfile"  style={{display:"None"}}
   onChange={handleChange2}
   />
  <input type="text"  name="title" placeholder='title' 
   value={postData.title}
   onChange={handleChange}
   />
  <button type="submit" onClick={updateBlogPost}>Update</button>
  <br/>
  <textarea  name="description"
  value={postData.description} 
  onChange={handleChange}></textarea>
</div>
         */}
<div className="container-fluid">
         <div className="row ">
            <div className=""></div>
            <div class="col-12 col-sm-12 col-lg-1 mt-2">
            <label for="myfile" name="picture">Select a file:</label>
  <input type="file" id="myfile"  style={{display:"None"}}
   onChange={handleChange2}
   />
            </div>
            <div class="col-12 col-sm-12 col-lg-10 mt-2">
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

