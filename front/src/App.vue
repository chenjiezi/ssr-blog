<template>
  <div id="app">
    <a-layout>
      
      <a-layout-header>
        <Header />
      </a-layout-header>

      <!-- main -->
      <a-layout-content>
        <router-view />
      </a-layout-content>
      
      <a-layout-footer>
        <Footer />
      </a-layout-footer>

    </a-layout>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
    };
  },
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
