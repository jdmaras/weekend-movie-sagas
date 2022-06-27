import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
// Imported Pages
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';



function App() {
  return (
    <div className='App'>
      <div className='backGround'>
      <Header />
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:id" exact>
          <Details/>
        </Route>
        {/* Add Movie page */}
        <Route path='/addmovie' exact>
          <AddMovie />
        </Route>
      </Router>
      </div>
    </div>
  );
}


export default App;
