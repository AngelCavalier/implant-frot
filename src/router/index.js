import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import("views/layout")
const Home = () => import("views/home");
const AddMedical = () => import("views/addMedical")
const Consent = () => import("views/consent")
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
      path: '/consent',
      component: Consent,
      meta: ['添加数据', '添加知情同意书'],
    },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
