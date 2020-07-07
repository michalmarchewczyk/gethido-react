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
} from '../actions/types';
// import * as types from '../actions/types';

const initialState = {
    logged: null,
    user: {},
    errors: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                logged: (!!action.payload.id),
                errors: (action.payload.type)? [action.payload] : [],
            };
        case CHECK_USER:
            return {
                ...state,
                logged: !!action.payload.id,
                user: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                logged: false,
                user: {},
                errors: []
            };
        case REGISTER_USER:
            return {
                ...state,
                errors: action.payload,
            };
        case UPDATE_USER:
            return {
                ...state
            };
        case DELETE_USER:
            return {
                ...state
            };
        case GET_SETTINGS:
            return {
                ...state
            };
        case CHANGE_SETTINGS:
            return {
                ...state
            };
        case GET_EMAILS:
            return {
                ...state
            };
        case SET_EMAIL:
            return {
                ...state
            };
        case DELETE_EMAIL:
            return {
                ...state
            };
        default:
            return state
    }
};
