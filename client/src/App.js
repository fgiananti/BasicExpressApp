import React, { Component } from 'react';

//components
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'

//modules
import CSSModules from 'react-css-modules';
import styles from './App.module.css';


class App extends Component {
  render() {
    return (
      <div styleName="container">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default CSSModules(App, styles);
