<template>
  <div id="Menu">
    <a-tree
      v-model="checkedKeys"
      :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
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
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        checkedKeys: ['0-0-0'],
        selectedKeys: [],
        treeData: [
          {
            title: '0-0',
            key: '0-0',
            children: [
              {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                  { 
                    title: '啊啊啊啊啊啊',
                    key: '0-0-0-0',
                    scopedSlots: { title: 'title' }
                  },
                  {
                    title: '0-0-0-1',
                    scopedSlots: { title: 'title' },
                    key: '0-0-0-1'
                  },
                  {
                    title: '0-0-0-2',
                    scopedSlots: { title: 'title' },
                    key: '0-0-0-2'
                  },
                ],
              },
              {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                  { title: '0-0-1-0', key: '0-0-1-0' },
                  { title: '0-0-1-1', key: '0-0-1-1' },
                  { title: '0-0-1-2', key: '0-0-1-2',
                    children: [
                      {
                        title: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                        scopedSlots: { title: 'title' },
                        key: '123'
                      }
                    ]
                  },
                ],
              },
              {
                title: '0-0-2',
                key: '0-0-2',
              },
            ],
          },
          {
            title: '0-1',
            key: '0-1',
            scopedSlots: { title: 'title' },
            children: [
              { title: '0-1-0-0', key: '0-1-0-0' },
              { title: '0-1-0-1', key: '0-1-0-1' },
              { title: '0-1-0-2', key: '0-1-0-2' },
            ],
          },
          {
            title: '0-2',
            key: '0-2',
          },
        ]
      }
    },
    watch: {
      checkedKeys(val) {
        console.log('onCheck', val);
      },
    },
    methods: {
      onExpand(expandedKeys) {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.expandedKeys = expandedKeys;
        this.autoExpandParent = false;
      },
      onCheck(checkedKeys) {
        console.log('onCheck', checkedKeys);
        this.checkedKeys = checkedKeys;
      },
      onSelect(selectedKeys, info) {
        console.log('onSelect', info);
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
    /deep/ .ant-tree li
      white-space normal
      .ant-tree-node-content-wrapper
        height inherit
    /deep/ .ant-tree-switcher.ant-tree-switcher-noop
      display none
</style>