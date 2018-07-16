import React, { Component } from 'react';

//modules
import CSSModules from 'react-css-modules';
import styles from './Header.module.css';


class Header extends Component {
  render() {
    return (
      <div styleName="container">
        <h1 styleName="logo">Logo</h1>
      </div>
    );
  }
}

export default CSSModules(Header, styles);
