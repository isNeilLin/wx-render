<template>
  <div class="container">
    <input :value="title" class="title"></input>
    <vue-editor v-model="content" id="editor"></vue-editor>
    <el-button type="primary" @click="setEditorContent" id="saveContent">立即上传</el-button>
  </div>
</template>
<script>
    import { VueEditor } from 'vue2-quill-editor'
    export default {
        created(){
            if(this.$route.params.id){
                let id = this.$route.params.id
                id = ~~(id.slice(1,id.length));
                if(id!==-1){
                    
                }
            }
        },
        data() {
            return {
                title: '标题1',
                content: '这是内容'
            }
        },
        components: {
            VueEditor
        },
        methods: {
            setEditorContent() {
                console.log(this.content)
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
