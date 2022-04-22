import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import("views/layout")
const Home = () => import("views/home");
const AddMedical = () => import("views/addMedical")
const AddConsent = () => import("views/addConsent")
const AddAttention = () => import("views/addAttention")
const AddInformation = () => import("views/addInformation")

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
    },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
