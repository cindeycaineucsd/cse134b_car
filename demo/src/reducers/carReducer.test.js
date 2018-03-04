import expect from 'expect';
import carReducer from './carReducer';
import * as actions from '../actions/carActions';

describe('Car Reducer', () => {
  it('should add car when passed CREATE_CAR_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCar = {title: 'C'};

    const action = actions.createCarSuccess(newCar);

    //act
    const newState = carReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update car when passed UPDATE_CAR_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const car = {id: 'B', title: 'New Title'};
    const action = actions.updateCarSuccess(car);

    // act
    const newState = carReducer(initialState, action);
    const updatedCar = newState.find(a => a.id == car.id);
    const untouchedCar = newState.find(a => a.id == 'A');

    // assert
    expect(updatedCar.title).toEqual('New Title');
    expect(untouchedCar.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
