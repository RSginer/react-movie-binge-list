import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import './header.scss';

import PropTypes from 'prop-types';

import favoriesSVG from './../../assets/icons/favorites.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export class Header extends Component {

  render() {
    const { title, showBackButton, showFavoritesButton } = this.props;
  
    return (
      <header className="app-header" data-test="header">
        <div className="app-header__back-button">
          {showBackButton &&
            <NavLink to="/" data-test="backButton">
              <FontAwesomeIcon icon={faArrowLeft} color="white" size="2x" />
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

}

Header.propTypes = {
  showBackButton: PropTypes.bool,
  showFavoritesButton: PropTypes.bool,
  title: PropTypes.string
}

const mapStateToProps = state => {
  return {
    showBackButton: state.header.showBackButton,
    showFavoritesButton: state.header.showFavoritesButton,
    title: state.header.title
  }
}

export default connect(mapStateToProps)(Header);
