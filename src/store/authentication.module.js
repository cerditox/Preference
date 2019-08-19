import { userService } from '../services/userService';
import { router } from '../_helper/router';
import { notesService } from '../services/notesService';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login( {commit} , { username, password }) {
            commit('loginRequest', { username });

            userService.login(username, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/');
                    },
                    error => {
                        commit('loginFailure', error)
                        
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
        },
        delete({ commit }, id){
            notesService.deleteNote(id);
        } 
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
}
