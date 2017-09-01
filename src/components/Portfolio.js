import React, { Component } from 'react';
import BaseLayout from './BaseLayout';

export default class Portfolio extends Component{
  render(){
    return(
      <BaseLayout>
        <div className="about_portfolio">

        <h1>Portfolio Page</h1>
        <h3>Here are a few projects I have recently been working on</h3>
        </div>

      </BaseLayout>
    );
  }
}
