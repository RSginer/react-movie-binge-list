import { types } from './../../actions/types';

import reducer from './header';

describe('Header reducer', () => {

  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState.title).toBe('My Binge List');
    expect(newState.showBackButton).toBeFalsy();
    expect(newState.showFavoritesButton).toBeTruthy();
  })

  it('Should return favorites route state', () => {
    const newState = reducer(undefined, {
      type: types.SET_ROUTE,
      payload: {
        showBackButton: true,
        showFavoritesButton: false,
        title: 'Favorite Movies'
      }
    });
    expect(newState.title).toBe('Favorite Movies');
    expect(newState.showBackButton).toBeTruthy();
    expect(newState.showFavoritesButton).toBeFalsy();
  })

})