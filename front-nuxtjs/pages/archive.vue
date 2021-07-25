<template>
  <div id="Archive">
    <div class="container">
      <h1 class="article-w">全部文章（ALL：{{total}}）</h1>
      <template v-if="articleList.length > 0">
        <ul class="list">
          <li class="item" v-for="article of articleList" :key="article.id">
            <div class="title">
              <NuxtLink :to="'/post?id=' + article.id" >{{article.title}}</NuxtLink>
            </div>
            <div class="date">{{article.dateTime}}</div>
          </li>
        </ul>
        <!-- 分页 -->
        <div class="pagination">
          <a-pagination
            @change="onChange"
            :current="currentPage"
            :pageSize="pageSize"
            :total="total" />
        </div>
      </template>
      <template v-else>
        <a-empty />
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'archive',
    async asyncData ({ $axios, route }) {
      let pageSize = 10
      let res = await $axios.post('/api/article/list', { currentPage: parseInt(route.query.page), pageSize })
      let articleList = res.data.data.data || []
      let currentPage = res.data.data.currentPage || 1
      let total = res.data.data.total || -1
      
      return  {
        articleList,
        currentPage,
        pageSize,
        total
      }
    },
    methods: {
      onChange (page) {
        window.location.href = `/archive?page=${page}`
      }
    }
  }
</script>


<style lang="stylus" scoped>
  ul
    list-style none
  a
    display inline-block
    width 600px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    margin-right 100px
    color inherit

  #Archive
    background-color rgba(0,0,0,.02)
    .container
      width 1080px
      min-height calc(100vh - 64px)
      margin 0 auto
      padding 20px 10px
      background-color #fff
      .article-w
        font-size 35px
        margin-left 20px
        color #888
      .list
        .item
          display flex
          cursor pointer
          height 40px
          line-height 40px
          font-size 16px
          color #444
          transition all 0.3s
          &:hover
            background rgba(0,0,0,.05)
          .title
            width 600px
            margin-right 200px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            &:hover
              font-weight bold
    .pagination
      margin 40px 20px
</style>