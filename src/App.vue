<template>

  <router-view/>

</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*, *::before, *::after{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  background-color: var(--bs-gray-200);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
