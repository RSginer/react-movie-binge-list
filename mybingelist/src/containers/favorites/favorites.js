import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setupHeader, fetchFavorites, removeFavorite } from '../../actions';

import Movie from './../../components/movie/movie';

export class Favorites extends Component {

  async componentWillMount() {
    this.props.setupHeader({
      showBackButton: true,
      showFavoritesButton: false,
      title: 'Favorite Movies'
    });
    await this.props.fetchFavorites();
  }

  removeFavorite = (id) => {
    this.props.removeFavorite(id);
  }

  render() {
    return (
      <section className="movies-container__movies-list">
        {this.props.favorites.map((f, i) => <Movie 
        key={i}
        movie={f} isFavorite={true} 
        removeFavorite={this.removeFavorite}
        />)}
      </section>
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
    fetchFavorites: fetchFavorites(dispatch),
    removeFavorite: removeFavorite(dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorites));

