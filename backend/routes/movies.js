const express = require('express');
const { body, validationResult } = require('express-validator');
const Movie = require('../models/movie');

const router = express.Router();

// Route pour ajouter un film
router.post('/add', [
  body('title').notEmpty().withMessage('Title is required'),
  body('stock').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, stock } = req.body;

  try {
    const movie = await Movie.create({ title, stock });
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route pour obtenir la liste des films
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
