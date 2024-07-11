import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom';
import './header.css'
import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useRefresh } from '../global/refreshContext';
import { BsCart4 } from "react-icons/bs";



const Header = () => {
  const { refresh } = useRefresh();
  const [userId,setUserId]=useState();
   const [tokenAndName,setTokenAndName] = useState(null)
   const [role,setRole] =useState('')
  useEffect(() => {
    const userCredentials =localStorage.getItem('movie-rental-cred')
    setUserId(localStorage.getItem('movie-rental-user-id'))
    setTokenAndName(JSON.parse(userCredentials))
    setRole(localStorage.getItem('role')|| '')
    console.log(tokenAndName)
  },[refresh])

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
        <Link to="/about" class="nav-link  active" style={{color:"white"}}>About</Link> 
        {role==='admin' && (<Link to="/admin" class="nav-link  active" style={{color:"white"}}>Admin Panel</Link>) }
        </div>
       <input type="text" class="form-control mt-lg-0 mt-sm-3 ms-sm-2" id="search" placeholder="search  for a movie" style={{height:"30px",width:"400px"}}/>
      {tokenAndName==null?(<div className='d-sm-flex align-items-center gap-2'>
       <Button  variant="contained" className='text-white mt-sm-3 mt-lg-0' style={{cursor:"pointer"}} onClick={()=>navigate('/login')}> Login</Button>
       <Button  variant="outlined" className='text-white mt-sm-3 mt-lg-0'  style={{cursor:"pointer"}} onClick={()=>navigate('/register')} > Sign up</Button> 
       </div>):(<div className='d-sm-flex align-items-center gap-4'>
       <h6  style={{color:"#a19f9f",padding:"8px",fontSize:"16px",border:"1px solid #471b53",borderRadius:"15px",fontFamily:"cursive"}} className='  mt-sm-3 mt-lg-1' > {tokenAndName.name}</h6>
       <Button  variant="contained" className='text-white mt-sm-3 mt-lg-0'  style={{cursor:"pointer"}} onClick={()=>{
        setTokenAndName(null)
        localStorage.removeItem('movie-rental-user-id')
        localStorage.removeItem('movie-rental-cred')
        localStorage.removeItem('role')
        setTokenAndName(null)
        setUserId(null)
        setRole(null)

        navigate('/')
       }}> Logout</Button> 
       <BsCart4 className='fs-3' style={{color:"var(--yellow-title)",cursor:"pointer"}} onClick={()=>{navigate('/user/cart',{state:{userId:userId}})}}/>
       </div>)} 
       



      </div>
    </div>
  </div>
</nav>
  )
}

export default Header;