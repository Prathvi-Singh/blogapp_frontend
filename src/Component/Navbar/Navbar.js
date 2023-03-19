import React from 'react'
// import 'boostrap/dist/css/boostrap.css';
import { Link ,useNavigate } from 'react-router-dom'

const Navbar = ()=>{
 const Navigate=useNavigate();
  const deleteAuth=()=>{
    localStorage.clear();
    sessionStorage.clear();
    // Navigate('/Auth');
}

    return (
      
  

        <>
        {/* <h1> Prathvi Singh</h1> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  < Link  className="navbar-brand"to="/">BlogApp</ Link >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active ">
        < Link className="nav-link" to="/">Home <span className="sr-only"></span></ Link >
      </li>
      <li className="nav-item  ">
        < Link  className="nav-link" to="/about">About</ Link >
      </li>
      <li className="nav-item   ">
        < Link  className="nav-link" to="/contact">Contact</ Link >
      </li>
      {/* <li className="nav-item ">
        < Link  className="nav-link" to="/Auth">Login</ Link >
      </li> */}
      <li className="nav-item ">
        < Link  className="nav-link"  to="/Auth" onClick={deleteAuth}>Logout</ Link >
      </li>
      {/* <li className="nav-item  ">
        < Link  className="nav-link" to="/signup">Signup</ Link >
      </li> */}

     
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
</>
    )
}

export default Navbar