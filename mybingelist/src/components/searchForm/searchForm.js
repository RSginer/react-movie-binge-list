import React from 'react';
import './searchForm.scss';

import PropTypes from 'prop-types'

const SearchForm = (props) => {
  return (
    <div className="searchForm" data-test="searchFormComponent">
      <div className="searchForm__input-wrap">
        <input data-test="searchInput" className="searchForm__input-wrap__input" type="text" placeholder="Enter genre" onChange={props.inputChange} value={props.inputValue || ''} />
      </div>
      <div className="searchForm__submit">
        <button data-test="submitButton" onClick={props.searchSubmit} className="searchForm__submit__button">Search</button>
      </div>
    </div>
  )
}

SearchForm.propTypes = {
  inputValue: PropTypes.string,
  inputChange: PropTypes.func,
  searchSubmit: PropTypes.func
}

export default SearchForm;