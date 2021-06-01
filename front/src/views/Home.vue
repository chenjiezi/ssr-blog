<template>
  <div id="Home">
    <div class="container">
      <h1 class="title">chenJz's Blog</h1>
      <p>👨‍💻 Web 前端攻城狮</p>
      <p>✍️ 记录技术成长历程</p>
      <div class="entry">
        <a-button
          @click="go('Note')"
          class="entry-btn"
          shape="round"
          size="large"
          type="primary">
            快速浏览
        </a-button>
        <a-button
          @click="go('Archive')"
          class="entry-btn"
          shape="round"
          size="large"
          type="primary"
          ghost>
            进入博客
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {

      }
    },
    methods: {
      go (path) {
        this.$router.replace(path)
        this.$root.$emit('menu', path.toLowerCase())
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #Home 
    .container
      height calc(100vh - 64px)
      padding-top 200px
      font-size 16px
      background #fff
      & > *
        text-align center
      .title
        font-size 48px
      .entry
        .entry-btn
          margin 20px
</style>