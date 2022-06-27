import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIES' });
    }, []);

    // clicking on the photo brings you to the id of the movie that is appending
    const handleClick = (id) => {
        //history.push moves you to the details page
        history.push(`/details/${id}`)
    }

    return (
        <main>
            <h1>Movie List</h1>
            <section className="moviesContainer">
                {movies.map(movie => {
                    return (
                        // added in onClick to be able to click the photo and it goes to the id of the photo
                        <div className="movieListCard" key={movie.id} onClick={() => handleClick(movie.id)}>
                            <h3>{movie.title}</h3>
                            <p className='moviePoster'><img src={movie.poster} alt={movie.title}/></p>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;