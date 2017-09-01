import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout';

export default class Contact extends Component{
  render(){
    return(
      <BaseLayout>
      <div className="about">
        <div className="about_content">
        <h1>Contact Me</h1>
        <p className="para">Here's how we can stay in touch</p>
        </div>
        <div className="btn_container"><button className="btn big_btn"><Link className="link" to="/references">Check out my references!</Link></button></div>
        </div>
      </BaseLayout>
    );
  }
}
