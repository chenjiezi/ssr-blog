<template>
  <div id="Menu">
    <template v-if="!isLoading">
      <template v-if="treeData.length">
        <a-tree
          :expanded-keys="expandedKeys"
          :selected-keys="selectedKeys"
          :tree-data="treeData"
          @expand="onExpand"
          @select="onSelect"
        >
        <a-icon slot="switcherIcon" type="down" />
        <template slot="title" slot-scope="{ title }">
          <span class="menu-title">
            <div>{{title}}</div>
            <a-icon class="menu-icon" type="link" />
          </span>
        </template>
        </a-tree>
      </template>
      <template v-else>
        <div class="tips">无文章目录~</div>
      </template>
    </template>
    <template v-else>
      <div class="tips">
        <a-icon type="loading" /> 文章目录加载中
      </div>
    </template>
  </div>
</template>

<script>
  import { TreeDataFindParents, setLocalData, getLocalData } from '@/util/utils'

  function handleData (data = []) {

    const t =(data) => {
      data.forEach(item => {
        if (item.hasContent) {
          item.scopedSlots = { title: 'title' }
        }
        if (item?.children?.length > 0) {
          t(item.children)
        }
      })
    }

    return data
  }

  export default {
    name: 'Menu',
    data() {
      return {
        isLoading: true,
        expandedKeys: [],
        selectedKeys: [],
        treeData: [],
      }
    },
    beforeMount () {
      // 获取文章目录列表
      this.$axios.get('/api/menu/list').then(res => {
        let data = res?.data?.data?.data || []
        this.treeData = handleData(data)
        
        // TODO:初始化目录当前节点高亮
        const { query } = this.$route
        this.selectedKeys = query.title ? [query.title] : []

        // 高亮的子节点的父节点如果没展开，会通过计算展开
        let p = TreeDataFindParents(this.treeData, query.title)
        if (p.length > 0) {
          p = p.concat(getLocalData('expandedKeys'), query.title)
          this.expandedKeys = [...new Set(p)] // 去重
          setLocalData('expandedKeys', p) // 更新本地数据
        } else {
          this.expandedKeys = getLocalData('expandedKeys') || []
        }
      })
      .finally(() => {
        this.isLoading = false
      })
    },
    methods: {
      onExpand(expandedKeys) {
        setLocalData('expandedKeys', expandedKeys)
        this.expandedKeys = expandedKeys;
      },
      onSelect(selectedKeys, { node }) {
        this.selectedKeys = selectedKeys;

        const { dataRef } = node

        // 重定向路由
        if (dataRef.hasContent) {
          if (this.$route.query.id !== dataRef.articleId) {
            window.location.href = '/post?id=' + dataRef.articleId
          }
        }
        
        // 点击父节点展开/折叠
        let index = this.expandedKeys.indexOf(dataRef.title)
        if (dataRef?.children?.length > 0) {
          if (index === -1) {
            this.expandedKeys.push(dataRef.title)
            setLocalData('expandedKeys', this.expandedKeys)
          }
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  #Menu
    .menu-title
      display flex
      align-items center
    .menu-icon
      margin-left 6px
    .tips
      font-size 12px
      color #000
      margin 20px
    /deep/ .ant-tree li
      white-space normal
      .ant-tree-node-content-wrapper
        height inherit
    /deep/ .ant-tree-switcher.ant-tree-switcher-noop
      display none
</style>