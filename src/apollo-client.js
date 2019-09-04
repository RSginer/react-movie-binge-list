import ApolloClient from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

export const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://movie-service-my-binge-list.herokuapp.com/graphql' }),
  cache: cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    }
  }
});

