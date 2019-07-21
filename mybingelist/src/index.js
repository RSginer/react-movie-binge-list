import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './createStore';

import { ApolloProvider } from "react-apollo";

import { client } from './apollo-client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>

  ,
  document.getElementById('root'));
