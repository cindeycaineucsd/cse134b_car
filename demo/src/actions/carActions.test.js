import expect from 'expect';
import * as carActions from './carActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Car Actions', () => {
  describe('createCarSuccess', () => {
    it('should create a CREATE_CAR_SUCCESS action', () => {
      //arrange
      const car = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_CAR_SUCCESS,
        car: car
      };

      //act
      const action = carActions.createCarSuccess(car);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_CARS_SUCCESS when loading cars', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/cars')
    //   .reply(200, { body: { car: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_CARS_SUCCESS, body: {cars: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({cars: []}, expectedActions, done);
    store.dispatch(carActions.loadCars()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_CARS_SUCCESS);
      done();
    });
  });
});
