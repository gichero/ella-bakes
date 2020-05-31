import React from 'react';
import {Link} from 'react-router-dom';
import { GiCakeSlice } from 'react-icons/gi';
import { GiCupcake } from 'react-icons/gi';
import { GiCookie } from 'react-icons/gi';
import './Menu.css';

const menu = () => {
    
    return (
        <div>
            <div className="menu">
                <h2 className="menu__title">Menu</h2>
            </div>
            <div className="menu__items">
                <Link to="/menu/cakes/" className="menu__link">
                    <GiCakeSlice />
                </Link>
                <Link to="/menu/cupcakes/" className="menu__link">
                    <GiCupcake />
                </Link>
                <Link to="/menu/cookies/" className="menu__link">
                    <GiCookie />
                </Link>
            </div>
        </div>
        
    )
}

export default menu
