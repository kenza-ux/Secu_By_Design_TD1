import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const  navigate = useNavigate();
  return (
<nav class="navbar navbar-expand-lg navbar-light container "style={{backgroundColor:"transparent"}}>
  <div class="container-fluid">
    <div className="navbar-brand "><span style={{color:"#ffdb3c",fontWeight:"bold",fontFamily:"cursive",fontSize:"32px"}}>MovieRental </span></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex align-items-center justify-content-between w-100">
        <div className='d-lg-flex gap-2'>
        <Link to="/" class="nav-link  active" style={{color:"white"}}>Home</Link> 
        <Link to="/allMovies" class="nav-link  active" style={{color:"white"}}>All Movies</Link> 
        <Link to="/ajouter" class="nav-link  active" style={{color:"white"}}>About</Link> 
        </div>
       <input type="text" class="form-control mt-lg-0 mt-sm-3 ms-sm-2" id="search" placeholder="search  for a movie" style={{height:"30px",width:"400px"}}/>
       <div className='d-sm-flex align-items-center gap-2'>
       <Button  variant="contained" className='text-white mt-sm-3 mt-lg-0' style={{cursor:"pointer"}} onClick={()=>navigate('/login')}> Login</Button>
       <Button  variant="outlined" className='text-white mt-sm-3 mt-lg-0'  style={{cursor:"pointer"}} onClick={()=>navigate('/register')} > Sign up</Button> 
       </div>
       



      </div>
    </div>
  </div>
</nav>
  )
}

export default Header;