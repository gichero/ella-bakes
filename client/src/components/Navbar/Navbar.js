import React from 'react';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export default function Navbar() {
    return (
        <AppBar>
            <Toolbar>
            <Button color="inherit" component={Link} to="/">About</Button>
            <Button color="inherit" component={Link} to="/menu">Menu</Button>
            <Button color="inherit" component={Link} to="/custom">Custom</Button>
            <Button color="inherit" component={Link} to="/order">Order</Button>
            </Toolbar>
        </AppBar>    
    )
}
