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

const cadastroUnidade = {
    namespaced: true,
    state(){
        return{
            lista:[ ],
            id:0,
            unidade:[]
        }
    },
    mutations:{
        salvar(state, novaUni){
            localStorage.setItem('novaUni', JSON.stringify(novaUni))
            localStorage.setItem('unidades', JSON.stringify(novaUni.nickname))
            const lista = JSON.parse(localStorage.getItem('novaUni'))
            const unidade1 = JSON.parse(localStorage.getItem('unidades'))
            state.lista.push({
                id:state.id,
                nickname:novaUni.nickname,
                local:novaUni.local,
                marca:novaUni.marca,
                model:novaUni.model,
                active:novaUni.active
            })
           
            state.unidade.push({
                nickname:novaUni.nickname
            })
            console.log(state.lista)
                state.id++
            }  
    }
    
}

const saveGerador = {
    namespaced: true,
    state(){
        return{
            unidade:[
                
            ],
            totalGerado: 0
        }
    },
    mutations:{
        salvarUni(state, lancamento){
            localStorage.setItem('lancamento', JSON.stringify(lancamento))
            state.unidade.push({
                geradora:lancamento.geradora,
                date:lancamento.date,
                totalGerado:lancamento.totalGerado
            })
            console.log(state.unidade);
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
        autenticacaoModule,
        cadastroUnidade,
        saveGerador
    }
});

export default store;