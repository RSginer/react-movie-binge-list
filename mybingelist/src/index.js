import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './createStore';

import { ApolloProvider } from "react-apollo";

import { client } from './apollo-client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </ApolloProvider>

  ,
  document.getElementById('root'));
