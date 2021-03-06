import React, { Component } from 'react';

import { Mutation } from "react-apollo";
import { ADD_TO_FAVORITES, REMOVE_FAVORITE } from './../../graphql';

import ratingStar from './../../assets/icons/rating_star.svg';
import adoveMedianStar from './../../assets/icons/above_median_star.svg';
import calendar from './../../assets/icons/calendar_icon.svg';
import addFavoritesIcon from './../../assets/icons/add_favorite.svg';
import removeFavoritesIcon from './../../assets/icons/remove_favorite.svg';

import PropTypes from 'prop-types';

import './movie.scss';

export class Movie extends Component {

  extractDesc(desc) {
    return desc.substring(0, 120) + (desc.length > 120 ? '...' : undefined)
  }

  extractGenres(genres) {
    return genres && genres.map((genre, index) => (index !== 0 ? ' ' : '') + genre.name).join(',')
  }

  render() {
    return (
      <div className="movie-container" data-test="movieComponent">
        <div className="movie-container__wrap">
          <div className="movie-thumbnail">
            <img className="movie-thumbnail__img" src={this.props.movie.poster.fullPath} alt={`Thubnail of movie ${this.props.movie.title}`} />
            {this.props.medianRating < this.props.movie.rating ? <img className="star-icon--mobile" src={adoveMedianStar} alt="Median Star" /> : undefined}
            {!this.props.isFavorite && <Mutation mutation={ADD_TO_FAVORITES}>
              {(addFavorite, { data }) => (
                <button className="actionfavorites-icon" onClick={e => {
                  e.preventDefault();
                  addFavorite({ variables: { movieId: this.props.movie.id } })
                  this.props.addFavorite(this.props.movie)
                }
                }>
                  <img src={addFavoritesIcon} className="favorites-icon__img" alt="Add favorites button" />
                </button>
              )}
            </Mutation>}
            {this.props.isFavorite && <Mutation mutation={REMOVE_FAVORITE}>
              {(removeFavorite, { data }) => (
                <button className="actionfavorites-icon" onClick={e => {
                  e.preventDefault();
                  removeFavorite({ variables: { movieId: this.props.movie.id } })
                  this.props.removeFavorite(this.props.movie.id)
                }}>
                  <img src={removeFavoritesIcon} className="favorites-icon__img" alt="Remove favorites button" />
                </button>
              )}
            </Mutation>}
          </div>
          <div className="movie-desc-wrap">
            <div className="movie-desc-wrap__header">
              <div className="header__top">
                <div className="header__title-with-rating-wrap">
                  <div className="header__title">
                    {this.props.movie.title}
                  </div>
                  <div className="header__rating">
                    <span className="rating-number">{this.props.movie.rating}</span>
                    <img className="rating-icon" src={ratingStar} alt="rating icon" />
                  </div>
                </div>
                <div className="header__calendar-genres">
                  <div className="yearWrap">
                    <img className="calendar-icon" width="15px" src={calendar} alt="calendar" />
                    <span className="releaseYear">{this.props.movie.releaseYear}</span>
                  </div>
                  <div className="genresWrap">
                    <span className="genres">{this.extractGenres(this.props.movie.genres)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="movie-desc-wrap__body">
              <div className="body__desc">
                <p>{this.extractDesc(this.props.movie.overview)}</p>
              </div>
            </div>
            <div className="movie-desc-wrap__footer">
              {this.props.medianRating < this.props.movie.rating ? <img className="footer__star-icon" src={adoveMedianStar} alt="Median Star" data-test="ratingStar" /> : <div className="footer__star-icon fake"></div>}
              <button className="footer__button">More info</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

Movie.propTypes = {
  medianRating: PropTypes.number,
  movie: PropTypes.object,
  removeFavorite: PropTypes.func,
  addFavorite: PropTypes.func
}

export default Movie;
