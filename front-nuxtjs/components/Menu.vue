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

  function handleData (data = [], scopedSlots = { title: 'title' }) {
    data.forEach(item => {
      if (item.hasContent) {
        item.scopedSlots = scopedSlots
      }
      if (item?.children?.length > 0) {
        handleData(item.children)
      }
    })
  }

  export default {
    name: 'Menu',
    data() {
      return {
        isLoading: true,
        expandedKeys: [],
        selectedKeys: [],
        treeData: []
      }
    },
    mounted () {
      // // 获取文章目录列表
      // getMenuList()
      // .then(res => {
      //   let data = res?.data?.menuList || []
      //   handleData(data)
      //   this.treeData = data
        
      //   // 初始化目录当前节点高亮
      //   const { params } = this.$router.history.current
      //   this.selectedKeys = params.id ? [params.id] : []

      //   // 高亮的子节点的父节点如果没展开，会通过计算展开
      //   let p = TreeDataFindParents(this.treeData, params.id)
      //   if (p.length > 0) {
      //     p = p.concat(getLocalData('expandedKeys'), params.id)
      //     p = [...new Set(p)] // 去重
      //     this.expandedKeys = p
      //     // 更新本地数据
      //     setLocalData('expandedKeys', p)
      //   }
      // })
      // .finally(() => {
      //   this.isLoading = false
      // })
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
          this.$router.push('/article/' + dataRef.key).catch(err => err)
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