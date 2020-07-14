<template>
  <div class="container">
    <blog-summary></blog-summary>
    <side-bar></side-bar>
  </div>
</template>

<script>
import BlogSummary from '../components/BlogSummary'
import SideBar from '../components/SideBar'
export default {
  name: 'Home',
  components: {
    BlogSummary,
    SideBar
  }
}
</script>

<style lang="stylus">
// TODO: 在每个组件里，引入 variable.styl 很麻烦。找个全局引入 variable.styl 的方案
@import '../assets/css/variable.styl'
.container
  overflow hidden
  max-width 1080px
  min-width 320px
  margin 0 auto
  padding $space-middle
  padding-right $space-middle-b
</style>