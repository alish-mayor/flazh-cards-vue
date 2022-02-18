<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-form></app-form>
  </div>
</template>

<script>
import appHeader from './components/AppHeader.vue'
import appForm from './components/AppForm.vue'
import appContent from './components/AppContent.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    appForm,
    appContent
  }
}
</script>

<style>
:root{
  --primary: #ad089d;
  --secondary: #091832;
  --light: #FFFFFF;
  --background: #e9e9e9;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary);
  position: relative;
}

body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: var(--background);
}

.btn {
        background: transparent;
        border: 1px solid var(--primary);
        font-family: inherit;
        font-size: 16px;
        padding: 0.5rem;
        border-radius: 5px;
        color: var(--light);
        cursor: pointer;
    }
</style>
