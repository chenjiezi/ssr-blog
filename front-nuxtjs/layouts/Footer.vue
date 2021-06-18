<template>
<div id="footer">
  <div class="container">
    <a-row>
      <a-col :span="8">
        <dl>
          <dt>帮助</dt>
          <dd><a href="https://github.com/chenjiezi/ssr-blog" target="_blank">源码地址</a></dd>
          <dd><a href="https://github.com/chenjiezi/ssr-blog/issues" target="_blank">意见反馈</a></dd>
          <dd><a href="https://github.com/chenjiezi/ssr-blog/issues" target="_blank">常见问题</a></dd>
          <dd><a href="https://github.com/chenjiezi/ssr-blog/commits/master" target="_blank">更新日志</a></dd>
        </dl>
      </a-col>
      <a-col :span="8">
        <dl>
          <dt>技术栈</dt>
          <dd><a href="https://cn.vuejs.org/" target="_blank">Vue</a></dd>
          <dd><a href="https://koa.bootcss.com/" target="_blank">Koa</a></dd>
          <dd><a href="https://www.antdv.com/docs/vue/introduce-cn/" target="_blank">Ant Design</a></dd>
        </dl>
      </a-col>
      <a-col :span="8">
        <dl>
          <dt>其他平台</dt>
          <dd><a href="https://github.com/chenjiezi" target="_blank">Github</a></dd>
          <!-- <dd><a href="https://juejin.cn/user/1820446985294142" target="_blank">掘金</a></dd>
          <dd><a href="https://segmentfault.com/u/icare" target="_blank">SegmentFault</a></dd> -->
        </dl>
      </a-col>
    </a-row>
    <a-divider>End</a-divider>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="stylus" scoped>
  a
    color inherit
  dt
    font-size 16px
    margin-bottom 20px
  dd
    transition color 0.5s
    a:hover
      cursor pointer
      color #5fb7b7

  #footer
    background #2F4F4F
    color #fff
    .container
      overflow hidden
      width 1080px
      min-height 300px
      margin 0 auto
      padding-top 40px
      /deep/ .ant-divider-inner-text
        color #fff
</style>