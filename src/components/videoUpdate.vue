<template>
  <el-form ref="form" label-width="80px" id="video">
    <el-form-item label="上传视频" name="video">
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
    methods: {
      onSubmit() {
        let video = document.getElementById('video');
        let videoData = new FormData(audio);
        
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
