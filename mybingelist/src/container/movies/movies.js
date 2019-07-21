import React, { Component } from 'react';

import Header from '../../components/header/header';

export class Movies extends Component {

  render() {
    const headerProps = {
      showBackButton: false,
      showFavoritesButton: true,
      title: 'My Binge List'
    }

    return (
      <div>
        <Header {...headerProps} />
        Movies
      </div>
    )
  }
}

export default Movies;
