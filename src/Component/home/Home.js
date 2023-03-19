import React from 'react';
import {Link} from  'react-router-dom'
import Banner from '../Banner/banner.js'
import Categories from '../categories/Categories.js'
import {Post} from '../Post/post.js'  


const style1={
  display:'flex',
  flexDirection:'row',
}

const Home=()=>{
    return (
        <>
        <Banner></Banner>
        <div className="container-fluid">
                <div class="row ">

                <div class=" col-12 col-sm-4 col-lg-2 ">
                <Categories></Categories>
             </div>

        <div class="col-12 col-sm-8 col-lg-10  align-items-center ">
        {/* <h1 > Hello , I am Post</h1> */}
          <div class="row  d-flex justify-content-around" >
         
          <Post></Post>
       
          </div>
          </div>
        </div> 
                      


          </div>
      
                  
           
        </>
    )
}

export default Home;