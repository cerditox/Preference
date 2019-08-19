import {authHeader} from '../_helper/auth-header';

export const notesService = {
    deleteNote
};

function deleteNote(idNote){
    const requestOptions={
        method: 'DELETE',
        headers : authHeader()
        
    }
    return fetch ('https://localhost:44344/api/Notes/'+idNote, requestOptions).then(handleResponse);
}

    function handleResponse(response) {
        //console.log(response);
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
           // console.log('mi informacion personal' +data);
                    return data;
        });
}