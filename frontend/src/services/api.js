import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const registerUser = async (userData) => {
  return await api.post('/users/register', userData);
};

export const loginUser = async (userData) => {
  return await api.post('/users/login', userData);
};

export const addMovie = async (movieData) => {
  return await api.post('/movies/add', movieData);
};

export const getMovies = async () => {
  return await api.get('/movies');
};
