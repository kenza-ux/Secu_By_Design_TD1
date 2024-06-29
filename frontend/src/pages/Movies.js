import React, { useState } from 'react'
import './movies.css'
import { movies as moviesData } from '../Mock/MoviesMock'
import MoviesCard from '../components/MoviesCard'

const Movies = () => {
    const [querry, setQuerry] = useState('')
    const [filteredMovies, setFilteredMovies] = useState(moviesData)

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase()
        setQuerry(value)
        setFilteredMovies(moviesData.filter(movie => movie.name.toLowerCase().includes(value)))
    }

    return (
        <div className='container mt-3'>
            <h3 className='movies-page-title'>ALL Available Movies</h3>
            <div className='movies-wrapper px-3'>
                <div className='movie-wrapper-header text-white py-3'>
                    <div className="d-flex align-items-center gap-5 justify-content-end">
                        <input
                            type="text"
                            className='form-control w-25'
                            placeholder='Type to search a movie'
                            value={querry}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='movie-wrapper-body'>
                    <div className='row gx-4 gy-4'>
                        {filteredMovies.map((movie, index) => {
                            return (
                                <div key={index} className='col-lg-3 col-md-4 col-sm-4'>
                                    <MoviesCard name={movie.name} image={movie.image} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies
