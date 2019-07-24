import React from 'react';

import './loading.scss'

export const Loading = (props) => {
  return (
    <div className="loading-container" data-test="loadingComponent">
      <div className="loader" data-test="loading">Loading...</div>
    </div>

  )
}

export default Loading;
