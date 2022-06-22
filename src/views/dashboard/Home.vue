<template>
<div class="dashboard">
  <Sidebar/>
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view/>
  </div>
  
    <h3>Dashboard</h3>

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