import React, { Component } from 'react';

import Header from '../../components/header/header';

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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
          query={gql`
          query allMoviesByGenre {
            allMovies(genre: "Science Fiction", limit: 10, offset:0) {
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
          }
    `}
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

export default Movies;
