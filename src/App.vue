<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import appHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 1rem;
  color: rgb(158, 68, 209);
  position: relative;
}

body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: rgb(61, 57, 57);
}
</style>
