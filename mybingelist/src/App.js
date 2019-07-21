import React, { Component } from 'react';

import Header from './components/header/header';
import Movies from './containers/movies/movies';
import Favorites from './containers/favorites/favorites';

import { Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'

import {history} from './createStore';

import './App.scss';

export class App extends Component {

  render() {
    return (
      <ConnectedRouter history={history}>
        <Header />
        <main className="main">
          <Route path="/" exact component={Movies} />
          <Route path="/favorites" component={Favorites} />
        </main>
      </ConnectedRouter>
    );
  }

}

export default App;
