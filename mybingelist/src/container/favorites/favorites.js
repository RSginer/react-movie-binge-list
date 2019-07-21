import React, { Component } from 'react';

import Header from '../../components/header/header';

export class Favorites extends Component {

  render() {
    const headerProps = {
      showBackButton: true,
      showFavoritesButton: false,
      title: 'My Binge List'
    }

    return (
      <div>
        <Header {...headerProps} />
        Favorites
      </div>
    )
  }
}

export default Favorites;
