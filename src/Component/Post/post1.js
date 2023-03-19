import React from 'react';
import './post1.css'

const style1={
    width: "22rem",
   // height:"2px"
    //height: "15rem"
}

export const Post1=(props)=>{
  // var date=props.date;
  // console.log(date)
  //date=date.toLocaleDateString(); 
  //console.log(date);
  //const description1=props.description;
 // console.log(description1);
  // description1= description1.length >= 10 ? description1.substring(1, 10)  + "..." : description1;
    return (
      <>


<div class="card  mt-4 " style={style1}>
<img src={props.picture} style={{height:"150px"}}/>
<div class="card-body  text-center">

<h2 class="card-title" style={{wordWrap:'"break-word"'}}>{props.category}</h2>
  <h5 class="card-title" style={{wordWrap:'"break-word"'}}>{props.title}</h5>
  <p class="card-text" style={{wordWrap:'"break-word"'}}>{props.description}</p>
  {/* <h2 class="card-title">{props.date}</h2> */}
  <h2 class="card-title" style={{wordWrap:'"break-word"'}}>{props.name}</h2>
  <a href="#" class="btn btn-primary">want to view</a>
</div>
</div>
      
      
      </>

    )
}