import React, { Component } from 'react';

import Header from '../../components/header/header';
import { connect } from 'react-redux';

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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

  render() {
    const headerProps = {
      showBackButton: false,
      showFavoritesButton: true,
      title: 'My Binge List'
    }

    return (
      <div>
        <Header {...headerProps} />
        <Query
          query={GET_ALL_MOVIES}
          variables={{genre: this.props.filter}}
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

const mapStateToProps = state => {
  return {
    filter: state.movies.filter
  }
}

export default connect(mapStateToProps)(Movies);;
