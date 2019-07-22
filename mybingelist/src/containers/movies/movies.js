import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { types } from '../../actions/types';

import { withRouter } from 'react-router-dom';

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
      releaseYear
      tagline
    }
  }
}`;

export class Movies extends Component {

  componentWillMount() {
    this.props.setupHeader()
  }

  render() {
    return (
      <div data-test="moviesComponent">
        <Query
          query={GET_ALL_MOVIES}
          variables={{ genre: this.props.filter }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p data-test="loading">Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.allMovies.data.map(({ id, title }) => (
              <div data-test="movieItem" key={id}>
                <p data-test="movieTitle">{title}</p>
              </div>
            ));
          }}
        </Query>
      </div>
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
    })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));
