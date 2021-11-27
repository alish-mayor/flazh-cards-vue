<template>
  <div id="app">
    <app-header></app-header>
    <app-form></app-form>
  </div>
</template>

<script>
import appHeader from './components/AppHeader.vue'
import appForm from './components/AppForm.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    appForm,
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

.btn {
        background: transparent;
        border: 1px solid rgb(158, 68, 209);
        font-family: inherit;
        font-size: 16px;
        padding: 0.5rem;
        border-radius: 5px;
        color: aliceblue;
        cursor: pointer;
    }
</style>
