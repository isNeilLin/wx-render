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
      width="240"
      align="center"
      >
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.profile }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="创建日期"
      align="center"
      >
      <template scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.create }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180" align="center">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import axios from 'axios'
  export default {
    created(){
      axios.get(`${this.ip}/album`).then(res=>{
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
      handleEdit(album) {
        this.$router.push({
            path: `/album/add/:${album.id}`
        })
      },
      handleDelete(index,album) {
        axios.post(`${this.ip}/album/del`,{
          id: album.id
        }).then(res=>{
          let data = res.data
          if(res.code===0){
            this.$alert('删除成功')
            this.tableData.splice(index,1)
          }else{
            this.$alert('删除失败',data.msg||JSON.stringify(data.stack))
          }
        }).catch(e=>{
          this.$alert('删除失败',e.message)
        })
      }
    }
  }
</script>
