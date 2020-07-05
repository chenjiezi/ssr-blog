<template>
  <div id="app">
    <my-header/>
    <router-view/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import './assets/css/index.styl'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="stylus">
</style>
