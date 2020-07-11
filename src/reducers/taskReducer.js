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
    currentTask: {},
};


export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            // console.log(action.payload);
            return {
                ...state,
                stage: action.payload.stage,
                tasks: (action.payload.data[0])? action.payload.data : [],
                currentTask: {},
            };
        case GET_TASK:
            // console.log(action.payload);
            return {
                ...state,
                currentTask: (action.payload.name)? action.payload : {},
            };
        case CREATE_TASK:
            console.log(action.payload);
            return {
                ...state,
                tasks: (action.payload.id)? [...state.tasks, action.payload] : state.tasks,
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


