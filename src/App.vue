<template>
  <div id="app">
    <el-row>
      <el-col :span="24"><h1 class="grid-content bg-purple-dark">
        <el-button type="text" v-if="isLogin" >你好, {{username}}</el-button>
        后台管理系统
        <el-button type="danger" v-if="isLogin" @click="logout">退出</el-button>
      </h1></el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created(){
    this.checkToken()
    if(this.$route.path==='/'){
      this.isLogin = false;
    }else{
      this.isLogin = true;
      console.log(window.localStorage.getItem('username'))
      this.username = window.localStorage.getItem('username');
    }
  },
  updated(){
    this.checkToken()
    if(this.$route.path==='/'){
      this.isLogin = false;
    }else{
      this.isLogin = true;
      this.username = window.localStorage.getItem('username');
    }
  },
  name: 'app',
  data(){
    return {
      isLogin: false,
      username:''
    }
  },
  methods: {
    logout(){
      this.$router.push('/')
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('token')
    },
    checkToken(){
      let token = window.localStorage.getItem('token')
      if(!token){
        this.$router.push('/')
      }
    }
  }
}
</script>
<style>
  html,body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: '微软雅黑';
    text-align: center;
    color: #2c3e50;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-row h1 {
    margin: 0 !important;
    font-size: 20px;
    font-weight: 400;
    line-height: 60px;
    color:#fff;
  }
  .bg-purple-dark {
    background: #1F2D3D;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .row-bg {
    background-color: #1F2D3D;
  }
  .grid-content .el-button--danger {
    float: right;
    margin: 12px 16px 0 0;
  }
  .grid-content .el-button--text {
    float: left;
    margin: 12px 0 0 16px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
</style>
