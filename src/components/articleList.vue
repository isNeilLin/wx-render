<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%;margin:16px 16px;">
    <el-table-column
      label="标题"
      width="240"
      align="center"
      >
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="简介"
      align="center"
      >
      <template scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.profile }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180" align="center">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          title: '标题1',
          profile: '暂无简介',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容'
        }, {
          title: '标题2',
          profile: '暂无简介',
          content: '这是内容'
        }, {
          title: '标题3',
          profile: '暂无简介',
          content: '这是内容'
        }, {
          title: '标题4',
          profile: '暂无简介',
          content: '这是内容'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$router.push({
            path: `/article/update/:${index}`
        })
      },
      handleDelete(index, row) {
        this.tableData.splice(index,1)
      }
    }
  }
</script>
