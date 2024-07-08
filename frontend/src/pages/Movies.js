import React, { useState, useEffect } from 'react';
import './movies.css';
import { movies as moviesData } from '../Mock/MoviesMock';
import MoviesCard from '../components/MoviesCard';
import { getMovies } from '../services/api';
import {useNavigate} from 'react-router-dom'
import { Autocomplete, TextField } from '@mui/material';
const Movies = () => {
    const navigate =useNavigate()
    const [query, setQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pages,setPages] = useState()
    let index=1
    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);
        setFilteredMovies(moviesData.filter(movie => movie.name.toLowerCase().includes(value)));
    };
    const DescriptionPage = (movie)=>{
        navigate('/description/'+movie.title,{state:{movie}})
      }

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await getMovies(index, 24);
                setFilteredMovies(response.data.data);
                setPages(response.data)
                setLoading(false);
            } catch (e) {
                console.error(e);
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    if (loading) {
        return (
            <div className="d-flex align-items-center justify-content-center gap-5">
                <h2 style={{ color: "yellow", fontWeight: "bold", fontSize: "200px" }}>Loading...</h2>
                <div className="spinner-border text-info" role="status" style={{ height: "200px", width: "200px", marginTop: "100px" }}>
                </div>
            </div>
        );
    }

    return (
        <div className='container pb-5 mt-3'>
            <h3 className='movies-page-title'>ALL Available Movies</h3>
            <div className='movies-wrapper py-4 px-3'>
                <div className='movie-wrapper-header text-white py-3'>
                    <div className="d-flex align-items-center gap-5 justify-content-end">

                        <input
                            type="text"
                            className='form-control w-25'
                            placeholder='Type to search a movie'
                            value={query}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='movie-wrapper-body'>
                    <div className='row gx-4 gy-4'>
                        {filteredMovies.map((movie, index) => (
                            <div key={index} className='col-lg-3 col-md-4 col-sm-4'>
                                <MoviesCard
                                    descriptionPage={()=>{DescriptionPage(movie)}}
                                    name={movie.title}
                                    image={movie.image}
                                    year={movie.date.split('-')[0]}
                                    rating={movie.vote_average}
                                    categorie={movie.categorie.split(',')}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movies;
