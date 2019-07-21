import React, { Component } from 'react';
import Header from './components/header/header';

import './App.scss';

export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header showBackButton={false} showFavoritesButton={true} title="My Binge List" />
      </div>
    );
  }

}

export default App;
