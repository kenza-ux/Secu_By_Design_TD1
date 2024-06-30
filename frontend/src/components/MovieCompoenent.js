import React from 'react'
import './movieComponent.css'
import { FaStar } from "react-icons/fa";
const MovieCompoenent = (props) => {

  return (
    <div className='movie-container ' onClick={props.navigateToDescription} >
      <div className='image-description-wrapper'>
      <img src={props.image} alt='' className='image'/>
        <div className='description'>
          <h6 className='text-white text-start mt-1' style={{fontFamily:"sans-serif",fontSize:"17px",fontWeight:'bold',width:"170px"}}>{props.name?props.name:"description"}</h6>
          <div>
            <div className='text-white text-start expanded-info'>
              <div className='d-flex justify-content-between align-items-center'>
              <h6 className='text-info '>  {props.year}</h6>
             <div className='d-flex gap-2 align-items-start'>
               <FaStar className='fs-5'  style={{color:"yellow"}}/>
               <h6 className='text-success '> {props.vote.toFixed(2)} </h6>
              </div> 
            </div>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MovieCompoenent