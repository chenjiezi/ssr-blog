<template>
  <div id="Menu">
    <template v-if="treeData.length > 0">
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
      <div class="loading">
        <a-icon type="loading" />文章目录加载中
      </div>
    </template>
  </div>
</template>

<script>
  import { getMenuList } from '@/api/menu'
  import { setLocalData, getLocalData } from '@/util/utils'
  export default {
    name: 'Menu',
    data() {
      return {
        expandedKeys: getLocalData('expandedKeys') || [],
        selectedKeys: getLocalData('selectedKeys') || [],
        treeData: []
      }
    },
    created () {
      // 获取文章目录列表
      getMenuList().then(res => {
        this.treeData = res?.data?.menuList || []
      })
    },
    methods: {
      onExpand(expandedKeys) {
        setLocalData('expandedKeys', expandedKeys)
        this.expandedKeys = expandedKeys;
      },
      onSelect(selectedKeys, { node }) {
        // console.log('selectedKeys:', selectedKeys)
        console.log(' node.dataRef :',  node.dataRef )
        setLocalData('selectedKeys', selectedKeys)
        this.selectedKeys = selectedKeys;
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
    .loading
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