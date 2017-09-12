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
      label="内容简介"
      align="center"
      >
      <template scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.content }}</el-tag>
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
  import axios from 'axios'
  export default {
    created(){
      axios.get(`${this.ip}/article`).then(res=>{
        let data = res.data;
        if(data.code===0){
          this.tableData = data.data
        }else{
          this.$alert(data.msg||JSON.stringify(data.stack))
        }
      }).catch(e=>{
        this.$alert(e.message);
      })
    },
    data() {
      return {
        tableData: null
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(row)
        this.$router.push({
            path: `/article/update/:${row.id}`
        })
      },
      handleDelete(index, row) {
        axios.post(`${this.ip}/article/del`,{
          id: row.id
        }).then(res=>{
          let data = res.data
          if(data.code===0){
            this.$alert('删除成功')
            this.tableData.splice(index,1)
          }else{
            console.log(res)
            this.$alert('删除失败',data.msg||JSON.stringify(data.stack))
          }
        }).catch(e=>{
          console.log(e)
          this.$alert('删除失败',e.message)
        })
      }
    }
  }
</script>
