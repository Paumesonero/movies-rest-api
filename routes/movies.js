const router = require('express').Router();
const { update } = require('../models/Movies');
const Movies = require('../models/Movies')

// @desc    Get all movies
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movies.find({})
    res.status(200).json({ data: movies })
  } catch (error) {
    next(error)
  }
  
});

// @desc    Get single movie
// @route   GET /:id
// @access  Public
router.get('/:movieId', async (req, res, next) => {
  const{movieId} = req.params;
  try {
    const movieFromApi = await Movies.findById(movieId)
    res.status(200).json({data: movieFromApi}) 
  } catch (error) {
    next(error)
    
  }

});

// @desc    Create a movie
// @route   POST /
// @access  Public
router.post('/', async (req, res, next) => {
const {title, year, director, duration, synopsis,image} = req.body;
try {
  const newMovie = await Movies.create({title, year, director, duration, synopsis, image})
  res.status(201).json({data : newMovie})
} catch (error) {
  
}
});

// @desc    Edit a movie
// @route   PUT /:id
// @access  Public
router.put('/:movieId', async (req, res, next) => {
const {movieId}=req.params
const {title, year, director, duration, synopsis,image} = req.body;

try {
  const updatedMovie = await Movies.findByIdAndUpdate(movieId,{title, year, director, duration, synopsis,image}, {new:true})
  res.status(202).json({data : updatedMovie})
} catch (error) {
  next(error)
}

});

// @desc    Delete a movie
// @route   DELETE /:id
// @access  Public
router.delete('/:movieId', async (req, res, next) => {
  const {movieId} = req.params
  try {
    const deletedMovie = await Movies.findByIdAndDelete(movieId)
    res.status(202).json({data: deletedMovie})
  } catch (error) {
    next(error)
  }

});

module.exports = router;
