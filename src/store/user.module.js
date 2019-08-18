import { userService } from '../services/userService';
//onst user = JSON.parse(localStorage.getItem('user'));
export const users = {
    namespaced: true,
    state: {
        all: {}
      
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getAll()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        },
    
        getAllNotes({commit}){
            
            commit('getAllRequest');
            //console.log('ejecutando la funcion');
            userService.getAllNotes()
            
            .then( notes =>{ 
               // console.log('miooo' + notes),
                 commit('getAllnotes', notes)
                }
                 );
           
        }
    
    
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        },
        getAllnotes(state, notes){
            state.all = {items: notes, 
            
            }
        }
    }
}
