import React from 'react'
import MovieCompoenent from '../components/MovieCompoenent';
import './homepage.css'
const HomePage = () => {
    const movies = [
       { name:"Dune",description:"",image:"https://fr.web.img4.acsta.net/pictures/24/01/26/10/18/5392835.jpg"},
        {name:"Batman Arkham Knight",description:"",image:"https://image.api.playstation.com/cdn/EP1018/CUSA00135_00/qhVdvWLcWq5DcTSeYULZ6dzv2peWp3cD.png"},
        {name:"The Godfather",description:"",image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
        {name:"The Departed",description:"",image:"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"},
        {name:"Pulpe Fiction",description:"",image:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
        {name:"The Lord Of The Ring Return Of The King",description:"",image:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
        {name:"The Good The Bad And The Ugly",description:"",image:"https://media.themoviedb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"},
        {name:"The Matrix",description:"",image:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
        {name:"American History X",description:"",image:"https://m.media-amazon.com/images/I/81m+wzYYgFL._AC_UF1000,1000_QL80_.jpg"},
        {name:"Usual Suspects",description:"",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBhVuw9fVM7HiY5UKwcNq2D3gV3qVYY5zOA&s"},
        { name:"Dune",description:"",image:"https://fr.web.img4.acsta.net/pictures/24/01/26/10/18/5392835.jpg"},
        {name:"Batman Arkham Knight",description:"",image:"https://image.api.playstation.com/cdn/EP1018/CUSA00135_00/qhVdvWLcWq5DcTSeYULZ6dzv2peWp3cD.png"},
        {name:"The Godfather",description:"",image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
        {name:"The Departed",description:"",image:"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"},
        {name:"Pulpe Fiction",description:"",image:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
        {name:"The Lord Of The Ring Return Of The King",description:"",image:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
      ];
    const  bestMovies = [
        { name:"Dune",description:"",image:"https://fr.web.img4.acsta.net/pictures/24/01/26/10/18/5392835.jpg"},
        {name:"Batman Arkham Knight",description:"",image:"https://image.api.playstation.com/cdn/EP1018/CUSA00135_00/qhVdvWLcWq5DcTSeYULZ6dzv2peWp3cD.png"},
        {name:"The Godfather",description:"",image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
        {name:"The Departed",description:"",image:"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"},
        {name:"Pulpe Fiction",description:"",image:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
    ]
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
  <div class="carousel-item active " style={{backgroundImage:`url(${bestMovies[0].image})`}} >


</div>
  {bestMovies.map((movie,index)=>
         ( index !==0?
            <div class="carousel-item" style={{backgroundImage:`url(${movie.image})`}} >

                
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
<div className='mt-5'>
    <h4 style={{fontFamily:"cursive",color:"yellow"}}>Most Rented Movies</h4>
    <div className="cntainer">
            {movies.map(movie => (
                <div className='movies-list-wrapper'>
                    <MovieCompoenent className="card"  
                    name={movie.name}
                    image={movie.image}/>
                </div>
                
            ))}
        </div>
</div>

    </div>
  )
}

export default HomePage