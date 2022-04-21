<template>
  <div class="container">
    <div class="header">
      <el-button type="primary" round>新增种植病历</el-button>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">疗程</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">诊疗第1次（初次门诊）</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">诊疗第2次（术前准备）</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">诊疗第3次（手术日）</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'implant',
}
</script>

<style>
.header {
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  margin: auto;
  padding: 5px 10px;
}
.content {
  width: 800px;
}
</style>

