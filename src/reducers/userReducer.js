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
    emails: [],
    emailGen: null,
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
                user: (action.payload.id)? {...state.user, ...action.payload} : action.payload,
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
                ...state,
                errors: (action.payload)? action.payload : [],
                logged: (action.payload && action.payload[0].type==='updateSuc')? false : state.logged,
            };
        case DELETE_USER:
            return {
                ...state,
                errors: (action.payload)? action.payload : [],
                logged: (action.payload && action.payload[0].type==='deleteSuc')? false : state.logged,
            };
        case GET_SETTINGS:
            return {
                ...state,
                user: {
                    ...state.user,
                    settings: {
                        ...state.user.settings,
                        ...action.payload
                    }
                }
            };
        case CHANGE_SETTINGS:
            return {
                ...state,
                user: {
                    ...state.user,
                    settings: {
                        ...state.user.settings,
                        ...action.payload
                    }
                }
            };
        case GET_EMAILS:
            return {
                ...state,
                emails: (action.payload[0])? action.payload: [],
                emailGen: null,
            };
        case SET_EMAIL:
            return {
                ...state,
                emailGen: (action.payload)? action.payload : '',
            };
        case DELETE_EMAIL:
            return {
                ...state,
                emails: (action.payload[0])? action.payload: [],
                emailGen: null,
            };
        default:
            return state
    }
};
