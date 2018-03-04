import * as types from './actionTypes';
import carApi from '../api/mockCarApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCarsSuccess(cars) {
  return { type: types.LOAD_CARS_SUCCESS, cars};
}

export function createCarSuccess(car) {
  return {type: types.CREATE_CAR_SUCCESS, car};
}

export function updateCarSuccess(car) {
  return {type: types.UPDATE_CAR_SUCCESS, car};
}

export function deleteCarSuccess(car) {
  return {type: types.DELETE_CAR_SUCCESS, car};
}

export function loadCars() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return carApi.getAllCars().then(cars => {
      dispatch(loadCarsSuccess(cars));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCar(car) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return carApi.saveCar(car).then(car => {
      car.id ? dispatch(updateCarSuccess(car)) :
        dispatch(createCarSuccess(car));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteCar(car) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return carApi.deleteCar(car).then(car => {
      dispatch(deleteCarSuccess(car));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
