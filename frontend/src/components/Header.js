import React from 'react'
import { Link } from 'react-router-dom';
import {TextField} from '@mui/material';
const Header = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light  "style={{backgroundColor:"transparent"}}>
  <div class="container-fluid">
    <div className="navbar-brand "><span style={{color:"white",fontWeight:"bold",fontFamily:"cursive"}}>MovieRental </span></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex align-items-center justify-content-between">
       <Link to="/" class="nav-link  active" style={{color:"white"}}>Home</Link> 
       <Link to="/ajouter" class="nav-link  active" style={{color:"white"}}>About</Link> 
       <input type="text" class="form-control ms-sm-5" id="search" placeholder="search  for a movie" style={{height:"30px",width:"400px"}}/>



      </div>
    </div>
  </div>
</nav>
  )
}

export default Header;