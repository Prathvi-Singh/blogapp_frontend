import React from 'react';
import {Link} from  'react-router-dom'
import Banner from './Banner/banner.js'
import Categories from './categories/Categories.js'
import {Post} from './home/Post/post.js'  


const style1={
  display:'flex',
  flexDirection:'row',
}

const Home=()=>{
    return (
        <>
        <Banner></Banner>
        <div className="container-fluid">
                <div class="row border border-primary">

                <div class=" col-12 col-sm-12 col-lg-2 ">
                <Categories></Categories>
             </div>

        <div class="col-12 col-sm-12 col-lg-10 border border-primary text-center ">
        <h1 > Hello , I am Post</h1>
          <div class="row  " >
         
          <Post></Post>
       
          </div>
          </div>
        </div> 
                      


          </div>
      
                  
           
        </>
    )
}

export default Home;