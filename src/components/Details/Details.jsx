import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'


function Details(){

    // const dispatch = useDispatch()
    // // const details = useSelector(store => store.details)

    // useEffect(() => {
    //     getDetails()
    // }, []);

    // const getDetails = () => {
    //     dispatch({
    //         type: 'SET_DETAILS',
    //         payload: 
    //         //payload is the id of the movie you want details for
    //     })
    // }
    return(
        <>
        <h3>Details!</h3>
        <h2></h2>
        <Link to='/'>Back To Movie List</Link>
        </>
    )
}

export default Details;

