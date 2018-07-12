import React, { Component } from 'react';

import Header from './components/Header';
// import CSS files after gulp-postCSS
import './temp/styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
