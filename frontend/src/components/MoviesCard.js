import React from 'react'
import './moviesCard.css'
import { FaStar } from 'react-icons/fa'
import {Chip} from '@mui/material'
const MoviesCard = (props) => {
  return (
    <div>
        <div class="card" style={{height:"390px"}} onClick={props.descriptionPage}>
        <img src={props.image} style={{minhHeight:'250px',maxHeight:"250px"}} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <div className="d-flex align-items-center justify-content-between">
                <h6>year : {props.year}</h6>
                <div className='d-flex gap-2 align-items-start'>
               <FaStar className='fs-5'  style={{color:"yellow"}}/>
               <h6 className='text-success '> {props.rating.toFixed(2)} </h6>
               </div> 
            </div>

            <div className="d-flex align-items-center justify-content-start gap-2" >
               {props.categorie.map((cat,index)=>{
                return( <Chip style={{maxWidth:"80px",fontSize:"14px"}} label={cat} />)
               })}
                
              
            </div>


            
        </div>
    </div>
    </div>
  )
}

export default MoviesCard