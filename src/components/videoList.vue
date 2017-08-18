<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%;margin:16px 16px;">
    <el-table-column
      label="名称"
      width="240"
      align="center"
      >
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="试看"
      align="center"
      >
      <template scope="scope">
          <div slot="reference" class="name-wrapper">
            <video :src="scope.row.src" controls>{{ scope.row.title }}</video>
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
          src: 'test.mp4',
          album: '专辑1',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容'
        }, {
          title: '标题2',
          src: 'test.mp4',
          album: '专辑1',
          content: '这是内容'
        }, {
          title: '标题3',
          src: 'test.mp4',
          album: '专辑1',
          content: '这是内容'
        }, {
          title: '标题4',
          src: 'test.mp4',
          album: '专辑1',
          content: '这是内容'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$router.push({
            path: `/video/update/:${index}`
        })
      },
      handleDelete(index, row) {
        this.tableData.splice(index,1)
      }
    }
  }
</script>
<style>
    video
        {
        width: 100%;
        -webkit-transition:all 0.5s linear;
        -moz-transition:all 0.5s linear;
        -o-transition:all 0.5s linear;
        transition:all 0.5s linear;
        -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,.5);
        -webkit-box-shadow:  2px 2px 4px 0px rgba(0,0,0,.5);
        box-shadow: 2px 2px 4px 0px rgba(0,0,0,.5);
        -moz-border-radius:7px 7px 7px 7px ;
        -webkit-border-radius:7px 7px 7px 7px ;
        border-radius:7px 7px 7px 7px ;
        }
</style>

