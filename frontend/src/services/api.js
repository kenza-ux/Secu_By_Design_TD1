import axios from 'axios';

let AuthorizationToken = JSON.parse(localStorage.getItem('movie-rental-cred')).token || ''
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
  return await api.get('/user/rent_movie?user='+userId+'&movie='+movieId,{headers:{'Authorization': `Bearer ${AuthorizationToken}`}});
};

export const checkMovieRented = async (userId,movieId) => {
  return await api.get('/user/movie_rented?user='+userId+'&movie='+movieId);
};

export const getMovies = async (page,limit=15) => {
  return await api.get('/movies/'+page+"?limit="+limit);
};
export const searchMovie = async (title) => {
  return await api.get('/movies/search/title?title='+title);
};
export const getUserRentedMovies = async (userId) => {
  return await api.get('/user/movies/'+userId,{headers:{'Authorization': `Bearer ${AuthorizationToken}`}});
};

export const adminPage = async () => {
  return await api.get('/user/admin',{headers:{'Authorization': `Bearer ${AuthorizationToken}`}});
};

export const getMoviesByCategorie = async (page,categorie,limit=15) => {
  return await api.get('/movies/categorie/'+page+"?categorie="+categorie+"&limit="+limit);
};
