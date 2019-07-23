import React, { Component } from 'react';

import ratingStar from './../../assets/icons/rating_star.svg';
import adoveMedianStar from './../../assets/icons/above_median_star.svg';
import calendar from './../../assets/icons/calendar_icon.svg';
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
            <img className="movie-thumbnail__img" src={this.props.poster.fullPath} alt={`Thubnail of movie ${this.props.title}`} />
          </div>
          <div className="movie-desc-wrap">
            <div className="movie-desc-wrap__header">
              <div className="header__top">
                <div className="header__title-with-rating-wrap">
                  <div className="header__title">
                    {this.props.title}
                  </div>
                  <div className="header__rating">
                    <span className="rating-number">7.2</span>
                    <img className="rating-icon" src={ratingStar} alt="rating icon" />
                  </div>
                </div>
                <div className="header__calendar-genres">
                  <div className="yearWrap">
                    <img className="calendar-icon" width="15px" src={calendar} alt="calendar" />
                    <span className="releaseYear">{this.props.releaseYear}</span>
                  </div>
                  <div className="genresWrap">
                    <span className="genres">{
                      this.extractGenres(this.props.genres)
                    }</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="movie-desc-wrap__body">
              <div className="body__desc">
                <p>{this.extractDesc(this.props.overview)}</p>
              </div>
            </div>
            <div className="movie-desc-wrap__footer">
              <img className="footer__star-icon" src={adoveMedianStar} alt="Median Star" />
              <button className="footer__button">More info</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Movie;
