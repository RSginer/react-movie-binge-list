import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setupHeader, fetchFavorites, removeFavorite } from '../../actions';

import Movie from './../../components/movie/movie';
import ServerError from './../../components/serverError/serverError';
import Loading from './../../components/loading/loading';


export class Favorites extends Component {

  componentWillMount() {
    this.props.setupHeader({
      showBackButton: true,
      showFavoritesButton: false,
      title: 'Favorite Movies'
    });

    if (!this.props.fetched) {
      this.props.fetchFavorites();
    }
  }

  removeFavorite = (id) => {
    this.props.removeFavorite(id);
  }

  render() {
    return (
      <section className="movies-container__movies-list" data-test="favoritesComponent">
        {this.props.loading && !this.props.error && <Loading />}
        {this.props.error && <ServerError message={this.props.error.message} />}
        {!this.props.error && !this.props.loading && this.props.favorites.map((f, i) => <Movie
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
    loading: state.favorites.loading,
    fetched: state.favorites.fetched
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

