<template>
  <section :class="blogSummary.container">
    <article :class="blogSummary.article" v-for="article in articleList" :key="article.id">
      <div :class="blogSummary.title">
        <h1 @click="articleDetail(article)">{{ article.title }}</h1>
        <div :class="blogSummary.dateTime">
          {{ article.dateTime }}
        </div>
      </div>
      <div :class="blogSummary.content">
        {{ article.blogSummary }}
      </div>
      <div :class="blogSummary.enter" @click="articleDetail(article)">阅读全文 &gt; </div>
    </article>
    <!-- 分页组件 -->
    <pagination :pageParams="pageParams"></pagination>
  </section>
</template>

<script>
  import vueEvent from './vueEvent.js'
  import Pagination from './Pagination.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      Pagination
    },
    props: {
      articleList: {
        type: Array,
        require: false,
        default: () => {
          return []
        }
      },
      pageParams: {
        type: Object,
        require: false,
        default: () => {
          return {}
        }
      },
    },
    data () {
      return { }
    },
    computed: {
      // ...mapState([
      //   'articleList'
      // ])
    },
    mounted () { }, 
    methods: {
      articleDetail (article) { }
    }
  }
</script>

<style lang="stylus" module="blogSummary">
  @import '../assets/css/variable.styl'
  @import '../assets/css/mixin.styl'

  .container
    float left
    width 75%
    padding 10px
    .article
      border 1px solid #ccc
      margin-bottom 10px
      padding $space-small
      & > *
        margin-bottom $space-middle
      .title
        display flex
        justify-content space-between
        h1
          font-size $font-size-large
          font-weight normal
          max-width 60%
          no-warp()
          &:hover
            cursor pointer
            // font-weight bold
            text-decoration: underline;
        .dateTime
          font-size $font-size-small
      .content
          font-size $font-size-small
      .enter
        display inline-block
        box-sizing content-box
        padding $space-small
        border 1px solid #ccc
        font-size $font-size-small
        &:hover
          cursor pointer
          font-weight bold
          background rgba(255,20,147,.1)
          color #555
          border-radius 4px
</style>