import React from 'react';

import './movie.scss';

const Movie = (props) => {
  return (
    <div data-test="movieComponent">
      {props.title}
    </div>
  )
}

export default Movie;
