import React from 'react';

import PropTypes from 'prop-types';

import './serverError.scss';

export const ServerError = (props) => {
  return (
    <p className="serverError-wrap" data-test="serverErrorComponent"><span className="cry-icon" role="img" aria-label="cry">😭</span> Genre <u>{props.genre}</u> throws the following server error <i className="server-error-message" data-test="errorMessage">{props.message}</i></p>
  )
}

ServerError.propTypes = {
  message: PropTypes.string,
  genre: PropTypes.string
}

export default ServerError;