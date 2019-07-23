import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMovies } from './../../actions'

import { types } from '../../actions/types';

import './movies.scss';

import SearchForm from '../../components/searchForm/searchForm';
import EmptyMessage from '../../components/emptyMessage/emptyMessage';
import Movie from '../../components/movie/movie';
import ServerError from '../../components/serverError/serverError';

export class Movies extends Component {

  state = {
    searchInputValue: this.props.filter | ''
  }

  componentWillMount() {
    this.props.setupHeader();
  }

  onSearchSubmit = async (e) => {
    if (this.state.searchInputValue.length > 0) {
      const genre = this.extractFirstGenre(this.state.searchInputValue)
      this.props.fetchMovies(genre);
    } else {
      this.props.clearMovies();
    }
  }

  onSearchInputChange = (e) => {
    this.setState({ searchInputValue: e.target.value });
  }

  extractFirstGenre = (genre) => {
    return genre.includes(',') ? genre.split(',')[0] : genre;
  }

  render() {
    return (
      <section className="movies-container" data-test="moviesComponent">
        <SearchForm inputChange={this.onSearchInputChange} searchSubmit={this.onSearchSubmit} inputValue={this.state.searchInputValue} />
        {this.props.loading && !this.props.error && <p data-test="loading">Loading...</p>}
        {this.props.error && <ServerError message={this.props.error.message} />}
        {this.props.movies && this.props.movies.length > 0 && !this.props.error &&
          <div className="movies-container__movies-list">
            {this.props.movies.map((movie) => <Movie key={movie.id} {...movie} isFavorite={this.props.favorites.includes(movie.id)} medianRating={this.props.medianRating} />)}
          </div>}
        {!this.props.error && !this.props.loading && this.props.movies.length === 0 && <EmptyMessage />}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.movies.filter,
    medianRating: state.movies.medianRating,
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error,
    favorites: state.movies.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setupHeader: () => dispatch({
      type: types.SET_ROUTE,
      payload: {
        showBackButton: false,
        showFavoritesButton: true,
        title: 'My Binge List'
      }
    }),
    fetchMovies: fetchMovies(dispatch),
    clearMovies: () => dispatch({
      type: types.CLEAR_MOVIES,
      payload: []
    })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));
