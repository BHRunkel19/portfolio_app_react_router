import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout';

export default class App extends Component {
  render() {
    return (
      <BaseLayout>
        <div className="main">
        <h1>Hello and Welcome!</h1>
        </div>
      </BaseLayout>
    );
  }
}
