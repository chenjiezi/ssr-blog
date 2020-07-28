<template>
  <div :class="sideBar.container">
    <h1>TAGS</h1>
    <div :class="sideBar.tagList">
      <!-- TODO: 加"[]"就不会报错??? -->
      <div
        :class="{ [sideBar.tag]: true, [sideBar.active]: tag.active }"
        v-for="tag in tagList"
        :key="tag.id"
        @click="getArticle(tag)">
          {{ tag.title }} {{ tag.num | numType }}
      </div>
    </div>
  </div>
</template>

<script>
import vueEvent from './vueEvent.js'
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    tagList: {
      type: Array,
      require: false,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      prevTag: [],
    }
  },
  mounted () {
    this.getArticle(this.tagList[0])
  },
  computed: {
    ...mapState([
      'articleList'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_TAG_LIST',
      'FETCH_ARTICLE_LIST'
    ]),
    getArticle (tag) {
      if (tag.active) return false // 避免多次触发同个标签
      
      this.$emit('get-article', tag)
      this.highlight(tag, this.prevTag)
    },
    highlight (currTag, prevTag) {
      this.$set(currTag, 'active', true)
      this.$set(prevTag, 'active', false)
      this.prevTag = currTag
    }
  },
  filters: {
    numType (value) {
      return value >= 99 ? '(99+)' : `(${value})`
    }
  }
}
</script>

<style lang="stylus" module="sideBar">
  @import '../assets/css/variable.styl'
  .container
    float right
    width 20%
    padding $space-small
    h1
      border-bottom: 1px solid #ccc
      margin-bottom: $space-small
    .tagList
      padding $space-small
      .tag
        font-size $font-size-small
        margin-bottom $space-middle
        &:hover,
        &.active
          font-size $font-size-middle
          font-weight bold
          cursor pointer
</style>