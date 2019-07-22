import React from 'react';

import ratingStar from './../../assets/icons/rating_star.svg';
import adoveMedianStar from './../../assets/icons/above_median_star.svg';
import calendar from './../../assets/icons/calendar_icon.svg';
import './movie.scss';

const Movie = (props) => {
  return (
    <div className="movie-container" data-test="movieComponent">
      <div className="movie-container__wrap">
        <div className="movie-thumbnail">
          <img className="movie-thumbnail__img" src={props.poster.fullPath} alt={`Thubnail of movie ${props.title}`} />
        </div>
        <div className="movie-desc-wrap">
          <div className="movie-desc-wrap__header">
            <div className="header__top">
              <div className="header__title-with-rating-wrap">
                <div className="header__title">
                  {props.title}
                </div>
                <div className="header__rating">
                  <span className="rating-number">7.2</span>
                  <img className="rating-icon" src={ratingStar} alt="rating icon" />
                </div>
              </div>
              <div className="header__calendar-genres">
                <div className="yearWrap">
                  <img className="calendar-icon" width="15px" src={calendar} alt="calendar" />
                  <span className="releaseYear">{props.releaseYear}</span>
                </div>
                <div className="genresWrap">
                  <span className="genres">{
                    props.genres && props.genres.map((genre) => ' ' + genre.name).join(',')
                  }</span>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-desc-wrap__body">
            <div className="body__desc">
            <p>{props.overview.substring(0, 120)}{props.overview.length > 120 ? '...' : undefined}</p>
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

export default Movie;
