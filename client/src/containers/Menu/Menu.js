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
                    <Link to="/menu/cakes" class="menu__item">
                        <img src="../../assets/cake.svg" alt="" class="menu__img"/>
                    </Link>
                    <Link to="/menu/cupcakes" class="menu__item">
                        <img src="../../assets/cup-cake.svg" alt="" class="menu__img"/>
                    </Link>
                    <Link to="/menu.cookies" class="menu__item">
                        <img src="../../assets/muffin.svg" alt="" class="menu__img"/>
                    </Link>
                </div>
            </div>
            
        )
    }
}

export default Menu
