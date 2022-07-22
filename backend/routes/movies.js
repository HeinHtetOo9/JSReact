var express = require('express');
let movies = require('../controller/MovieController');
var router = express.Router();

router.get('/',movies.getAllMovie);
router.get('/:movieId', movies.getMovieById);
router.get('/title/:title', movies.findMovieByTitle);
router.post('/', movies.newMovie);
router.patch('/:movieId', movies.updateMovie);
router.delete('/:movieId', movies.deleteMovie);

module.exports = router;