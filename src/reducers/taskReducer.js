import {
    GET_TASKS,
    GET_TASK,
    CREATE_TASK,
    MOVE_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    TAG_TASK,
    GET_TAG_TASKS
} from '../actions/types';


const initialState = {
    tasks: [],
    stage: null,
};


export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state
            };
        case GET_TASK:
            return {
                ...state
            };
        case CREATE_TASK:
            return {
                ...state
            };
        case MOVE_TASK:
            return {
                ...state
            };
        case UPDATE_TASK:
            return {
                ...state
            };
        case DELETE_TASK:
            return {
                ...state
            };
        case TAG_TASK:
            return {
                ...state
            };
        case GET_TAG_TASKS:
            return {
                ...state
            };
        default:
            return state
    }
};


