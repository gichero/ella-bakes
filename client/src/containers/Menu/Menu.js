import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

export class Menu extends Component {
    render() {
        return (
            <div>
                <div className="menu">
                    <h2 className="menu__title">Menu</h2>
                </div>
                <div>
                    <Link to="/menu/cakes" className="menu__item">
                        <img src="/assets/cake.png" alt="" className="menu__img"/>
                    </Link>
                    <Link to="/menu/cupcakes" className="menu__item">
                        <img src="/assets/cupcake.png" alt="" className="menu__img"/>
                    </Link>
                    <Link to="/menu.cookies" className="menu__item">
                        <img src="/assets/cookie.png" alt="" className="menu__img"/>
                    </Link>
                </div>
            </div>
            
        )
    }
}

export default Menu
