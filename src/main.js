import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.common.Accept = 'application/json';

Vue.config.productionTip = false;

/* eslint-disable-next-line */
export const eventBus = new Vue();

new Vue({
    render: (h) => h(App),
}).$mount('#app');
