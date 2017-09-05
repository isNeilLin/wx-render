<template>
<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
 <p>当前用户: &nbsp;&nbsp;<span style="color: #ee6623;fontWeight:800;">{{this.ruleForm2.username}}</span></p>
 <el-form-item label="输入原密码">
    <el-input type="password" v-model="oldPwd" ref="oldPwd" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="输入新密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认新密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">确认修改</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  import axios from 'axios'
  export default {
    created(){
        this.ruleForm2.username = window.localStorage.getItem('username');
    },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        oldPwd: '',
        ruleForm2: {
          username: '',
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const id = window.localStorage.getItem('id')
            console.log(this.oldPwd)
            axios.post(`${this.ip}/user/update`,{
                id: id,
                oldPwd: this.oldPwd,
                password: this.ruleForm2.pass
            }).then(res=>{
                console.log(res)
                if(res.data.code==0){
                    this.$alert('更改成功','')
                }else{
                    this.$alert('更改失败',res.data.msg)
                }
            }).catch((e)=>{
                this.$alert('更改失败',JSON.stringify(e))
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.oldPwd = '';
      }
    }
  }
</script>
<style>
    .el-form {
        margin-top: 16px;
        width: 380px;
    }
</style>

