import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout';

export default class About extends Component{
  render(){
    return(
      <BaseLayout>
      <div className="about">
        <div className="about_content">
        <h1>About Me</h1>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="btn_container"><button className="btn_bigger"><Link className="link" to="/portfolio">Check out my portfolio!</Link></button></div>
        </div>
      </BaseLayout>
    );
  }
}
