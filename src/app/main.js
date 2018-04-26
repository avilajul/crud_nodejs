// importar modulos de vuejs
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

//importar los componentes de Vue.js
import App from './App.vue';
import DisplayUsers from './components/DisplayUsers.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';


// rutas de de la aplicación
const routes = [
    {
        name: 'DisplayUsers',
        path: '/',
        component: DisplayUsers
    },
    {
        name:'CreateUser',
        path: '/create/user',
        component: CreateUser
    },
    {
        name: 'EditUser',
        path: '/edit/user/:id',
        component: EditUser
    }
];

// Configuración del enrutador de la aplicación
const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({router}, App)).$mount('#app');