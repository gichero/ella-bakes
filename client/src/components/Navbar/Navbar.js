import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import {MyToolbar, MyButton} from './Navbar-styles.js';

class Navbar extends Component {
    render(){
        return (
           
            <AppBar position="sticky">
                <MyToolbar className="nav-container">
                    <MyButton component={Link} to="/">ABOUT</MyButton>
                    <MyButton component={Link} to="/menu">MENU</MyButton>
                    <MyButton component={Link} to="/custom">CUSTOM</MyButton>
                    <MyButton component={Link} to="/order">ORDER</MyButton>
                </MyToolbar>
            </AppBar>    
           
        )
    }  
}
export default Navbar
