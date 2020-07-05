<template>
  <div :class="footer.footer">
    <div :class="footer.container">
      <span>©2020 delueshushu</span>
      <span>Powered by Vue &#38; Koa</span>
      <span>粤ICP备123456789</span>
      <div :class="footer.link">
        <b>友情链接：</b>
        <template v-if="links.length > 0">
          <div :class="footer.linkContainer">
            <template v-for="(link, index) in links">
              <span v-if="index !== links.length - 1" :key="link.id">
                <a :href="link.url">{{ link.name }}</a> |
              </span>
              <span v-else :key="link.id">
                <a :href="link.url">{{ link.name }}</a>
              </span>
            </template>
          </div>
        </template>
        <template v-else>-</template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // [{id, url, name}...]
      links : []
    }
  }
}
</script>

<style lang="stylus" module="footer">
@import '../assets/css/variable.styl'

.footer
  .container
    max-width 1080px
    min-width 320px
    padding $space-small 0 ($space-large / 1.5) $space-small
    border-top 1px solid #ccc
    margin 0 auto
    text-align left
    & > *
      padding-right $space-middle
    .link
      padding-top $space-middle
      .linkContainer
        & > *
          display inline-block
          padding $space-small
          padding-left 0
</style>