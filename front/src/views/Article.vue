<template>
  <div id="Article">
    <div class="container">
      <a-row :gutter="[8,8]">
        <a-col :span="5">
          <div class="side">
            <Menu />
          </div>
        </a-col>
        <a-col :span="15">
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vitae quos, modi facilis natus quae
               at magni earum hic quibusdam, debitis fuga accusamus veritatis tempore voluptate, eaque placeat repudiandae rem!
            </p>
          </div>
        </a-col>
        <a-col :span="4">
          <div class="anchor">
            <a-anchor :target-offset="targetOffset">
              <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
              <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
              <a-anchor-link href="#API" title="API">
                <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
                <a-anchor-link href="#Link-Props" title="Link Props" />
              </a-anchor-link>
            </a-anchor>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue';
  export default {
  components: { Menu },
    name: 'Article',
    data() {
      return {
        targetOffset: undefined,
      };
    },
    mounted() {
      // 更新顶栏状态
      this.$root.$emit('nav', 'article')
      
      this.targetOffset = window.innerHeight / 2;
    },
  }
</script>

<style lang="stylus" scoped>
  #Article
    margin-top 30px
    background-color #fff
    .container
      width 1200px
      min-height calc(100vh - 64px)
      margin 0 auto
      background-color #fff
      .content
        padding 12px
        background rgba(0,0,0,.01)
      .anchor
        padding-left 12px
        /deep/ .ant-affix .ant-anchor
          margin-top 50px
</style>