<template>
  <div class="container">
    <input v-model="title" class="title" :placeholder="placeholder" @input="titleChange"></input>
    <vue-editor v-model="content" id="editor" @input="input"></vue-editor>
    <el-button type="primary" @click="setEditorContent" id="saveContent">立即上传</el-button>
  </div>
</template>
<script>
    import { VueEditor } from 'vue2-quill-editor'
    import axios from 'axios'
    export default {
        created(){
            this.checkRoute()
        },
        data() {
            return {
                title: '',
                content: '',
                placeholder: null,
                result: null,
                titleResult: null
            }
        },
        components: {
            VueEditor
        },
        methods: {
            titleChange(e){
                this.titleResult = e
            },
            input(e){
                this.result = e
            },
            setEditorContent() {
                let _this = this
                this.title = this.titleResult.target.value
                console.log(this.title)
                let formdata = new FormData();
                formdata.append('title',this.title)
                formdata.append('content',this.result)
                if(this.id!=-1){
                    formdata.append('id',this.id)
                    axios.post(`${this.ip}/article/update`,formdata).then(res=>{
                        console.log(res)
                        let data = res.data
                        if(data.code===0){
                            this.$alert('更新成功','',{
                                callback: () => {
                                    _this.content = ''
                                    _this.placeholder = '这里添加标题'
                                    _this.$router.push({
                                        path: '/article/list'
                                    })
                                }
                            })
                        }else{
                            this.$alert('更新失败',data.msg||JSON.stringify(data.stack))
                        }
                        }).catch(e=>{
                        this.$alert('更新失败',e.message)
                    })
                }else{
                    axios.post(`${this.ip}/article/add`,formdata).then(res=>{
                        console.log(res)
                        let data = res.data
                        if(data.code===0){
                            this.$alert('创建成功','', {
                                callback: () => {
                                    _this.content = ''
                                    _this.placeholder = '这里添加标题'
                                    _this.$router.push({
                                        path: '/article/list'
                                    })
                                }
                            })
                        }else{
                            this.$alert('创建失败',data.msg||JSON.stringify(data.stack))
                        }
                        }).catch(e=>{
                        this.$alert('创建失败',e.message)
                    })
                }
            },
            checkRoute(){
                if(this.$route.params.id){
                let id = this.$route.params.id
                this.id = ~~(id.slice(1,id.length))
                console.log(this.id)
                if(this.id!==-1){
                    axios.get(`${this.ip}/article`,{
                        params: {
                            id: this.id
                        }
                    }).then(res=>{
                        console.log(res.data)
                        if(res.data.code===0){
                            this.title = res.data.data.title
                            this.content = res.data.data.content
                        }
                    })
                }else{
                    console.log('create')
                    this.placeholder = '这里添加标题'
                    this.content = ''
                }
                }
            }
        }
    }
</script>
<style>
    .container {
        margin-left: 16px;
    }
    .title {
        width: 100%;
        height: 48px;
        line-height: 48px;
        font-size: 18px;
        font-weight: 400;
        outline: none;
        border: none;
    }
    #editor {
        height: 500px;
        margin-bottom: 8px;
    }
    #saveContent {
        width: 120px;
    }
</style>
