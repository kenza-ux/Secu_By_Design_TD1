const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const   {registerUser,login,addMovieToUser,getUserRentedMovies,isMovieRented} = require('../controller/userController')
router.post('/register',registerUser)
router.post('/login',login)
router.get('/rent_movie',addMovieToUser)
router.get('/movies/:id',getUserRentedMovies)
router.get('/movie_rented',isMovieRented)

module.exports = router