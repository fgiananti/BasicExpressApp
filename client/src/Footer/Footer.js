import React, { Component } from 'react';

//modules
import CSSModules from 'react-css-modules';
import styles from './Footer.module.css';


class Footer extends Component {
  render() {
    return (
      <div styleName="container">
        Footer!!
      </div>
    );
  }
}

export default CSSModules(Footer, styles);