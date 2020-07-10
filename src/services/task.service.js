
const API_URL = 'http://localhost:8000';

const TaskService = {
    getTasks: async ({stage}) => {
        return fetch(`${API_URL}/tasks/${stage}`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            })
    },
    
    get: async ({id}) => {
        return fetch(`${API_URL}/tasks/${id}`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            })
    },
    
    create: async ({name, description}) => {
        return fetch(`${API_URL}/tasks/`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, description, stage: 'inbox', source: 'WebApp'})
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            })
    },
    
    move: async ({id, stage}) => {
        return fetch(`${API_URL}/tasks/move/${id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({destination: stage}),
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            })
    },
    
    update: async ({id, name, description, completed}) => {
        return fetch(`${API_URL}/tasks/${id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, description, completed}),
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            })
    },
    
    delete: async ({id}) => {
        return fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            })
    },
    
    tag: async ({id, tags}) => {
        return fetch(`${API_URL}/tasks/tags/${id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({tags}),
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            })
    },
    
    getTag: async ({tag}) => {
        return fetch(`${API_URL}/tasks/tags/${tag}`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            })
    }
};

export default TaskService;
