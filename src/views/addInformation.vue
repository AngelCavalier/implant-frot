<template>
  <div>
    <div class="operation">
      <el-button type="primary" size="medium" v-print="printObj" class="print">打印</el-button>
      <el-button type="primary" size="medium" @click="submit" class="submit">提交</el-button>
    </div>
    <div id="printMe" class="container">
      <header class="header">一般资料</header>
      <div class="top">
        <el-form ref="form" :model="form" label-width="130px" class="top-form">
          <div class="row">
            <el-form-item label="姓名：" class="form-item">
              <el-input v-model="form.user"></el-input>
            </el-form-item>
            <el-form-item label="民族：" class="form-item">
              <el-input v-model="form.national"></el-input>
            </el-form-item>
          </div>
          <div class="row">
            <el-form-item label="性别：" class="form-item">
              <el-input v-model="form.sex"></el-input>
            </el-form-item>
            <el-form-item label="职业：" class="form-item">
              <el-input v-model="form.occupation"></el-input>
            </el-form-item>
          </div>
          <div class="row">
            <el-form-item label="出生年月：" class="form-item">
              <el-input v-model="form.birth"></el-input>
            </el-form-item>
            <el-form-item label="既往病史：" class="form-item">
              <el-input v-model="form.medicalHistory"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="嗜好：">
            <el-input v-model="form.hobby" placeholder="抽烟或喝酒" class="short"></el-input>
          </el-form-item>
          <el-form-item label="工作单位：">
            <el-input v-model="form.workUnit" class="short"></el-input>
          </el-form-item>
          <div class="row">
            <el-form-item label="邮编：" class="form-item">
              <el-input v-model="form.postcode"></el-input>
            </el-form-item>
            <el-form-item label="电话：" class="form-item">
              <el-input v-model="form.tel"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="家庭地址：">
            <el-input v-model="form.address" class="short"></el-input>
          </el-form-item>
          <div class="row">
            <el-form-item label="第二联系人姓名：" class="form-item">
              <el-input v-model="form.user2"></el-input>
            </el-form-item>
            <el-form-item label="电话：" class="form-item">
              <el-input v-model="form.tel2"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="middle">（以上由患者填写）</div>
      <div class="middleLine"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addInformation',
  data() {
    return {
      form: {
        user: '',
        national: '',
        sex: '',
        occupation: '',
        birth: '',
        medicalHistory: '',
        hobby: '',
        workUnit: '',
        postcode: '',
        tel: '',
        address: '',
        user2: '',
        tel2: '',
      },
      printLoading: true,
      printObj: {
        id: 'printMe',
        popTitle: 'good print',
        preview: false,
        extraCss:
          'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback() {
          console.log('打开之前')
        },
        openCallback() {
          console.log('执行了打印')
        },
        closeCallback() {
          console.log('关闭了打印工具')
        },
      },
    }
  },
}
</script>

<style lang="less">
.header {
  font-size: 20px;
  text-align: center;
  margin: 30px 0;
}
.container {
  position: relative;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-form {
    width: 800px;
  }
  .short {
    width: 544px;
  }
}
.form-item {
  display: inline-block;
}
.middle {
  position: relative;
  text-align: center;
  margin: 30px 0 10px 0;
}
.middleLine {
  position: absolute;
  left: 50%;
  margin-left: -400px;
  height: 1px;
  width: 730px;
  border-bottom: 3px solid #000;
}
.bottom {
  margin-top: 20px;
}
.el-input__inner {
  border: 0;
  border-bottom: 1px solid #000;
  border-radius: 0;
  outline: 0;
  text-align: center;

  font-size: 16px;
}
</style>