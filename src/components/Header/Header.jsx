import { Route, HashRouter as Router, Link } from 'react-router-dom';


function Header(){
    return(
        <div>
        <header className='App-header'>
          <h1 className='App-title'>HEADER MOVIES</h1>
          <h5>
                <ul>
                    <li>
            {/* CREATE GLOBAL LINKS TO PAGES HERE */}
                    </li>
                </ul>
            </h5>
        </header>
        </div>
    )
}

export default Header;