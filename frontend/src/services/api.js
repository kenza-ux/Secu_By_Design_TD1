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

// TODO : Ajouter d'autres fonctions pour les films, le panier, etc.
