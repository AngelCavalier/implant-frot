import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import("views/layout")
const UserList = () => import("views/userList")
const AddMedicalRecord = () => import("views/addMedicalRecord")
const AddInformedConsent = () => import("views/addInformedConsent")
const AddAttention = () => import("views/addAttention")
const AddInformation = () => import("views/addInformation")
const AddPreCheck = () => import("views/addPreCheck")
const AddOperationRecord = () => import("views/addOperationRecord")
const AddSecondOperation = () => import("views/addSecondOperation")
const AddRepair = () => import("views/addRepair")
const AddCheckAgain = () => import("views/addCheckAgain")


Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/index"
  },
  {
    path: "/index",
    component: Layout,
    children: [{
      path: '/userList',
      component: UserList,
      meta: ['数据管理', '用户列表'],
    },
    {
      path: '/addMedicalRecord',
      component: AddMedicalRecord,
      meta: ['添加数据', '添加种植病历'],
    }, {
      path: '/addInformedConsent',
      component: AddInformedConsent,
      meta: ['添加数据', '添加知情同意书'],
    }, {
      path: '/addAttention',
      component: AddAttention,
      meta: ['添加数据', '添加术后注意事项'],
    }, {
      path: '/addInformation',
      component: AddInformation,
      meta: ['添加数据', '添加一般资料'],
    }, {
      path: '/addPreCheck',
      component: AddPreCheck,
      meta: ['添加数据', '添加术前检查'],
    }, {
      path: '/addOperationRecord',
      component: AddOperationRecord,
      meta: ['添加数据', '添加种植手术记录'],
    }, {
      path: '/addSecondOperation',
      component: AddSecondOperation,
      meta: ['添加数据', '添加种植二期手术'],
    }, {
      path: '/addRepair',
      component: AddRepair,
      meta: ['添加数据', '添加种植修复治疗'],
    }, {
      path: '/addCheckAgain',
      component: AddCheckAgain,
      meta: ['添加数据', '添加种植修复后复查'],
    },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
