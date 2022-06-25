<template>
<div class="dashboard">
    <h2 class="navbar navbar-expand-md fixed-top">Dashboard</h2>
    <div class="cards">
      <div class="row">
        <div class="card mb-3 green" style="max-width: 18rem;">
          <h5 class="card-text">Total unidades</h5>
          <div class="card-body text-dark">
            <h5 class="card-text"><strong>60</strong></h5>
          </div>
        </div>
        <div class="card mb-3 green" style="max-width: 18rem;">
          <h5 class="card-text">Unidades Ativas</h5>
          <div class="card-body text-dark">
            <h5 class="card-text"><strong>16</strong></h5>
          </div>
        </div>
        <div class="card mb-3 green" style="max-width: 18rem;">
          <h5 class="card-text">Unidades Inativas</h5>
          <div class="card-body text-dark">
            <h5 class="card-text"><strong>30</strong></h5>
          </div>
        </div>
        <div class="card mb-3 green" style="max-width: 18rem;">
          <h5 class="card-text">Média de energia</h5>
          <div class="card-body text-dark">
            <h5 class="card-text"><strong>64 kw</strong></h5>
          </div>
        </div>
      </div>
      <div class="canvascard mb-12">
          <h5 class="consumo card-text">Consumo mensal</h5>
          <hr>
          <div class="card-body text-dark"> </div>
      </div> 
    </div>
  <Sidebar/>
    <div :style="{ 'margin-left': sidebarWidth }">
    <router-view/>
    </div>
</div>
</template>

<script>

import Sidebar from '../../components/Sidebar'
import { sidebarWidth } from '../../router/index.js' 

export default {
  components: { Sidebar },
  setup(){
    return { sidebarWidth }
  }
}
</script>

<style scoped>
.dashboard{
  display: contents;
  font-family: "Poppins", sans-serif;
  background-color: white;
  
}
.cards{
  background-color: #fafafa6e;
  margin-left: 105px;
}
.row{
  display: flex;
  align-items: center;
}

.card{
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 20px;
  margin: 15px;
  width: 400px;
  height: auto;
  transition: all 0.3s ease-out;
}
.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
 
.card p {
  color: #a3a5ae;
  font-size: 16px;
}

.canvascard{
  text-align: left;
  width: auto;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 20px;
  margin: 15px;
  height: auto;
  transition: all 0.3s ease-out;
}

.green {
  border-right: 3px solid #3bb54a;
}
 
h2{ 
        margin: 0 113px;
        padding: 0 150px;
    }

h5.consumo{
  margin-left: 45px;
}

</style>