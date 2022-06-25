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
      <Header />
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        
        {/* Add Movie page */}
        <Route path='/addmovie' exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
