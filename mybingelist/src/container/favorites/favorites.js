import React, { Component } from 'react';

import { connect } from 'react-redux';
import { types } from '../../actions/types';

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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

