import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';


function Details(){
    const dispatch = useDispatch()
    const details = useSelector(store => store.details)
    console.log('This is the details store', details)
    const params = useParams()
    //useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    // it's basically like req.params from backend
    console.log('Does this show id?', params)
    useEffect(() => {
        getDetails()
    }, []);
    
    const getDetails = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: params.id
            //payload is the id of the movie you want details for

        })
    }

    return(
        <>
        <h3>Details!</h3>
        <h2></h2>
        <Link to='/'>Back To Movie List</Link>
        </>
    )
}

export default Details;

