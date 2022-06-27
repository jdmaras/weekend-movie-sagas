import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import "./Details.css";


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
    console.log('What are the details?', details)

    return(
        <>
        <div className='linkStyle'>
        <Link to='/'>Back To Movie List</Link>
        </div>
        <h4>Details About...</h4>
        <div>
            <ul>{details.map(detail => 
                <li key={detail.id}>
                    <div className="movieTitle">{detail.title}</div>
                    
                    <img src={detail.poster}/>
                    <br></br>
                    <div className="movieDescription">
                    {detail.description}
                    </div>
                    <br></br>
                    <div>
                    {detail.genre.join(" / ")}
                    </div>
                </li>
                )}
                </ul>
        </div>
        </>
    )
}

export default Details;

