import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import References from './components/References.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
    <Switch>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/references" component={References} />
        <Route path="/" component={App}/>
      </Switch>
    </div>
  </BrowserRouter>

, document.getElementById('root')

);

registerServiceWorker();
