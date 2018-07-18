import React, { Component } from 'react';

//components
import Button from './components/Button'

//modules
import CSSModules from 'react-css-modules';
import styles from './App.module.css';


class App extends Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}

export default CSSModules(App, styles);
