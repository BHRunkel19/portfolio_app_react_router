import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    return (

      <div className="wrapper">
        <nav className="navigation">
          <NavLink activeClassName="selected" className="nav-link" exact to="/home">Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/about">About</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/portfolio">Portfolio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/contact">Contact</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/references">References</NavLink>
        </nav>

      {this.props.children}

      <footer>
        <p>Thanks for visiting!</p>
      </footer>
      </div>
      );
    }
  }
