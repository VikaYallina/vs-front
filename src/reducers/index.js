import {combineReducers} from 'redux';
import auth from './auth';
import message from './message';


// Instead of creating a store for each reducer, we can combine them in one store using combineReducers
export default combineReducers({
    auth,
    message
})