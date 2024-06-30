const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const {getMovieByCategorie,getMovies} = require('../controller/MoviesController')
router.get('/categorie/:page',getMovieByCategorie)
router.get('/:page',getMovies)
module.exports = router;
