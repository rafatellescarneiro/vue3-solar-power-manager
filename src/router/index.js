import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/dashboard/Home.vue';
import Unidade from '../views/dashboard/Unidade.vue';
import Cadastro from '../views/dashboard/Cadastro.vue'

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
        component: () => import('../views/LoginPage.vue'),
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
        component: () => import('../views/Register.vue'),
        beforeEnter: (to)=>{
            const auth = localStorage.getItem('autenticado');
            if(auth){
                return to = '/'
            }
            return true
       }
    },
    {
        path: '/unidade',
        component: Unidade
    },
    {
        path: '/cadastro',
        component: Cadastro
    }
]

const router = createRouter({
	routes,
	history: createWebHashHistory(process.env.BASE_URL)
});

export default router;