<template>
  <div class="container">
    <blog-summary :articleList="articleList" :pageParams="pageParams"></blog-summary>
    <side-bar :tagList="tagList"></side-bar>
  </div>
</template>

<script>
import BlogSummary from '../components/BlogSummary'
import SideBar from '../components/SideBar'

export default {
  name: 'Home',
  components: {
    BlogSummary,
    SideBar
  },
  data () {
    return {
      articleList: [],
      tagList: [],
    }
  },
  created () {
    // 1. 在 home 页面，获取 tagList 传入 SideBar 组件
    // 2. sidebar 组件向 home 页面传递当前 tag，通过 tag 获取对应 articleList，将 articleList 传入 BlogSummary 组件进行渲染
    getTagsList().then(res => {
      this.tagList = res.data
    })
  },
  mounted () {
    this.$on('get-article', (tag) => {
      getArticleList(tag).then(res => {
        this.articleList = res.data.articleList
        this.pageParams = res.data.pageParams
      })
    })
  },
}
</script>

<style lang="stylus">
// TODO: 在每个组件里，引入 variable.styl 很麻烦。找个全局引入 variable.styl 的方案
@import '../assets/css/variable.styl'
.container
  overflow hidden
  max-width 1080px
  min-width 320px
  margin 0 auto
  padding $space-middle
  padding-right $space-middle-b
</style>