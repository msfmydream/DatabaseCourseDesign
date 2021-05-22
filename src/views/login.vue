<template>
<!--    <div>-->
        <el-row>
            <el-col :span="6">
                <h2>配件库存管理系统</h2>
                <el-image :src="require('@/assets/login.jpg')" style="height: 180px; width: 180px"></el-image>
            </el-col>
            <el-col :span="1">
                <!--            分割线-->
                <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="6">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>






                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

<!--    </div>-->

</template>

<script>
    export default {
        name: "login",
            data() {
                return {
                    ruleForm: {
                        username: '',
                        password: '',
                    },
                    rules: {
                        username: [
                            { required: true, message: '请输入用户名', trigger: 'blur' },
                        ],
                        password: [
                            { required: true, message: '请输入密码', trigger: 'blur' }
                        ]
                    }
                };

            },
            methods: {
                submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('submit!');
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                },
                resetForm(formName) {
                    this.$refs[formName].resetFields();
                }
            },


    }

</script>

<style scoped>
    .el-row{
        background-color: #FAFAFAFA;
        height: 100vh;
        display: flex;
        align-items: center;
        text-align: center;
    }

    .el-divider{
        height: 200px;
    }
</style>