const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const   {
    registerUser,
    login,
    addMovieToUser,
    getUserRentedMovies,
    isMovieRented,
    loginUnsafe
} = require('../controller/userController');
const { isAuthenticated, isAdmin } = require('../midleware/securityMidleWare');
const { MODE } = require('../../application_mode');
router.post('/register',registerUser)
MODE==='safe'?router.post('/login',login):router.post('/login',loginUnsafe)
router.get('/rent_movie',addMovieToUser)
router.get('/movies/:id',getUserRentedMovies)
router.get('/movie_rented',isMovieRented)
router.get('/admin',isAuthenticated,(req,res)=>{res.status(200).json({message:"admin pannel"})})

module.exports = router