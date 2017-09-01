import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout';

export default class Home extends Component{
  render(){
    return(
      <BaseLayout>
      <div className="about">
        <div className="headline">
        <h1>Welcome to my Portfolio!</h1>
        <h3>Take a look around!</h3>
        </div>
        <div className="btn_container"><button className="btn"><Link className="link" to="/about">Learn more!</Link></button></div>
        </div>
        </BaseLayout>
    );
  }
}
