<template>
    <div class="cadastro">
        <Sidebar/>
        <div :style="{ 'margin-left': sidebarWidth }">
            <router-view/>
        </div>
        <h2 class="navbar navbar-expand-md fixed-top ">Lançamento de geração mensal</h2>

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
h2{         
        margin: 0 113px;
        padding: 0 150px;
    }

</style>