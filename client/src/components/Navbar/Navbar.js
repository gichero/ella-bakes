import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';

export default function Navbar() {
    return (
        <AppBar>
            <Toolbar>
            <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        About
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Menu
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Custom
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Order
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
            </List>
            </Toolbar>
        </AppBar>    
    )
}
