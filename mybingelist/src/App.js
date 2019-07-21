import React, { Component } from 'react';
import Header from './components/header/header';

import Movies from './container/movies/movies';
import Favorites from './container/favorites/favorites';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';

export class App extends Component {


  render() {
    return (
      <Router>
        <Header showBackButton={false} showFavoritesButton={true} title="My Binge List" />
        <main className="main">
          <Route path="/" component={Movies} />
          <Route path="/favorites" component={Favorites} />
        </main>
      </Router>
    );
  }

}

export default App;
