import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as carActions from '../actions/carActions';

describe('Store', function() {
  it('Should handle creating cars', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const car = {
      title: "Clean Code"
    };

    // act
    const action = carActions.createCarSuccess(car);
    store.dispatch(action);

    // assert
    const actual = store.getState().cars[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
