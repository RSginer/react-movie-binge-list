import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../../src/reducers';

export const history = createBrowserHistory();

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(routerMiddleware(history))(createStore);
  return createStoreWithMiddleware(rootReducer(history), initialState);
};

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
}
