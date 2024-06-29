import React from 'react'
import './moviesCard.css'
const MoviesCard = (props) => {
  return (
    <div>
        <div class="card" style={{height:"380px"}}>
        <img src={props.image} style={{minhHeight:'250px',maxHeight:"250px"}} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <div className="d-flex align-items-center justify-content-between">
                <h6>year : 2010</h6>
                <h6>length : 1h50</h6>
            </div>

            
        </div>
    </div>
    </div>
  )
}

export default MoviesCard