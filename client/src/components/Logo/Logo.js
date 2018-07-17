import React from 'react';
import PropTypes from 'prop-types';

//modules
import CSSModules from 'react-css-modules';
import styles from './Logo.module.css';

const Logo = props => (
  <img
    styleName="logo"
    {...props}
  />
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default CSSModules(Logo, styles);
