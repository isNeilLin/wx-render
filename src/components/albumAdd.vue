<template>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="专辑名称">
        <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="专辑介绍">
        <el-input v-model="formLabelAlign.profile"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">{{buttonText}}</el-button>
        <el-button @click="clearInput">取消</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
  import axios from 'axios'
  export default {
    created(){
        this.checkRoute()
    },
    updated(){
        this.checkRoute()
    },
    data() {
      return {
        id: null,
        buttonText: '立即创建',
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          profile: ''
        }
      };
    },
    methods: {
        onSubmit(){
            let _this = this
            let formdata = new FormData();
            formdata.append('title',this.formLabelAlign.name)
            formdata.append('profile',this.formLabelAlign.profile)
            if(this.id!=-1){
                formdata.append('id',this.id)
                axios.post(`${this.ip}/album/update`,formdata).then(res=>{
                    console.log(res)
                    let data = res.data
                    if(data.code===0){
                        this.$alert('更新成功','',{
                            callback: () => {
                                _this.clearInput()
                                _this.$router.push({
                                    path: '/album/list'
                                })
                            }
                        })
                    }else{
                        this.$alert('更新失败',data.msg||JSON.stringify(data.stack),{
                            callback: _this.clearInput
                        })
                    }
                    }).catch(e=>{
                    this.$alert('更新失败',e.message,{
                        callback: _this.clearInput
                    })
                })
            }else{
                axios.post(`${this.ip}/album/add`,formdata).then(res=>{
                    console.log(res)
                    let data = res.data
                    if(data.code===0){
                        this.$alert('创建成功','', {
                            callback: () => {
                                _this.clearInput()
                                _this.$router.push({
                                    path: '/album/list'
                                })
                            }
                        })
                    }else{
                        this.$alert('创建失败',data.msg||JSON.stringify(data.stack),{
                            callback: _this.clearInput
                        })
                    }
                    }).catch(e=>{
                    this.$alert('创建失败',e.message,{
                        callback: _this.clearInput
                    })
                })
            }
        },
        clearInput(){
            this.formLabelAlign.name = ''
            this.formLabelAlign.profile = ''
        },
        checkRoute(){
            if(this.$route.params.id){
            let id = this.$route.params.id
            this.id = ~~(id.slice(1,id.length))
            console.log(this.id)
            this.buttonText = '立即更新'
            if(this.id!==-1){
                axios.get(`${this.ip}/album/one`,{
                    params: {
                        id: this.id
                    }
                }).then(res=>{
                    console.log(res.data)
                    if(res.data.code===0){
                        this.formLabelAlign.name = res.data.data.title
                        this.formLabelAlign.profile = res.data.data.profile
                    }
                })
            }else{
                console.log('create')
                this.clearInput()
                this.buttonText = '立即创建' 
            }
        }
        }
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
