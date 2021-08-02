<template>
  <div class="container">
    <el-button
      size="small"
      type="primary"
      class="add-btn"
      @click="handleCreateOne">新增</el-button>
    <el-table
      :data="menuList"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      size="mini"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="title"
        label="索引">
      </el-table-column>
      <el-table-column
        prop="articleTitle"
        label="文章">
      </el-table-column>
      <el-table-column
        prop="hasContent"
        align="center"
        label="是否点击跳转"
        width="100">
        <template slot-scope="{ row }">
          <el-switch
            v-model="row.hasContent"
            @change="handleHasContent(row)"
            active-color="#13ce66"
            inactive-color="#ccc">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleCreate(scope.$index, scope.row)">新增</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="弹框"
      :visible.sync="isDialogVisible"
      width="40%"
      center>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="索引">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章">
          <el-autocomplete
            v-model="form.articleTitle"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入文章"
            @select="handleSelect"
            value-key="articleTitle"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="是否点击跳转">
          <el-switch v-model="form.hasContent"></el-switch>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="isDialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
  import { fetchMenuList, fetchMenu, createMenu, editMenu, deleteMenu } from '@/api/menu'
  import { fetchList } from '@/api/article'
  
  const formData = {
    id: undefined,
    articleId: undefined,
    articleTitle: '',
    title: '',
    hasContent: false,
    remark: ''
  }

  export default {
    name: 'TitleIndex',
    data () {
      return {
        form: formData,
        menuList: [],
        isDialogVisible: true
      }
    },
    mounted () {
      this.fetchMenuList()
      this.fetchArticleList()
    },
    methods: {
      // 提交表单
      onSubmit () {
        console.log('this.form:', JSON.stringify(this.form, null, 2))
      },
      handleCreateOne () {
        this.isDialogVisible = true
        console.log('新增一级索引')
      },
      handleCreate (index, row) {
        console.log('新增 - index, row:', index, row)
      },
      handleEdit (index, row) {
        console.log('编辑 - index, row:', index, row)
      },
      handleDelete (index, row) {
        console.log('删除 - index, row:', index, row)
      },
      handleHasContent ({ id, hasContent }) {
        editMenu({ id, hasContent }) // 更新数据 hasContent 字段
      },
      fetchMenuList () {
        return fetchMenuList().then(res => {
          this.menuList = res.data.menuList
        })
      },
      fetchArticleList (params) {
        return fetchList(params).then(res => {
          return res.data.data.map(({ id, title }) => ({ articleId: id, articleTitle: title }))
        })
      },
      // TODO: 
      querySearchAsync(queryString, cb) {
        this.fetchArticleList({ queryString }).then(data => {
          cb(data)
        })
      },
      handleSelect(item) {
        this.form = Object.assign(this.form, item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin: 20px;
    .add-btn {
      margin-bottom: 12px;
    }
  }
</style>