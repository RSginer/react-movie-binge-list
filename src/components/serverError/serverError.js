import React from 'react';

import PropTypes from 'prop-types';

import './serverError.scss';

export const ServerError = (props) => {
  return (
    <p className="serverError-wrap" data-test="serverErrorComponent"><span className="cry-icon" role="img" aria-label="cry">😭</span>Server throws the following error <i className="server-error-message" data-test="errorMessage">{props.message}</i></p>
  )
}

ServerError.propTypes = {
  message: PropTypes.string
}

export default ServerError;