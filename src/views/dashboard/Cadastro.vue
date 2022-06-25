<template>
    <div class="cadastro">
        <Sidebar/>
        <div :style="{ 'margin-left': sidebarWidth }">
            <router-view/>
        </div>
        <h2 class="navbar navbar-expand-md fixed-top ">
          Lançamento de geração mensal
        </h2>
      <div class="container">
        <vee-form @submit="save" :validation-schema="schema" v-slot="{ errors }">
        <div class="form-group row">
          <div class="form-group">
            <label for="geradora" class="col form-check-inline"><strong>Unidade geradora:</strong></label>
            <div class="col-sm-6">
                <vee-field as="select" 
                name="geradora" 
                class="form-control" 
                v-model="lancamento.geradora" 
                placeholder="Selecione a unidade geradora">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </vee-field>
                <span class="text-danger form-check-inline" v-text="errors.geradora" v-show="errors.geradora"></span>
            </div>
          </div>
          <div class="form-group">
            <label for="date" class="col form-check-inline"><strong>Mês/ano</strong></label>
            <div class="col-sm-6">
                <vee-field type="month" name="date" class="form-control" v-model="lancamento.date" />
                <span class="text-danger form-check-inline" v-text="errors.date" v-show="errors.date"></span>
            </div>
          </div>
          <div class="form-group">
            <label for="totalGerado" class="col form-check-inline"><strong>Total kw gerado</strong></label>
            <div class="col-sm-6">
                <vee-field name="totalGerado" class="form-control" v-model="lancamento.totalGerado" />
                <span class="text-danger form-check-inline" v-text="errors.totalGerado" v-show="errors.totalGerado"></span>
            </div>
          </div>
          <div class="btn">
            <button type="submit" class="btn btn-success" style="margin-right: 5px">Save</button>          </div>
        </div>
        </vee-form>
      </div>
    </div>
</template>

<script>

import Sidebar from '../../components/Sidebar'
import { sidebarWidth } from '../../router/index.js'
import { Form, Field, defineRule } from 'vee-validate'; 


export default {
  data(){
    defineRule("required", value => {
      if (!value || value.length === 0) {
          return "Campo obrigatório"
      }
      return true;
      });
    const schema = {
      geradora: "required",
      date: "required",
      totalGerado: "required"
        } 
        return{
          schema,
          lancamento: {
            geradora: '',
            date: '',
            totalGerado: ''
          }
        }

  },
  components: { 
    Sidebar,
    'vee-form': Form,
    'vee-field': Field
   },
  setup(){
    return { sidebarWidth }
  }
}
</script>


<style scoped>
h2{         
        margin: 0 113px;
        padding: 0 150px;
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .form-group.row{
        width: 850px;
        border-radius: 8px;
        padding-bottom: 20px;
        margin-left: 80px;
    }
    .form-group{
        padding: 8px 40px 0;
        text-align: left;
        background-color: #fafafa;
    }

</style>