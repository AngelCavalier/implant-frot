<template>
  <div class="operation">
    <el-button type="primary" size="medium" v-print="printObj" class="print">打印</el-button>
    <el-button type="primary" size="medium" @click="submit" class="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    submit() {},
  },
}
</script>

<style lang="less">
.operation {
  margin: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
  .print,
  .submit {
    margin-right: 10px;
  }
}
</style>