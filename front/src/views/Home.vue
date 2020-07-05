<template>
  <div :class="home.home">
    <div :class="home.container">
      <div class="articleContainer"></div>
      <div class="articleContainer"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="stylus" module="home">
@import '../assets/css/variable.styl'
.home
  .container
    max-width 1080px
    min-width 320px
    margin 0 auto
    padding $space-middle
    background rgba(0,0,0,.04)
</style>