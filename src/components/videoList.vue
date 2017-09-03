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
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="试看"
      align="center"
      >
      <template scope="scope">
          <div slot="reference" class="name-wrapper">
            <video :src="scope.row.src" controls>{{ scope.row.name }}</video>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180" align="center">
      <template scope="scope">
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
      axios.get(`${this.ip}/video`).then(res=>{
        let data = res.data;
        console.log(data)
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
      handleDelete(index, row) {
        axios.post(`${this.ip}/video/del`,{
          id: row.id
        }).then(res=>{
          let data = res.data
          if(data.code===0){
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

