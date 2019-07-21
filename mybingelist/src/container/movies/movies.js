import React, { Component } from 'react';

import Header from './components/header/header';

export class Movies extends Component {

  render() {
    return (
      <div>
        <Header showBackButton={false} showFavoritesButton={true} title="My Binge List" />
      </div>
    )
  }
}