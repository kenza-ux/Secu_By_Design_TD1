import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000/api',
});

export const registerUser = async (userData) => {
  return await api.post('user/register', userData);
};

export const loginUser = async (userData) => {
  return await api.post('/user/login', userData);
};

export const rentMovie = async (userId,movieId) => {
  return await api.get('/user/rent_movie?user='+userId+'&movie='+movieId);
};

export const checkMovieRented = async (userId,movieId) => {
  return await api.get('/user/movie_rented?user='+userId+'&movie='+movieId);
};

export const getMovies = async (page,limit=15) => {
  return await api.get('/movies/'+page+"?limit="+limit);
};
export const getUserRentedMovies = async (userId) => {
  return await api.get('/user/movies/'+userId);
};

export const getMoviesByCategorie = async (page,categorie,limit=15) => {
  return await api.get('/movies/categorie/'+page+"?categorie="+categorie+"&limit="+limit);
};
