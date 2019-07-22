import React from 'react';

import ratingStar from './../../assets/icons/rating_star.svg';
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
                  <span className="genres"><i>{
                    props.genres && props.genres.map((genre) => ' ' + genre.name).join(',')
                  }</i></span>
                </div>
              </div>
            </div>

          </div>
          <div className="movie-desc-wrap__body">
            <p>{props.overview}</p>
          </div>
          <div className="movie-desc-wrap__footer">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;
