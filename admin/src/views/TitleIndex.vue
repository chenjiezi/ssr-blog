
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
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
         width="180">
      </el-table-column>
      <el-table-column
        prop="articleTitle"
        label="文章">
      </el-table-column>
      <el-table-column
        prop="hasContent"
        label="是否展示">
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
  </div>
</template>

<script>
  import { fecthMenuList } from '@/api/menu'
  
  export default {
    name: 'TitleIndex',
    data () {
      return {
        menuList: []
      }
    },
    mounted () {
      fecthMenuList().then(res => {
        this.menuList = res.data.menuList
      })
    },
    methods: {
      handleCreateOne () {
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