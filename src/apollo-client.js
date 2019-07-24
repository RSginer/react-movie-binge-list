import ApolloClient from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

export const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: cache
});

