import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const navbar = () =>{
    
    return (
        
        <nav className="nav">
            <ul className="nav__list">
                <li><Link className="nav__link" to="/" >ABOUT</Link></li>
                <li><Link className="nav__link" to="/menu" >MENU</Link></li>
                <li><Link className="nav__link" to="/custom" >CUSTOM</Link></li>
                <li><Link className="nav__link" to="/order" >ORDER</Link></li>
            </ul>
        </nav>    
        
    )
      
}
export default navbar
