import {
    LOGIN_USER,
    CHECK_USER,
    LOGOUT_USER,
    REGISTER_USER,
    UPDATE_USER,
    DELETE_USER,
    GET_SETTINGS,
    CHANGE_SETTINGS,
    GET_EMAILS,
    SET_EMAIL,
    DELETE_EMAIL
} from './types';
import UserService from '../services/user.service';


export const loginUser = ({username, password}) => async dispatch => {
    let data = await UserService.login({username, password});
    if (!data) {
        dispatch({
            type: LOGIN_USER,
            payload: false,
        });
    } else if (!data.user) {
        dispatch({
            type: LOGIN_USER,
            payload: data[0],
        });
    } else {
        dispatch({
            type: LOGIN_USER,
            payload: data.user,
        })
    }
};


export const checkUser = () => async dispatch => {
    let data = await UserService.check();
    dispatch({
        type: CHECK_USER,
        payload: data,
    })
};


export const logoutUser = () => async dispatch => {
    let data = await UserService.logout();
    dispatch({
        type: LOGOUT_USER,
        payload: data,
    })
};


export const registerUser = ({username, email, password, repeatPassword}) => async dispatch => {
    let data = await UserService.register({username, email, password, repeatPassword});
    if (!data) {
        dispatch({
            type: REGISTER_USER,
            payload: false,
        });
    } else if (!data.user) {
        dispatch({
            type: REGISTER_USER,
            payload: data,
        });
    } else {
        dispatch({
            type: REGISTER_USER,
            payload: data.user,
        })
    }
};


export const updateUser = ({oldPassword, newUsername, newEmail, newPassword, newRepeatPassword}) => dispatch => {
    dispatch({
        type: UPDATE_USER,
    })
};


export const deleteUser = ({password}) => dispatch => {
    dispatch({
        type: DELETE_USER,
    })
};


export const getSettings = () => dispatch => {
    dispatch({
        type: GET_SETTINGS,
    })
};


export const changeSettings = ({newSettings}) => dispatch => {
    dispatch({
        type: CHANGE_SETTINGS,
    })
};


export const getEmails = () => dispatch => {
    dispatch({
        type: GET_EMAILS,
    })
};


export const setEmail = () => dispatch => {
    dispatch({
        type: SET_EMAIL,
    })
};


export const deleteEmail = ({email}) => dispatch => {
    dispatch({
        type: DELETE_EMAIL,
    })
};
