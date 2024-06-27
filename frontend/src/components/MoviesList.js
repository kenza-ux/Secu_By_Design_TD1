import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/api';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title} - Stock: {movie.stock}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
