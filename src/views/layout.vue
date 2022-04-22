<template>
  <div class="fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%; background-color: #324057;">
        <el-menu
          :default-active="defaultActive"
          style="min-height: 100%;"
          router
          background-color="#324057"
          text-color="#fff"
          active-text-color="#1890ff"
        >
          <el-menu-item index="index">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>数据管理
            </template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="medicalList">病历列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>添加数据
            </template>
            <el-menu-item index="addMedical">添加种植病历</el-menu-item>
            <el-menu-item index="addConsent">添加知情同意书</el-menu-item>
            <el-menu-item index="addAttention">添加术后注意事项</el-menu-item>
            <el-menu-item index="addInformation">添加术一般资料</el-menu-item>
            <!-- <el-menu-item index="addOthers">添加其他资料</el-menu-item> -->
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>图表
            </template>
            <el-menu-item index="visitor">用户分布</el-menu-item>
            <el-menu-item index="newMember">用户数据</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item index="uploadImg">上传图片</el-menu-item>
            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <div class="header-container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    },
  },
}
</script>


<style lang="less" >
.container {
  width: 100%;
  height: 100%;
}
.header-container {
  background-color: #eff2f7;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
</style>