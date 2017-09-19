<template>
<div>
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
        <upload
            ref="upload"
            class="upload"
            v-model="files"
            :data="params"
            :multiple="true"
            :post-action="url"
            @input="updatetValue"
            @input-filter="inputFilter"
        >选择音频文件</upload>
    </el-form-item>
    <el-table
      v-if="files.length"  
      :data="files"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="文件名"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="realSize"
        label="文件大小"
        align="center"
        width="150">
      </el-table-column>
      <el-table-column
        prop="status"
        align="center"
        width="300"
        label="上传状态">
      </el-table-column>
    </el-table>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即上传</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>
</div>
</template>

<script>
  import axios from 'axios'
  import upload from 'vue-upload-component'
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
        params: {
            id: null,
            album_name: null,
            token: null
        },
        files: [],
        form: {
          name: ''
        },
        value: '',
        label: '',
        options: null
      }
    },
    components: {
        upload: upload
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
            let i = 0;
            this.uploadFile(i)
        },
        uploadFile(i){
            this.files[i].status = '正在上传...'
            if(i===this.files.length){
                this.$refs.upload.clear();
                this.files = [];
                return false;
            }
            let token = window.localStorage.getItem('token')
            let formdata = new FormData();
            formdata.append('id',this.value)
            formdata.append('album_name',this.label)
            formdata.append('token',token)
            formdata.append('file',this.files[i].file);
            axios.post(this.url,formdata).then(res=>{
                this.files[i].status = '上传成功'
                this.uploadFile(++i);
            }).catch(e=>{
                this.files[i].status = '上传失败'
            })
        },
        inputFilter: function(newFile, oldFile, prevent) {
            if (newFile && !oldFile) {
                // 过滤 非 图片文件
                if (newFile.type.indexOf('audio')!=-1) {
                    prevent()
                }
            }
            // 创建 blob 字段
            newFile.blob = ''
            let URL = window.URL || window.webkitURL
            if (URL && URL.createObjectURL) {
                newFile.blob = URL.createObjectURL(newFile.file)
            }
            newFile = this.addFileds(newFile);
            this.files.push(newFile)
        },
        addFileds(newFile){
            console.log(newFile)
            newFile.status = newFile.acitve ? '正在上传' : '等待上传';
            newFile.realSize = (newFile.size/1024/1024).toFixed(2)+'M';
            return newFile;
        },
        updatetValue(value) {
            console.log(value)
            this.files = value
        }
    }
  }
</script>
<style>
    .el-form {
        margin: 16px;
    }
    .el-table {
        margin-bottom: 16px;
    }
    .el-input {
        width: 220px;
    }
    .upload-demo,.el-col-11,.el-form-item__content {
        text-align: left;
    }
    .upload {
        width: 120px;
        height: 36px;
        background: #20a0ff;
        border: 1px solid #20a0ff;
        color: #fff;
        margin: 0;
        border-radius: 4px;
        box-sizing: border-box;
        line-height:36px;
        cursor: pointer;
    }
    .upload:hover {
        opacity: 0.8;
    }
</style>
