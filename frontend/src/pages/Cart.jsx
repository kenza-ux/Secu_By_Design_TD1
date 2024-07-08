import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getUserRentedMovies } from '../services/api'
import { FaStar } from "react-icons/fa";
import './cart.css'
const Cart = () => {
  const [rentedMovies,setRentedMovies] = useState(null)
 const {userId} = useLocation().state
  useEffect(()=>{
    const userRentedMovies =async()=>{
      try{
        const response = await getUserRentedMovies(userId)
        setRentedMovies(response.data||[])
      }
      catch(e){
      console.log(e)
      }

    }
    userRentedMovies()
  },[])
  return (
    <div className='container mt-5 pb-5'>
      <h1 style={{color:"var(--yellow-title)"}} className='mb-5'>Rented movies</h1>
      { rentedMovies && rentedMovies.map((value,index)=>{
        return (<div key={index} className='text-white mb-3' style={{border:"1px solid gray",padding:"20px"}}>
            <div className="d-flex gap-5 rented-movie-card">
              <img src={value.image} style={{width:"350px",height:"400px"}} alt=""  />
              <div className='rented-movie-card-info'>
                <div className="d-flex mt-3 gap-4">
                  <h6>MovieId           :</h6>
                  <h6>{value._id}</h6>
                </div>
                <div className="d-flex mt-3 gap-4">
                  <h6>Date Of Release:</h6>
                  <h6>{value.date}</h6>
                </div>
                <div className="d-flex mt-3 gap-4">
                  <h6>Title:</h6>
                  <h6>{value.title}</h6>
                </div>
                <div className="d-flex mt-3 gap-4">
                  <h6>RunTime:</h6>
                  <h6>{value.runtime}</h6>
                </div>
                <div className="d-flex mt-3 gap-4">
                  <h6>Vote:</h6>
                  <h6>{value.vote_average.toFixed(2)}</h6>
                </div>
                <div className="d-flex mt-3 gap-4">
                  <h6>Vote Count:</h6>
                  <h6 >{value.vote_count} </h6>
                </div>
                <div className="d-flex mt-3 gap-4">
                  <h6>Categories: </h6>
                  <h6>{value.categorie} </h6>
                </div>
                <div className="d-flex mt-3 gap-4">
                  <h6>Language: </h6>
                  <h6>{value.languages} </h6>
                </div>
                <div className="d-flex mt-3 gap-4">
                  <h6>Remaining in Stock: </h6>
                  <h6>{value.stock} </h6>
                </div>
              </div>
            </div>
           
           </div>
           )
      })
      }
    </div>
  )
}

export default Cart