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
                tasks: (action.payload.data[0]) ? action.payload.data : [],
                currentTask: {},
            };
        case GET_TASK:
            // console.log(action.payload);
            return {
                ...state,
                currentTask: (action.payload.id) ? action.payload : {},
            };
        case CREATE_TASK:
            // console.log(action.payload);
            return {
                ...state,
                tasks: (action.payload.id) ? [...state.tasks, action.payload] : state.tasks,
            };
        case MOVE_TASK:
            // console.log(action.payload);
            return {
                ...state,
                tasks: (action.payload.id && action.payload.stage !== state.stage) ?
                    state.tasks.filter(task => (task.id !== action.payload.id))
                    : state.tasks,
            };
        case UPDATE_TASK:
            // console.log(action.payload);
            return {
                ...state,
                tasks: (action.payload.id) ?
                    state.tasks.map(task => (task.id === action.payload.id) ? action.payload : task)
                    : state.tasks,
                currentTask: (action.payload.id) ? action.payload : state.currentTask,
            };
        case DELETE_TASK:
            // console.log(action.payload);
            return {
                ...state,
                tasks: (action.payload.id) ?
                    state.tasks.filter(task => (task.id !== action.payload.id)) : state.tasks,
                currentTask: (action.payload.id) ? action.payload : state.currentTask,
            };
        case TAG_TASK:
            // console.log(action.payload);
            return {
                ...state,
                tasks: (action.payload.id) ?
                    state.tasks.map(task => (task.id === action.payload.id) ? action.payload : task)
                    : state.tasks,
                currentTask: (action.payload.id) ? action.payload : state.currentTask,
            };
        case GET_TAG_TASKS:
            // console.log(action.payload);
            return {
                ...state,
                stage: action.payload.stage,
                tasks: (action.payload.data[0]) ? action.payload.data : [],
                currentTask: {},
            };
        default:
            return state
    }
};


