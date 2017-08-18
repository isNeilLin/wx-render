<template>
  <el-form ref="form" :model="form" label-width="80px" id="audio">
    <el-form-item label="添加到" name="album">
        <el-col :span="11">
        <el-select v-model="value" placeholder="请选择" align="left">
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
            class="upload-demo"
            action=""
            drag
            multiple
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
        form: {
          name: ''
        },
        value: '',
        options: [
            {
                label: '专辑1',
                value: '专辑1'
            },
            {
                label: '专辑2',
                value: '专辑2'
            },
            {
                label: '专辑3',
                value: '专辑3'
            }
        ]
      }
    },
    methods: {
      onSubmit() {
        let audio = document.getElementById('audio');
        let audios = new FormData(audio);
        let files = new FormData();
        let title = this.value;
        files.append('title',title);
        files.append('audio',audios);
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
