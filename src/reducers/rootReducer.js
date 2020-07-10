import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {taskReducer} from './taskReducer';


export default combineReducers({
    user: userReducer,
    task: taskReducer,
})
