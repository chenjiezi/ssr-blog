<template>
  <div id="Article">
    <div class="container">
      <a-row :gutter="[8,8]">
        <a-col :span="4">
          <div class="side">
            <Menu />
          </div>
        </a-col>
        <a-col :span="16">
          <div class="content">
            {{ content }}
          </div>
        </a-col>
        <a-col :span="4">
          <div class="anchor">
            <a-anchor>
              <a-anchor-link
                v-for="t of anchors"
                :key="t"
                :href="`#${t}`"
                :title="t"
              />
            </a-anchor>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue';
  export default {
    name: 'post',
    components: { Menu },
    async asyncData ({ $axios, route }) {
      const res =  await $axios.post('/api/article/detail', { title : route.query.title})
      const content = res?.data?.data?.content || ''
      const anchors = res?.data?.data?.anchors || []

      return  {
        content,
        anchors
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #Article
    margin-top 30px
    background-color #fff
    .container
      width 1200px
      min-height calc(100vh - 64px)
      margin 0 auto
      background-color #fff
      .content
        padding 12px
        background rgba(0,0,0,.01)
      .anchor
        padding-left 12px
        /deep/ .ant-affix .ant-anchor
          margin-top 50px
</style>