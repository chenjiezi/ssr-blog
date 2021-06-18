<template>
  <div id="Note">
    <div class="container">
      <a-row :gutter="[8,8]">
        <a-col :span="4">
          <div class="side">
            <Menu />
          </div>
        </a-col>
        <a-col :span="20">
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
      </a-row>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue';
  export default {
    components: { Menu },
    name: 'note',
  }
</script>

<style lang="stylus" scoped>
  #Note
    background-color #fff
    .container
      width 1200px
      min-height calc(100vh - 64px)
      margin 0 auto
      background-color #fff
      .content
        padding 12px
        background rgba(0,0,0,.05)
</style>