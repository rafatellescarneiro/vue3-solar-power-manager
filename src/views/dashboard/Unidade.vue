<template>
  <div class="unidade">
    <Sidebar/>
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view/>
    </div>
    <h1>Unidades</h1>

  </div>
  <div class="row">
    <div class="card mb-12">
          <h5 class="consumo card-text">Lista de unidades</h5>
          <hr>
          <div class="card-body text-dark"> </div>
      </div> 
  </div>
  <div class="footer">
    <button class="btn btn-warning">Nova unidade</button>
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

<style>

</style>