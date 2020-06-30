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
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="stylus">
html
  font-size 16px
body
  margin 0
#app
  font-family "Open Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Jhenghei", sans-serif
  -webkit-font-smoothing antialiased 
  -moz-osx-font-smoothing grayscale
</style>
