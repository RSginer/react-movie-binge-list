import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/index';

import { composeWithDevTools } from 'redux-devtools-extension';


export const history = createBrowserHistory()

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(
      applyMiddleware(
        routerMiddleware(history)
      ),
    composeWithDevTools()
    ),
  )

  return store
}