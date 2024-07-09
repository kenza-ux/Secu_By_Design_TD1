const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const {getMovieByCategorie,getMovies,searchMovieByName} = require('../controller/MoviesController')
router.get('/categorie/:page',getMovieByCategorie)
router.get('/:page',getMovies)
router.get('/search/title',searchMovieByName)
module.exports = router;
