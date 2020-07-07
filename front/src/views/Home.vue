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
// TODO: 为什么还要在引入 variable 样式文件
@import '../assets/css/variable.styl'
.container
  overflow hidden
  max-width 1080px
  min-width 320px
  margin 0 auto
  padding $space-middle
  background rgba(0,0,0,.04)
</style>