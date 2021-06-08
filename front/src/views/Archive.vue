<template>
  <div id="Archive">
    <div class="container">
      <h1 class="article-w">全部文章（ALL：{{total}}）</h1>
      <template v-if="articleList.length > 0">
        <ul class="list">
          <li class="item" v-for="article of articleList" :key="article.id">
            <div class="title">
              <router-link :to="'/article/' + article.path" >{{article.title}}</router-link>
            </div>
            <div class="date">{{article.dateTime}}</div>
          </li>
        </ul>
        <!-- 分页 -->
        <div class="pagination">
          <a-pagination
            @change="onChange"
            :current="curPage"
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
  import { getArticleList } from '@/api/article'; 

  export default {
    name: 'Archive',
    data () {
      return {
        articleList: [],
        curPage: 1,
        pageSize: 10,
        total: -1
      }
    },
    created () {
      this.getData()
    },
    methods: {
      onChange (page) {
        this.curPage = page
        this.getData()
      },
      getData () {
        getArticleList({curPage:this.curPage}).then(res => {
          this.articleList = res.data.articleList
          this.total = res.data.total
        })  
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
      min-height calc(100vh - 80px)
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