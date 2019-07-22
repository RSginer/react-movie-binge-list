import React from 'react';

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
            <div className="header__title-with-rating-wrap">
                <div className="header__title">
                  <span>{props.title}</span>
                </div>
                <div className="header__rating">

                </div>
            </div>
          </div>
          <div className="movie-desc-wrap__body">
            
            </div>
            <div className="movie-desc-wrap__footer">
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;
