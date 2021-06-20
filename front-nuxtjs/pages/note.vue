<template>
  <div id="note">
    <div class="container">
      <a-row :gutter="[8,8]">
        <a-col :span="4">
          <div class="side">
            <Menu />
          </div>
        </a-col>
        <a-col :span="20">
          <div class="content">
            {{ content }}
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue';
  export default {
    components: { Menu },
    name: 'note',
    async asyncData ({ $axios }) {
      const res =  await $axios.post('/api/article-detail', { title : 'note'})
      const content = res?.data?.data?.content || ''

      return  {
        content
      }
    },
  }
</script>

<style lang="stylus" scoped>
  #note
    background-color #fff
    .container
      width 1200px
      min-height calc(100vh - 64px)
      margin 0 auto
      background-color #fff
      .content
        padding 12px
        background rgba(0,0,0,.05)
</style>