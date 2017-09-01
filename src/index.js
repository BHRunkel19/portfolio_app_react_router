import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Home from './components/Home.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/home" component={Home} />
      <Route path="/" component={App}/>
    </Switch>
  </BrowserRouter>

, document.getElementById('root')

);

registerServiceWorker();
