import { createStore } from 'vuex';


const autenticacao = {
    namespaced: true,
    state() {
        return {
            cadastro:{
                nome: '',
                email: '',
                password: '',
                confirmar: ''
            },
            
            autenticado:false
            }
        },
    mutations: {
        registrar(state, cadastro){
            localStorage.setItem('cadastro', JSON.stringify(cadastro))
            state.cadastro = {}
         },
        autenticar(state, login){
            const reg = JSON.parse(localStorage.getItem('cadastro'))
            console.log(reg);
        if (login.email === reg.email && login.password === reg.password){
            localStorage.setItem('autenticado', true)
            state.autenticado = true;   
            }
        },
        logout(state) {
            localStorage.removeItem('autenticado');
            state.autenticado = false;
        }
        
    }
}   

const store = createStore({
    modules: {
        autenticacao
    }
});

export default store;