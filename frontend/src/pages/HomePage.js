import React from 'react'
import MovieCompoenent from '../components/MovieCompoenent';
import './homepage.css'
import { movies,bestMovies } from '../Mock/MoviesMock';
const HomePage = () => {

  return (
    <div className='container' style={{paddingBottom:"150px"}}>

      <div id="carouselExampleIndicators" class="carousel slide mt-2"  data-bs-ride="carousel">
  <div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"  aria-label="Slide 1"></button>
    {bestMovies.map((movie,index)=>(
       index!==0?  (<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index}  aria-label={"Slide "+index}></button>):null)
    )}

  </div>

  <div class="carousel-inner">
  <div class="carousel-item active " data-bs-interval="3000" style={{backgroundImage:`url(${bestMovies[0].image})`}} >


</div>
  {bestMovies.map((movie,index)=>
         ( index !==0?
            <div class="carousel-item" data-bs-interval="3000"  style={{backgroundImage:`url(${movie.image})`}} >

                
          </div>:null
        )
    )}
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div style={{position:"relative"}}>
    <div className='mt-5'>
        <h4 style={{fontFamily:"cursive"}}>Most Rented Movies</h4>
        <div className="cntainer">
                {movies.map((movie,index) => (
                index<=15?(<div className='movies-list-wrapper'>
                        <MovieCompoenent className="card"  
                        name={movie.name}
                        image={movie.image}/>
                    </div>):null
                    
                ))}
            </div>

    </div>
</div>

<div className=' '>
    <h4 style={{fontFamily:"cursive"}}>Comedy</h4>
    <div className="cntainer">
            {movies.map((movie,index) => (
               movie.category.includes('comedy')&&(<div className='movies-list-wrapper'>
                    <MovieCompoenent className="card"  
                    name={movie.name}
                    image={movie.image}/>
                </div>)
                
            ))}
        </div>
        
</div>


<div className=' '>
    <h4 style={{fontFamily:"cursive"}}>Action</h4>
    <div className="cntainer">
            {movies.map((movie,index) => (
               movie.category.includes('action')&&(<div className='movies-list-wrapper'>
                    <MovieCompoenent className="card"  
                    name={movie.name}
                    image={movie.image}/>
                </div>)
                
            ))}
        </div>
        
</div>

    </div>
  )
}

export default HomePage