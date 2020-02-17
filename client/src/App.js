import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Menu from './containers/Menu/Menu';
import Custom from './containers/CustomPage/Custom';
import Order from './containers/Order/Order';

const theme = createMuiTheme({
  palette: {
    primary:{
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary:{
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
      <Navbar/>
      <div className="container">
      <Switch>
        {<Route path="/menu" component={Menu}/>}
        {<Route path="/custom" component={Custom}/>}
        {<Route path="/order" component={Order}/>}
        {<Route path="/" exact component={About}/>}
      </Switch>
      </div>
    </div>
    </MuiThemeProvider>
    
  );
}

export default App;
