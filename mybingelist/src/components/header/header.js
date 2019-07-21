import React from 'react';
import './header.scss';

import favoriesSVG from './../../assets/icons/favorites.svg';

const Header = (props) => {
  return (
    <header className="app-header" data-test="header">
      <div className="app-header__back-button-wrap">
        <button data-test="backButton" className="back-button">Go Back</button>
      </div>
      <div className="app-header__title">
        <span data-test="title">My Binge List</span>
      </div>
      <div className="app-header__favorites-button">
        <img data-test="favoritesButton" src={favoriesSVG} alt="favories" className="favorites-button__icon" />
      </div>
    </header>
  )
}

export default Header;
