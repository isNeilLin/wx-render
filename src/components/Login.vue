<template>
  <div class="container">
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" style="margin: 120px auto;">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        loginSuccess: false,
        formLabelAlign: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      onSubmit() {
        let { username, password } = this.formLabelAlign;
        if(!username.trim() || !password.trim()){
          this.showWarn()
          return false
        }
        this.$router.push({path:'/home'})
        window.localStorage.setItem('username',username)
      },
      showWarn() {
        this.$msgbox({
          title: '',
          message: '用户名和密码不能为空'
        })
      },
      cancel(){
        this.formLabelAlign.username = '';
        this.formLabelAlign.password = '';
      }
    }
  }
</script>
<style>
  .el-form {
    width: 300px;
  }
</style>

