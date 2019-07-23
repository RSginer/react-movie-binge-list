import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setupHeader, fetchFavorites } from '../../actions';

import Movie from './../../components/movie/movie';

export class Favorites extends Component {

  async componentWillMount() {
    this.props.setupHeader({
      showBackButton: true,
      showFavoritesButton: false,
      title: 'Favorite Movies'
    });
    this.props.fetchFavorites()
  }

  render() {
    return (
      <div>
        {this.props.favorites.map((f) => <Movie {...f} isFavorite={true} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites.favorites,
    error: state.favorites.error,
    loading: state.favorites.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setupHeader: setupHeader(dispatch),
    fetchFavorites: fetchFavorites(dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorites));

