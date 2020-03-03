import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render(){ 
        return (
           
            <nav className="nav">
                <ul className="nav__list">
                    <Link className="nav__link" to="/" ><li>ABOUT</li></Link>
                    <Link className="nav__link" to="/menu" ><li>MENU</li></Link>
                    <Link className="nav__link" to="/custom" ><li>CUSTOM</li></Link>
                    <Link className="nav__link" to="/order" ><li>ORDER</li></Link>
                </ul>
            </nav>    
           
        )
    }  
}
export default Navbar
