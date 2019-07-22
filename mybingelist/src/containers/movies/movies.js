import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { withRouter } from 'react-router-dom';

import { types } from '../../actions/types';

import './movies.scss';

import SearchForm from '../../components/searchForm/searchForm';
import EmptyMessage from '../../components/emptyMessage/emptyMessage';
import Movie from '../../components/movie/movie';
import ServerError from '../../components/serverError/serverError';

export const GET_ALL_MOVIES = gql`
query allMoviesByGenre($genre: String!) {
  allMovies(genre: $genre, limit: 10, offset:0) {
    metadata {
      limit
      total
      offset
    }
    data {
      id
      title
      releaseYear,
      poster(size: MEDIUM) {
        fullPath,
      },
      tagline
    }
  }
}`;

export class Movies extends Component {

  state = {
    searchInputValue: this.props.filter
  }

  componentWillMount() {
    this.props.setupHeader()
  }

  onSearchSubmit = (e) => {
    this.props.changeGenre(this.state.searchInputValue);
  }

  onSearchInputChange = (e) => {
    this.setState({ searchInputValue: e.target.value });
  }

  render() {
    return (
      <section className="movies-container" data-test="moviesComponent">
        <SearchForm inputChange={this.onSearchInputChange} searchSubmit={this.onSearchSubmit} inputValue={this.state.searchInputValue} />
        {this.props.filter && <Query
          query={GET_ALL_MOVIES}
          variables={{ genre: this.props.filter }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p data-test="loading">Loading...</p>;
            if (error) return <ServerError genre={this.state.searchInputValue} message={error.message} />;
            if (!data || !data.allMovies || !data.allMovies.data || data.allMovies.data.length < 1) return <EmptyMessage />
            return (
              <div className="movies-container__movies-list">
                {data.allMovies.data.map((movie) => <Movie key={movie.id} {...movie} />)}
              </div>
            );
          }}
        </Query>}
        {
          !this.props.filter && <EmptyMessage />
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.movies.filter,
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
    changeGenre: (genre) => dispatch({
      type: types.CHANGE_GENRE,
      payload: genre
    })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));
