import React from 'react';

import './emptyMessage.scss';

const EmptyMessage = (props) => {
  return (
    <div className="empty-movie-list" data-test="emptyMessageComponent">
      <p data-test="emptyText" className="empty-movie-list__text">Please enter a genre to find movies e.g. Action</p>
    </div>
  )
}

export default EmptyMessage;
