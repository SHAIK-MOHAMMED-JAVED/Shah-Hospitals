<template>
  <the-header></the-header>
  <navbar-component></navbar-component>
  <router-view></router-view>
  <the-footer></the-footer>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import NavbarComponent from './components/navbar/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    TheHeader,
    NavbarComponent,
    TheFooter
  },
  created() {
    this.$store.dispatch('tryLogin');
  }
}
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
/* body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} */
/* body{
  height: 100%;

}
#content {
  min-height: 100%;
  margin: 0 auto 30px;
}
.footer {
  height: 20px;
} */
</style>
