import React, { Component } from 'react';

import { connect } from 'react-redux';
import { types } from '../../actions/types';

import { withRouter } from 'react-router-dom'

export class Favorites extends Component {

  componentWillMount() {
    this.props.setupHeader();
  }

  render() {
    return (
      <div>
        Favorites
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    setupHeader: () => dispatch({
      type: types.SET_ROUTE,
      payload: {
        showBackButton: true,
        showFavoritesButton: false
      }
    })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorites));

