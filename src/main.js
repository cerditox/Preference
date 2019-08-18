import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';


import { router } from './_helper/router';
import {store} from'./store/';

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
 
  
 
  render: h => h(App)
});
