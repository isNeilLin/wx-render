<template>
      <el-row class="tac" width="120px">
      <el-col :span="8">
        <el-menu mode="vertical" default-active="1" :unique-opened="true" class="el-menu-vertical-demo" :router="true">
        <el-submenu index="1" title="文章">
            <template slot="title">文章</template>
            <el-menu-item :route="articleList" index="5">管理文章</el-menu-item>
            <el-menu-item :route="articleUpdate" index="6">上传文章</el-menu-item>
        </el-submenu>
        <el-submenu index="2" title="专辑">
            <template slot="title">专辑</template>
            <el-menu-item :route="albumList" index="7">管理专辑</el-menu-item>
            <el-menu-item :route="albumAdd" index="8">创建专辑</el-menu-item>
        </el-submenu>
        <el-submenu index="3" title="音频">
            <template slot="title">音频</template>
            <el-menu-item :route="audioList" index="9">管理音频</el-menu-item>
            <el-menu-item :route="audioUpdate" index="10">上传音频</el-menu-item>
        </el-submenu>
        <el-submenu index="4" title="视频">
            <template slot="title">视频</template>
            <el-menu-item :route="videoList" index="11">管理视频</el-menu-item>
            <el-menu-item :route="videoUpdate" index="12">上传视频</el-menu-item>
        </el-submenu>
        <el-submenu index="15" title="账号管理">
            <template slot="title">账号管理</template>
            <el-menu-item :route="userList" index="13">管理员列表</el-menu-item>
            <el-menu-item :route="me" index="14">更改密码</el-menu-item>
            <el-menu-item :route="addUser" index="16">添加管理员</el-menu-item>
        </el-submenu>
        </el-menu>
    </el-col>
    <el-col :span="19">
        <router-view></router-view>
    </el-col>
  </el-row>
</template>
<script>
  import axios from 'axios'
  export default {
    created(){
        this.token = window.localStorage.getItem('token');
        axios.defaults.params = {
            token: this.token
        }
    },
    data() {
        return {
            username: '',
            token: null,
            articleList: {
                path: '/article/list'
            },
            articleUpdate: {
                path: '/article/update/:-1'
            },
            albumList: {
                path: '/album/list'
            },
            albumAdd: {
                path: '/album/add/:-1'
            },
            audioList: {
                path: '/audio/list'
            },
            audioUpdate: {
                path: '/audio/update/:-1'
            },
            videoList: {
                path: '/video/list'
            },
            videoUpdate: {
                path: '/video/update/:-1'
            },
            userList: {
                path: '/user/list'
            },
            me: {
                path: '/user/me'
            },
            addUser: {
                path: '/user/add'
            }
        }
    },
    methods: {
      
    }
  }

</script>
<style>
    .el-row {
        margin-bottom: 0;
    }
    #app,.tac, .tac .el-col-8, .tac .el-col-8 ul {
        height: 100%;
    }
    .el-col-8 {
        width: 230px !important;
    }
</style>
