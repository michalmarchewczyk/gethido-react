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


export const updateUser = ({oldPassword, newUsername, newEmail, newPassword, newRepeatPassword}) => async dispatch => {
    let data;
    if(newUsername) data = await UserService.update({oldPassword, newUsername});
    if(newEmail) data = await UserService.update({oldPassword, newEmail});
    if(newPassword && newRepeatPassword) data = await UserService.update({oldPassword, newPassword, newRepeatPassword});
    if(!data){
        dispatch({
            type: UPDATE_USER,
            payload: false,
        });
        return;
    }
    dispatch({
        type: UPDATE_USER,
        payload: data,
    })
};


export const deleteUser = ({password}) => async dispatch => {
    let data = await UserService.delete({password});
    dispatch({
        type: DELETE_USER,
        payload: data,
    })
};


export const getSettings = () => async dispatch => {
    let data = await UserService.getSettings();
    dispatch({
        type: GET_SETTINGS,
        payload: data,
    })
};


export const changeSettings = (newSettings) => async dispatch => {
    let data = await UserService.setSettings({newSettings});
    dispatch({
        type: CHANGE_SETTINGS,
        payload: data,
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
