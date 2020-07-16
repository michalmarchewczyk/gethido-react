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
    if (stage === 'calendar') {
        if (data[0]) {
            data.sort((a, b) => {
                return new Date(a.calDate) - new Date(b.calDate);
            })
        }
    } else {
        if (data[0]) {
            data.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            })
        }
    }
    dispatch({
        type: GET_TASKS,
        payload: {data, stage},
    })
};


export const getTask = ({id}) => async dispatch => {
    let data = await TaskService.get({id});
    dispatch({
        type: GET_TASK,
        payload: data
    });
};


export const searchTasks = ({s}) => async dispatch => {
    let data = await TaskService.search({s});
    if (data[0]) {
        data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
    }
    dispatch({
        type: GET_TASKS,
        payload: {data, stage: 'search'}
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


export const updateTask = ({id, name, description, completed, calDate}) => async dispatch => {
    let data = await TaskService.update({id, name, description, completed, calDate});
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
    if (data[0]) {
        data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
    }
    dispatch({
        type: GET_TAG_TASKS,
        payload: {data, stage: 'tag'}
    });
};
