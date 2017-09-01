import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    return (

      <div className="wrapper">
        <nav className="navigation">
          <button className="btn">
            <Link className="link" to="/">Splash Page</Link>
            </button>
          <button className="btn">
            <Link className="link" to="/home">Main</Link>
          </button>
          <button className="btn">
            <Link className="link" to="/about">About</Link>
          </button>
          <button className="btn">
            <Link className="link" to="/portfolio">Portfolio</Link>
          </button>
        </nav>

      {this.props.children}

      <footer>
        <p>Thanks for visiting!</p>
      </footer>
      </div>
      );
    }
  }
