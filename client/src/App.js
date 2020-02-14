import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Menu from './containers/Menu/Menu';
import Custom from './containers/Custom/Custom';
import Order from './containers/Order/Order';


function App() {
  return (
    <div>
      <Navbar/>
    <Switch>
      <Route path="/" exact component={About}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/custom" component={Custom}/>
      <Route path="/order" component={Order}/>
    </Switch>
    </div>
  );
}

export default App;
