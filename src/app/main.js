// importa modulos de Vue.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Librería para realizar peticiones endpoints REST
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

// Importa los componentes de Vue.js
import App from './App.vue';
import DisplayUsers from './components/DisplayUsers.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';


// Se definen las rutas de de la aplicación
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