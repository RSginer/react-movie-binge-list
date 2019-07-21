import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { types } from '../../actions/types';

const GET_ALL_MOVIES = gql`
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
      <div>
        <Query
          query={GET_ALL_MOVIES}
          variables={{ genre: this.props.filter }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.allMovies.data.map(({ id, title }) => (
              <div key={id}>
                <p>{title}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
