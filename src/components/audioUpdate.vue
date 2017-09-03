<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="添加到" name="album">
        <el-col :span="11">
        <el-select v-model="value" @change="selectChange" placeholder="请选择" align="left">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        </el-col>
    </el-form-item>
    <el-form-item label="上传文件" name="audio">
        <el-upload
            drag
            class="upload-demo"
            :action="url"
            ref="upload"
            multiple
            :data="uploadData"
            :on-preview="handlePreview"
            :on-success = "successHandler"
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
    created(){
        this.url = `${this.ip}/audio/add`;
        axios.get(`${this.ip}/album`).then(res=>{
            let data = res.data;
            if(data.code===0){
            this.options = data.data.map(data=>{
                return {
                    label: data.title,
                    value: data.id
                }
            })
            }else{
                this.$alert(data.msg||JSON.stringify(data.stack))
            }
        }).catch(e=>{
            this.$alert(e.message);
        })
    },
    data() {
      return {
        url:null,
        uploadData: {
            id: null,
            album_name: null,
            token: null
        },
        form: {
          name: ''
        },
        value: '',
        label: '',
        options: null
      }
    },
    methods: {
      selectChange(e){
        let obj = {};
        obj = this.options.find((item)=>{
            return item.value === e;
        });
        this.label = obj.label
      },
      onSubmit() {
        this.uploadData.id = this.value
        this.uploadData.album_name = this.label
        this.uploadData.token = window.localStorage.getItem('token')
        console.log(this.uploadData)
        this.$refs.upload.submit()
      },
      handlePreview(file){
          console.log(file)
      },
      successHandler(response){
        if(response.code!==0){
            this.$alert('上传失败',response.msg||JSON.stringify(response.stack))
            return
        }
        this.$alert('上传成功','', {
            callback: () => {
                this.$router.push({
                    path: '/audio/list'
                })
            }
        })
      },
      errorHandler(e){
          this.$alert('上传失败',e.msg||JSON.stringify(e))
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
