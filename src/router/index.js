import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './../views/Home.vue';
import LoginPage from './../views/LoginPage.vue';
import Register from './../views/Register.vue'

const routes = [
    {
        path:'/',
        component:Home,
        beforeEnter: (to)=>{
            const auth = localStorage.getItem('autenticado');
            if(auth){
              return true
            } 
            return to = '/login';
          }
    },
    {
        path:'/login',
        component:LoginPage,
        beforeEnter: (to)=>{
            const auth = localStorage.getItem('autenticado');
            if(auth){
                return to = '/'
            }
            return true
       }
    },
    { 
        path: '/registrar',
        component: Register
    }
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
});

export default router;