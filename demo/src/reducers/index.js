import {combineReducers} from 'redux';
import cars from './carReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  cars,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
