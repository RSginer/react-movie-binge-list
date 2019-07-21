import React from 'react';
import './header.scss';

import PropTypes from 'prop-types';

import favoriesSVG from './../../assets/icons/favorites.svg';

const Header = (props) => {

  const { title, showBackButton, showFavoritesButton } = props;

  return (
    <header className="app-header" data-test="header">
      <div className="app-header__back-button-wrap">
        {showBackButton && <button data-test="backButton" className="back-button">Go Back</button>}
      </div>
      <div className="app-header__title">
        <span data-test="title">{title}</span>
      </div>
      <div className="app-header__favorites-button">
        {showFavoritesButton && <img data-test="favoritesButton" src={favoriesSVG} alt="favories" className="favorites-button__icon" />}
      </div>
    </header>
  )
}

Header.propTypes = {
  showBackButton: PropTypes.bool,
  showFavoritesButton: PropTypes.bool,
  title: PropTypes.string
}

export default Header;
