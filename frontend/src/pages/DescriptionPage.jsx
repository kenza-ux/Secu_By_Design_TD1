import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './descriptionPage.css'
import{Button} from '@mui/material'
import { rentMovie,checkMovieRented } from '../services/api'
const DescriptionPage = () => {
  const {movie} = useLocation().state
  const userId = localStorage.getItem('movie-rental-user-id')
  const [isMovieRented,setIsMovieRented] = useState(false)
  const addMovieToRentedList = async()=>{
    try{
      const response = await rentMovie(userId,movie._id)
      console.log(response)
      if(response.status===200){
        setIsMovieRented(true)
      }
    }
    catch(e){
      console.log(e)
    } 
  }

  useEffect(()=>{
    const isUserRentedMovie = async()=>{
      const response = await checkMovieRented(userId,movie._id)
      response.data===true?setIsMovieRented(true):setIsMovieRented(false)
    }
   if(userId!==null) isUserRentedMovie()
  })
  return (
    <div className='pb-5'>
      <div className='mt-4 py-5 container' style={{border:"2px solid black"}}> 
          <div className="row" >
            <div className="col-6">
              <img src={movie.image} style={{width:"80%",Height:"700px",}}   alt=""  />
           { userId!==null?(
             isMovieRented===false?(
             <div  onClick={addMovieToRentedList}>
                <Button 
                style={{display:"block",margin:"auto",padding:"8px 8px",marginTop:"30px",width:"70%"}} 
                className='self-align-center'
                variant="contained">Rent Movie
               
                </Button>
              </div>
              ):(
                <h6 className='mt-5 text-danger fs-3'>Movie Rented Check Your Cart</h6>
              ) 
              ):(
                <h6 className='mt-5 text-success fs-3'>You Need To Be Logged In To Rent A Movie</h6>
              ) }
            </div>
            <div className="col-6">
              <ul style={{color:"black",textAlign:"start"}}>
                <li>Remaining in stock : {movie.stock}</li>
                <li>Title : {movie.title}</li>
                <li>Release date :{movie.date}</li>
                <li className='d-flex align-items-center justify-content-between'><span>Votes: {movie.vote_average}</span><span className='me-2'>Ratings: {movie.vote_count}</span></li>
                <li>Duration : {movie.runtime+"min"} </li>
                <li>Categorie : {movie.categorie} </li>
                <li>Languages : {movie.languages}</li>
                <li>Production : {movie.production_companys}</li>
                <li>Description : {movie.description}</li>
              </ul>
            </div>
          </div>
            
      </div>
    </div>
  )
}

export default DescriptionPage