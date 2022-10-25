<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <MainHeader />
  <router-view />
  <MainFooter />
</template>

<script>
// import MainFooterVue from './components/MainFooter.vue';
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
}
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
