import React from 'react';
import PropTypes from 'prop-types';

//modules
import CSSModules from 'react-css-modules';
import styles from './Button.module.css';

const Button = props => (
  <button
    styleName="logo"
    {...props}
  >
    Book now
</button>
);

// Button.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired
// }

export default CSSModules(Button, styles);
