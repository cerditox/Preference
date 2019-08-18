
import { authHeader } from '../_helper/auth-header';

export const userService = {
    login,
    logout,
    getAll,
    getAllNotes
};

function login(FirstName, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ FirstName, password })
    };

    return fetch('https://localhost:44344/api/Users/authenticate', requestOptions)
    
        .then(handleResponse)
        .then(user => {
            //console.log(''JSON.parse(user));
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //console.log("Este es el usuario logeado " + user.firstName)
                localStorage.setItem('user', JSON.stringify(user));
            } 
            
            return user;

        });
}

function getAllNotes(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
     
    var user = JSON.parse(localStorage.getItem('user'));
    //console.log(user.userId);

    return fetch ('https://localhost:44344/api/Users/'+user.userId+'/userNotes', requestOptions).then(handleResponse);
    
    
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('notes');

}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('https://localhost:44344/api/Users', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    //console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
       // console.log('mi informacion personal' +data);
                return data;
    });
}