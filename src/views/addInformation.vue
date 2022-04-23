<template>
  <div class="container">
    <Operation />
    <div id="printMe">
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
      <div class="bottom">
        <el-form ref="form" :model="formBottom" label-width="130px" class="bottom-form">
          <el-form-item label="手术时间：" class="form-item">
            <el-input v-model="formBottom.operYear" class="short-input"></el-input>年
            <el-input v-model="formBottom.operMonth" class="short-input"></el-input>月
            <el-input v-model="formBottom.operDay" class="short-input"></el-input>日
            <el-input v-model="formBottom.operHour" class="short-input"></el-input>时
          </el-form-item>
          <el-form-item label="恢复时间：" class="form-item">
            <el-input v-model="formBottom.fixYear" class="short-input"></el-input>年
            <el-input v-model="formBottom.fixMonth" class="short-input"></el-input>月
            <el-input v-model="formBottom.fixDay" class="short-input"></el-input>日
            <el-input v-model="formBottom.fixHour" class="short-input"></el-input>时
          </el-form-item>
          <el-form-item label="首诊医生：">
            <el-input v-model="formBottom.firstDocor" class="short"></el-input>
          </el-form-item>
          <el-form-item label="首诊护士：">
            <el-input v-model="formBottom.firstNurse" class="short"></el-input>
          </el-form-item>
          <el-form-item label="临床路径：">
            <el-input
              type="textarea"
              :rows="7"
              placeholder
              v-model="formBottom.clinicalPathway"
              style="width: 544px;"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Operation from '../components/Operation'

export default {
  name: 'addInformation',
  components: { Operation },
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
      formBottom: {
        operYear: '',
        operMonth: '',
        operDay: '',
        operHour: '',
        fixYear: '',
        fixMonth: '',
        fixDay: '',
        fixHour: '',
        firstDocor: '',
        firstNurse: '',
        clinicalPathway: '',
      },
    }
  },
}
</script>

<style lang="less">
.container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.header {
  font-size: 20px;
  text-align: center;
  margin: 30px 0;
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
.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  .bottom-form {
    width: 800px;
  }
  .short-input {
    width: 100px;
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