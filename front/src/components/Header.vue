<template>
  <div :class="header.header">
    <div :class="header.container">
      <div :class="header.logo">
        <router-link to="/">Home</router-link>
      </div>
      <div :class="header.navBar">
        <router-link to="/archives">Archives</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" module="header">
@import '../assets/css/variable.styl'
.header
  position fixed
  top 0
  left 0
  right 0
  height 65px
  border-bottom 1px solid #ccc
  font-size $font-size-middle
  .container
    max-width 1080px
    min-width 320px
    height 100%
    margin 0 auto
    display flex
    justify-content space-between
    align-items center
    background rgba(0,0,0,.05)
    padding 0 $space-middle
    .navBar
      & > *
        margin-left $space-middle
</style>