const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET /api/movie
// returns a list of movies
router.get('/', (req, res) => {

  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

//creating a get from database to grab the single movie's descriptions AND genres
router.get('/:id', (req, res) => {
                          //the backticks AROUND your literal
  console.log(`Does GET work ${req.params.id}`)
  // before you start writing any of the query, you can send a console.log and use POSTMAN to see if it's connected at what you're starting your get with 
  const query = `
  SELECT 
	movies.id,
	movies.title,
	movies.poster,
	movies.description,
	ARRAY_AGG(genres.name) AS genre
FROM movies
JOIN movies_genres
	on movies.id = movies_genres.movie_id
RIGHT JOIN genres
	on movies_genres.genre_id = genres.id
WHERE movies.id = $1
GROUP BY movies.id;
  `
  //has to be sent as an array
  const movieId = [req.params.id]
  // query is the text on the postgres server
  // movieId is the parameter being passed into the query at the $1
  // movieId has the .param.id which is the id of what picture I'm clicking on It you click on Avatar which is ID of 1 - it would replace it with 1 upon clicking
  pool.query(query, movieId)
  .then( result => {
              //result.rows[0] would send back just 1 item instead of all of them
    res.send(result.rows)
            // think about writing dbRes instead of result when grabbing from DB
  })
  .catch(err => {
    console.log('Err getting movie description and genre', err)
    res.sendStatus(500)
  })
})

// POST /api/movie
// Creates a movie (add movie)
router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;