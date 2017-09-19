<template>
  <el-form ref="form" 
    label-width="80px">
    <el-form-item label="上传视频" name="video">
        <el-upload
            class="upload-demo"
            :action="url"
            drag
            ref="upload"
            :data="uploadData"
            :on-preview="handlePreview"
            :on-success = "successHandler"
            :on-progress = "progressHandler"
            :on-error = "errorHandler"
            :auto-upload="false"
            >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即上传</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
        return {
            url: `${this.ip}/video/add`,
            uploadData: {
                token: null,
                
            },
            loading: null
        }
    },
    methods: {
      onSubmit() {
          this.uploadData.token = window.localStorage.getItem('token')
          console.log(this.uploadData)
          this.$refs.upload.submit()
      },
      handlePreview(file){
          console.log(file)
      },
      successHandler(response){
        this.loading.close();
        if(response.code!==0){
            this.$alert('上传失败',response.msg||JSON.stringify(response.stack))
            return
        }
        this.$alert('上传成功','', {
            callback: () => {
                this.$router.push({
                    path: '/video/list'
                })
            }
        })
      },
      errorHandler(e){
          console.log(e)
          this.loading.close();
          this.$alert('上传失败',e.msg||JSON.stringify(e))
      },
      progressHandler(event){
          this.text = '正在上传 ...';
          this.loading = this.$loading({
              text: this.text
          })
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
