<template>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="专辑名称">
        <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="专辑介绍">
        <el-input v-model="formLabelAlign.profile"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          profile: ''
        }
      };
    },
    methods: {
        onSubmit(){
            console.log(this.name)
            console.log(this.profile)
        },
        
    }
  }
</script>
<style>
    .el-form {
        margin: 16px;
    }
    .el-input {
        width: 220px;
    }
    .upload-demo,.el-col-11,.el-form-item__content {
        text-align: left;
    }
</style>