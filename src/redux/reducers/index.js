import { combineReducers } from 'redux';
import ordersReducer from './order';

export default history => combineReducers({
    order: ordersReducer
});
