import React from 'react';
import './header.scss';
import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types';

import favoriesSVG from './../../assets/icons/favorites.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Header = (props) => {

  const { title, showBackButton, showFavoritesButton } = props;

  return (
    <header className="app-header" data-test="header">
      <div className="app-header__back-button">
        {showBackButton &&
          <NavLink to="/" data-test="backButton">
            <FontAwesomeIcon icon={faArrowLeft} color="white" size="lg" />
          </NavLink>}
      </div>
      <div className="app-header__title">
        <span data-test="title">{title}</span>
      </div>
      <div className="app-header__favorites-button">
        {showFavoritesButton &&
          <NavLink to="/favorites">
            <img data-test="favoritesButton" src={favoriesSVG} alt="favories" className="favorites-button__icon" />
          </NavLink>
        }
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
