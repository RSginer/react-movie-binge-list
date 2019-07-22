import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { types } from '../../actions/types';

import './movies.scss';

import { withRouter } from 'react-router-dom';
import SearchForm from '../../components/searchForm/searchForm';
import EmptyMessage from '../../components/emptyMessage/emptyMessage';

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
    // TODO: dispatch change filter
    this.props.changeGenre(this.state.searchInputValue);
  }

  onSearchInputChange = (e) => {
    this.setState({searchInputValue: e.target.value});
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
            if (error) return <p>Error :(</p>;
            if (!data || !data.allMovies) return <EmptyMessage />
            return data.allMovies.data.map(({ id, title }) => (
              <div data-test="movieItem" key={id}>
                <p data-test="movieTitle">{title}</p>
              </div>
            ));
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
        showFavoritesButton: true
      }
    }),
    changeGenre: (genre) => dispatch({
      type: types.CHANGE_GENRE,
      payload: genre
    })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));
