import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setupHeader } from '../../actions';

import { withRouter } from 'react-router-dom'

export class Favorites extends Component {

  componentWillMount() {
    this.props.setupHeader({
      showBackButton: true,
      showFavoritesButton: false,
      title: 'Favorite Movies'
    });
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
    setupHeader: setupHeader(dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorites));

