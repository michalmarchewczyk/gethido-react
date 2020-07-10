import {
    GET_TASKS,
    GET_TASK,
    CREATE_TASK,
    MOVE_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    TAG_TASK,
    GET_TAG_TASKS
} from './types';
import TaskService from '../services/task.service';


export const getTasks = ({stage}) => async dispatch => {
    let data = await TaskService.getTasks({stage});
    dispatch({
        type: GET_TASKS,
        payload: data,
    })
};


export const getTask = ({id}) => async dispatch => {
    let data = await TaskService.get({id});
    dispatch({
        type: GET_TASK,
        payload: data
    });
};


export const createTask = ({name, description}) => async dispatch => {
    let data = await TaskService.create({name, description});
    dispatch({
        type: CREATE_TASK,
        payload: data
    });
};


export const moveTask = ({id, stage}) => async dispatch => {
    let data = await TaskService.move({id, stage});
    dispatch({
        type: MOVE_TASK,
        payload: data
    });
};


export const updateTask = ({name, description, completed}) => async dispatch => {
    let data = await TaskService.update({name, description, completed});
    dispatch({
        type: UPDATE_TASK,
        payload: data
    });
};


export const deleteTask = ({id}) => async dispatch => {
    let data = await TaskService.delete({id});
    dispatch({
        type: DELETE_TASK,
        payload: data
    });
};


export const tagTask = ({id, tags}) => async dispatch => {
    let data = await TaskService.tag({id, tags});
    dispatch({
        type: TAG_TASK,
        payload: data
    });
};


export const getTagTasks = ({tag}) => async dispatch => {
    let data = await TaskService.getTag({tag});
    dispatch({
        type: GET_TAG_TASKS,
        payload: data
    });
};
