import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function carReducer(state = initialState.cars, action) {
  switch (action.type) {
    case types.LOAD_CARS_SUCCESS:
      return action.cars;

    case types.CREATE_CAR_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.car)
      ];

    case types.UPDATE_CAR_SUCCESS:
      return [
        ...state.filter(car => car.id !== action.car.id),
        Object.assign({}, action.car)
      ];

    default:
      return state;
  }
}
