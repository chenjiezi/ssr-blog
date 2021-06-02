<template>
  <div id="Header">
    <div class="container">
      <a-row :gutter="[16,16]">
        <a-col :span="12">
          <div class="nav-bar">
            <a-menu v-model="curMenu" mode="horizontal">
              <a-menu-item @click="$router.replace('/').catch(err => err)" key="home">
                <a-icon type="home" />
                首页
              </a-menu-item>
              <a-menu-item @click="$router.replace('/Archive').catch(err => err)" key="archive">
                <a-icon type="more" />
                归档
              </a-menu-item>
            </a-menu>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="right-bar"></div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      curMenu: ['home'],
    }
  },
  beforeCreate() {
    // 监听顶栏高亮状态变化
    this.$root.$on('nav', (data) => {
      this.curMenu = [data]
    })
  },
  computed: {

  }
}
</script>

<style lang="stylus" scoped>
  #Header
    .container
      width 1080px
      margin 0 auto
    .ant-menu-horizontal
      border-bottom none
    .ant-menu-item
      height 64px
      line-height 64px
</style>