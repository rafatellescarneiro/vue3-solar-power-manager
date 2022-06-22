import { createStore } from 'vuex';
import { ref, computed } from 'vue'


const autenticacaoModule = {
    namespaced: true,
    state() {
        return {
            autenticado:false,
            cadastro:{
                nome: '',
                email: '',
                password: '',
                confirmar: ''
            } 
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
            
            console.log(state.autenticado);
        },
        logout(state) {
            localStorage.removeItem('autenticado');
            state.autenticado = false;
        }
        
    }
}   

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)


const store = createStore({
    modules: {
        autenticacaoModule
    }
});

export default store;