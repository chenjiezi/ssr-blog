<template>
  <div id="app">
    <a-layout>
      
      <a-layout-header>
        <Header />
      </a-layout-header>

      <!-- main -->
      <a-layout-content>
        <Nuxt />
      </a-layout-content>
      
      <a-layout-footer>
        <Footer />
      </a-layout-footer>

    </a-layout>
  </div>
</template>

<script>
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="stylus">
#app
  font-family -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  .ant-layout,
  .ant-layout-header,
  .ant-layout-footer
    background-color #fff
    padding 0
</style>
