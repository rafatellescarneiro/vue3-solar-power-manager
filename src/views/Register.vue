<template>
  <div class="container">
    <div class="child">
      <h2>Cadastro de Usuários</h2>
    
      <vee-form @submit="registrar" :validation-schema="schema" v-slot="{ errors }" class="form" >
        <div class="form-outline mb-4" style="width:100%;height:0;position:relative;">
        <div class="row">
          <div class="col">
            <label for="nome">Nome: </label>
            <vee-field name="nome" class="form-control" v-model="cadastro.nome" />
            <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="">E-mail:</label>          
            <vee-field type="text" name="email" class="form-control" v-model="cadastro.email" />
            <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>          
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="password">Senha:</label>          
            <vee-field type="password" name="password" class="form-control" v-model="cadastro.password"/>
            <span class="text-danger" v-text="errors.password" v-show="errors.password"></span>          
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="confirmar">Confirm:</label>          
            <vee-field type="password" name="confirmar" class="form-control" v-model="cadastro.confirmar"/>
            <span class="text-danger" v-text="errors.confirmar" v-show="errors.confirmar"></span>          
          </div>
        </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success" style="margin-right: 5px">Registrar</button>
          </div>
          <div class="col-12">
            <button type="button" class="btn btn-danger" @click="registerOut" style="margin-right: 5px">Sair</button>
          </div>
        </div>
      </vee-form>
    </div>
    <div class="col-md-9 col-lg-6 col-xl-5">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        class="img-fluid" alt="Sample image"
        style="margin-left: 450px; margin-top: 50px;">
    </div>
  </div>
</template>

<script>
import { Form, Field, defineRule} from 'vee-validate';


export default {
        components: {
            'vee-form': Form,
            'vee-field': Field
        },
        data(){
          defineRule("required", value => {
                if (!value || value.length === 0) {
                    return "Campo obrigatório"
                }
                return true;
            });
            defineRule("minLength", value=>{
              if(value.length < 6){
                return "mínimo 6 caracteres"
              }
              return true;
            });
            defineRule("confirmePassword", value =>{
            
                if(value !== this.cadastro.password){
                  return "Senha nao confere"
                  
                }
                return true
            });
          const schema = {
                nome: "required",
                email: "required",
                password: "required|minLength",
                confirmar: "required|minLength|confirmePassword"          
          }
          return{
              schema,
              cadastro: {
                nome: '',
                email: '',
                password: '',
                confirmar: ''
              },
              submitted: false,
              msg: null
          }
        },
        methods: {
          registrar(){
            this.$store.commit('autenticacaoModule/registrar', this.cadastro);     
            alert(`Usuário cadastrado com sucesso!`);
            this.$router.push('/login')
          },
          registerOut(){
            this.$router.push('/login')
          },
        },
        watch:{
          nome(newNome){
            localStorage.cadastro.nome = newNome
          }
        },
        computed: {
        
    }       
}
</script>

<style scoped>

form{
        color: black;
    }
.col-12{
  padding-top: 10px;
}
.form{
  padding: 15px;
}
.container {
  position: relative;
}
.child {
  border-radius: 8px;
  padding: 2%;
  position: absolute;
  height: 500px;
}
.col2{
  margin-left: -15px;
}
.row{
  padding: 5px;
}
</style>