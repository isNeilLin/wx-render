<template>
<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
 <el-form-item label="用户名">
    <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="管理员权限">
    <el-select v-model="value" @change="selectChange" placeholder="请选择" align="left">
        <el-option label="超级管理员" value="1"></el-option>
        <el-option label="普通管理员" value="2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="输入密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">添加</el-button>
    <el-button @click="resetForm('ruleForm2')">取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  import axios from 'axios'
  export default {
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
        value: "2",
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
            const sender = window.localStorage.getItem('username')
            axios.post(`${this.ip}/user/register`,{
                username: this.ruleForm2.username,
                password: this.ruleForm2.pass,
                access: this.value,
                sender: sender
            }).then(res=>{
                console.log(res)
                if(res.data.code==0){
                    this.$alert('添加成功','')
                }else{
                    this.$alert('添加失败',res.data.msg)
                }
            }).catch((e)=>{
                this.$alert('添加失败',JSON.stringify(e))
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.oldPwd = '';
      },
      selectChange(){
          console.log(this.value)
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

