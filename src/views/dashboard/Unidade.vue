<template>
  <div class="unidade">
    <Sidebar/>
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view/>
    </div>
    <h2 class="navbar navbar-expand-md fixed-top">Unidades</h2>

  </div>
  <div class="container">
    <div class="card mb-12 form-group row">
          <h5 class="consumo card-text">Lista de unidades</h5>
          <hr>
          <div class="text-center" v-if="lista.length === 0">
           <strong>Não há listas cadastradas</strong> 
          </div>
          <table class="table" v-else>
            <thead>
              <tr>
                <th>ID</th>
                <th>Apelido</th>
                <th>Marca</th>
                <th>Modelo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="novaUni in lista" :key="novaUni.id">
                <td>{{ novaUni.nickname }}</td>
                <td>{{ novaUni.marca }}</td>
                <td>{{ novaUni.model }}</td>
              </tr>
            </tbody>
          </table>
          <div class="footer">
              <router-link type="button" class="btn btn-warning" to="/novaUnidade" icon="fa fa-chart-pie">Nova unidade</router-link>
          </div>
      </div>       
  </div>
</template>


<script>

import Sidebar from '../../components/Sidebar'
import { sidebarWidth } from '../../router/index.js' 

export default {
  components: { Sidebar },
  data(){
    return{
      lista: [],
      novaUni: {
        nickname:'',
        marca:'',
        model:''
      }

    }
  },
  setup(){
    return { 
      sidebarWidth
      }
  }
}

</script>

<style scoped>
  h2{ 
        margin: 0 113px;
        padding: 0 150px;
    }
  h5{
   text-align: left; 
  }
  .form-group.row{
      width: 850px;
      border-radius: 8px;
      padding-bottom: 20px;
      margin-left: 80px;
  }
  .btn{
    border-radius: 8px;
  }

  .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        background-color: var(--bs-gray-200);
    }
</style>