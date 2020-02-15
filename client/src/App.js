import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Menu from './containers/Menu/Menu';
import Custom from './containers/CustomPage/Custom';
import Order from './containers/Order/Order';


function App() {
  return (
    <div>
      <Navbar/>
    <Switch>
      {<Route path="/menu" component={Menu}/>}
      {<Route path="/custom" component={Custom}/>}
      {<Route path="/order" component={Order}/>}
      {<Route path="/" exact component={About}/>}
    </Switch>
    </div>
  );
}

export default App;
