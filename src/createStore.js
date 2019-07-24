import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/index';
import ReduxThunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
export const history = createBrowserHistory()


const enhancers = [
  applyMiddleware(
    routerMiddleware(history),
    ReduxThunk
  )
]

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(composeWithDevTools())
}



export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(
      ...enhancers
    ),
  )

  return store
}