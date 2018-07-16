import React, { Component } from 'react';

//modules
import CSSModules from 'react-css-modules';
import styles from './Header.module.css';


class Header extends Component {
  render() {
    return (
      <div styleName="container">
        Header
      </div>
    );
  }
}

export default CSSModules(Header, styles);
