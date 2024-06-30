import React, { useEffect, useState } from 'react'
import MovieCompoenent from '../components/MovieCompoenent';
import './homepage.css'
import { movies,bestMovies } from '../Mock/MoviesMock';
import { getMovies,getMoviesByCategorie } from '../services/api';
import {useNavigate} from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate()
  const[loading,setLoading] = useState(true)
  const[comedyMovies,setComedyMovies] = useState()
  const[randomMovies,setRandomMovies] = useState()
  const[actionMovies,setActionMovies] = useState()
  const [carrouselMovies,setCarrouselMovies] = useState()
  const navigateToDescription = (movie)=>{
    navigate('/description/'+movie.title,{state:{movie}})
  }
  useEffect(()=>{
    const a =async()=>{
      try{
    const carrouselMovie = await getMovies(getRandomInt(0,4000),5)
    const randomMovie = await getMovies(getRandomInt(1,100),15);
    const comedyMovie = await getMoviesByCategorie(getRandomInt(1,1000),"comedy",15);
    const actionMovie = await getMoviesByCategorie(getRandomInt(1,1000),"action",15);
    setCarrouselMovies(carrouselMovie.data.data)
    setActionMovies(actionMovie.data.data)
    setComedyMovies(comedyMovie.data.data)
    setRandomMovies(randomMovie.data.data)
    setLoading(false)
    console.log("results=> ",comedyMovie.data)
      }catch(e){
        console.log(e)
      }
    } 
    a()
  },[])

  const  getRandomInt =(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if(loading===true){
    return(
    <div className="d-flex align-items-center justify-content-center gap-5">
      <h2 style={{color:"yellow",fontWeight:"bold",fontSize:"200px"}}>Loading...</h2>
      <div class="spinner-border text-warning" role="status" style={{height:"200px",width:"200px",marginTop:"100px"}}>
      </div>
    </div> )
    
  }else
  return (
    <div className='container' style={{paddingBottom:"150px"}}>

      <div id="carouselExampleIndicators" class="carousel slide ride mt-2"  data-bs-ride="carousel">
  <div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"  aria-label="Slide 1"></button>
    {bestMovies.map((movie,index)=>(
       index!==0?  (<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index}  aria-label={"Slide "+index}></button>):null)
    )}

  </div>

  <div class="carousel-inner">
  <div class="carousel-item active " data-bs-interval="3000" style={{backgroundImage:`url(${carrouselMovies[0].image})`}} >


</div>
  {carrouselMovies.map((movie,index)=>
         ( index !==0?
            <div class="carousel-item" data-bs-interval="3000"  >
                    <img src={movie.image}  className=' img-carr w-100' alt=""/>
                
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
<div >
    <div className='mt-5'>
        <h4 style={{fontFamily:"cursive"}}>Most Rented Movies</h4>
        <div className="cntainer">
                {randomMovies.map((movie,index) => (
                index<=15?(<div className='movies-list-wrapper'>
                        <MovieCompoenent className="card"  
                        navigateToDescription ={()=>navigateToDescription(movie)}  
                        name={movie.title}
                        image={movie.image}
                        year={movie.date.split("-")[0]}
                        vote={movie.vote_average}  
                        />
                    </div>):null
                    
                ))}
            </div>

    </div>
</div>

<div className='mt-5'>
    <h4 style={{fontFamily:"cursive"}}>Comedy</h4>
    <div className="cntainer">
            {comedyMovies.map((movie,index) => (
               index<=15 &&(<div className='movies-list-wrapper'>
                    <MovieCompoenent className="card"
                    navigateToDescription ={()=>navigateToDescription(movie)}  
                    name={movie.title}
                    image={movie.image}
                    year={movie.date.split("-")[0]}
                    vote={movie.vote_average} 
                      
                    />
                </div>)
                
            ))}
        </div>
        
</div>


<div className=' mt-5'>
    <h4 style={{fontFamily:"cursive"}}>Action</h4>
    <div className="cntainer">
            {actionMovies.map((movie,index) => (
              index<=15 && (<div className='movies-list-wrapper'>
                    <MovieCompoenent className="card"  
                    navigateToDescription ={()=>navigateToDescription(movie)}  
                    name={movie.title}
                    image={movie.image}
                    year={movie.date.split("-")[0]}
                    vote={movie.vote_average}  
                    />
                </div>)
                
            ))}
        </div>
        
</div>

    </div>
  )
}

export default HomePage