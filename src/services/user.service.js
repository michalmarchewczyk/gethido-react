
const API_URL = 'http://localhost:8000';

const UserService = {
    login: async ({username, password}) => {
        return fetch(`${API_URL}/user/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            });
    },
    
    check: async () => {
        return fetch(`${API_URL}/user/checkToken`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if(data.user){
                    return data.user;
                }else{
                    return false
                }
            })
            .catch(err => {
                return false
            })
    },
    
    logout: async () => {
        return fetch(`${API_URL}/user/logout`, {
            method: 'PUT',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if(data.msg){
                    return true;
                }else{
                    return false
                }
            })
            .catch(err => {
                return false
            })
    },
    
    register: async ({username, email, password, repeatPassword}) => {
        return fetch(`${API_URL}/user/register`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password, repeatPassword}),
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                return false;
            });
    },
    
    update: async ({oldPassword, newUsername, newEmail, newPassword, newRepeatPassword}) => {
        return fetch(`${API_URL}/user/update`, {
            method: 'PUT',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({oldPassword, newUsername, newEmail, newPassword, newRepeatPassword})
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(err => {
                return false;
            })
    },
    
    getSettings: async () => {
        return fetch(`${API_URL}/user/settings`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(err => {
                return false
            })
    },
    
    setSettings: async ({newSettings}) => {
        return fetch(`${API_URL}/user/settings`, {
            method: 'PUT',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...newSettings}),
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(err => {
                return false
            })
    }
};

export default UserService;
