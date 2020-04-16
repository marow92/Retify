import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/dashboard/Dashboard.vue';
import Login from '../views/login/Login.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/dash',
    name: 'Dashboard',
    component: Dashboard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
