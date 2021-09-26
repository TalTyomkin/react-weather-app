import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm" style={{height:'8vh'}}>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto" style={{fontSize:'1.2rem'}}>
                <li className="nav-item mx-5">
                  <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item me-5">
                  <Link to='/favorites' className="nav-link" href="#">Favorites</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     );
}
 
export default NavBar;