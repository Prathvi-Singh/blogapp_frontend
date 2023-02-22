import React from 'react';

const img1="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F168392473544140633%2F&psig=AOvVaw3rKBPBUhr5F2ixyr07z_nH&ust=1675687183990000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMjDnqyz_vwCFQAAAAAdAAAAABAE"
const img2="https://images.pexels.com/photos/2792043/pexels-photo-2792043.jpeg?cs=srgb&dl=pexels-steshka-willems-2792043.jpg&fm=jpg"
const style1={
  height:"400px",
}

const Banner=()=>{
    return (
        
        <>
        <div className="container-fluid" style={style1}>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" style={style1} src={img2} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={style1} src={img1} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={style1} src={img2} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>  
        </>
    )
}

export default Banner;