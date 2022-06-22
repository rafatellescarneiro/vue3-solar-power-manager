<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
  <h1>
        <span v-if="collapsed">
           
        </span>
        <span v-else>
            <img src="../assets/logo2.png"
                   alt="logo"> 
            </span>
    </h1>

    <SidebarLink to="/" icon="fa fa-chart-pie"> Dashboard </SidebarLink>
    <SidebarLink to="/unidade" icon="fa fa-file-waveform">Unidade consumidora</SidebarLink>
    <SidebarLink to="/cadastro" icon="fa fa-gear" >Cadastro de energia gerada</SidebarLink>


    <span
        class="collapse-icon"
        :class="{ 'rotate-180' : collapsed }"
        @click="toggleSidebar"
        >
        <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from './SidebarLinks.vue'
import { collapsed, toggleSidebar, sidebarWidth } from '../store/index.js'

export default {
    props:{},
    components: { SidebarLink },
    setup(){
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<style>
:root{
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #37b672;
    --sidebar-item-active: #285e46;
}
</style>

<style scoped>
.sidebar{
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.5em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>