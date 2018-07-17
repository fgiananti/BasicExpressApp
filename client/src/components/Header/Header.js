import React, { Component } from 'react';
import logosvg from './logo.svg';

import Logo from '../Logo';
//modules
import CSSModules from 'react-css-modules';
import styles from './Header.module.css';


class Header extends Component {
  render() {
    const logo = {
      logoUrl : logosvg,
      logoAlt : 'logo!!!'
    }
    return (
      <div styleName="container">
        <Logo src={logo.logoUrl} alt={logo.logoAlt} />
      </div>
    );
  }
}

export default CSSModules(Header, styles);
