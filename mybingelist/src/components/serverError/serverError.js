import React from 'react';

import PropTypes from 'prop-types';

export const ServerError = (props) => {
  return (
    <p data-test="serverErrorComponent"><span role="img" aria-label="cry">😭</span> Genre <u>{props.genre}</u> throws the following server error <i className="server-error-message" data-test="errorMessage">{props.message}</i></p>
  )
}

ServerError.propTypes = {
  message: PropTypes.string,
  genre: PropTypes.string
}

export default ServerError;