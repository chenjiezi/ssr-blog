<template>
  <div id="note">
    <div class="container">
      <a-row :gutter="[8,8]">
        <a-col :span="4">
          <div class="side">
            <Menu />
          </div>
        </a-col>
        <a-col :span="20">
          <h1>笔记总结</h1>
          <div class="content" v-html="contentHtml"></div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue';
  function noteContentRender (data) {

    const t1 = (data) => {
      let t1Str = ''
      
      data.forEach(item => {
        let itemChildStr = ''

        if (item?.children?.length > 0) {
          itemChildStr += t2(item.children)
        }

        t1Str += `
          <details>
            <summary>${ item.title }</summary>
            ${ itemChildStr }
          </details>
        `
      })

      return t1Str
    }

    const t2 = (childs) => {
      let childHtmlStr = ''

      childs.forEach(child => {
        let ccHtmlStr = ''

        if (child?.children?.length > 0) {
          ccHtmlStr += t2(child.children)
        }

        childHtmlStr += `
          <li>
            ${child.title}
            ${ ccHtmlStr }
          </li>
        `
      })
      
      return `
        <ul>
          ${ childHtmlStr }
        </ul>
      `
    }

    return t1(data)
  }
  export default {
    components: { Menu },
    name: 'note',
    async asyncData ({ $axios }) {
      const res =  await $axios.get('/api/menu/list')
      const menuList = res.data.data.data || []
      const contentHtml = menuList.length > 0 ? noteContentRender(menuList) : ''
      return  {
        contentHtml
      }
    },
    mounted () {
      document.title = '笔记总结'
    }
  }
</script>

<style lang="stylus" scoped>
  #note
    background-color #fff
    .container
      width 1200px
      min-height calc(100vh - 64px)
      margin 0 auto
      background-color #fff
      .content
        padding 12px
        font-size: 16px;
        color: #333;
        background: rgba(0,0,0,.02);
</style>