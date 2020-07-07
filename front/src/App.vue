<template>
  <div id="app">
    <my-header/>
    <div :class="app.container">
      <!-- 滚动条的宽度导致布局错位，margin-right:-17px修复布局的错位 -->
      <div style="margin-right: -17px;">
        <router-view/>
        <my-footer/>
      </div>
    </div>
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

<style module="app" lang="stylus">
.container
  height calc(100vh - 65px)
  overflow-y scroll
  overflow-x hidden
  margin-top 65px
</style>
