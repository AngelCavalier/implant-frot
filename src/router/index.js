import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import("views/layout")
const Home = () => import("views/home");
const AddMedical = () => import("views/addMedical")
const AddConsent = () => import("views/addConsent")
const AddAttention = () => import("views/addAttention")
const AddInformation = () => import("views/addInformation")
const AddPreCheck = () => import("views/addPreCheck")
const AddOperationRecords = () => import("views/addOperationRecords")
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
      path: '',
      component: Home,
      meta: []
    }, {
      path: '/addMedical',
      component: AddMedical,
      meta: ['添加数据', '添加种植病历'],
    }, {
      path: '/addConsent',
      component: AddConsent,
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
      path: '/addOperationRecords',
      component: AddOperationRecords,
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
