import {LOGIN_USER, CHECK_USER, LOGOUT_USER, REGISTER_USER, UPDATE_USER, DELETE_USER,GET_SETTINGS, CHANGE_SETTINGS, GET_EMAILS, SET_EMAIL, DELETE_EMAIL} from './types';


export const loginUser = ({username, password}) => dispatch => {
    dispatch({
        type: LOGIN_USER,
    })
};


export const checkUser = () => dispatch => {
    dispatch({
        type: CHECK_USER,
    })
};


export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT_USER,
    })
};


export const registerUser = ({username, email, password, repeatPassword}) => dispatch => {
    dispatch({
        type: REGISTER_USER,
    })
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
