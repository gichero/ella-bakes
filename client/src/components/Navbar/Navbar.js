import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styles from'./Navbar-elements.js';

export default function Navbar() {
    
    return (
        <AppBar>
            <Toolbar style = {styles.Toolbar}>
            <Button color="inherit" component={Link} to="/">About</Button>
            <Button color="inherit" component={Link} to="/menu">Menu</Button>
            <Button color="inherit" component={Link} to="/custom">Custom</Button>
            <Button color="inherit" component={Link} to="/order">Order</Button>
            </Toolbar>
        </AppBar>    
    )
}
