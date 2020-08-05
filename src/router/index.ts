import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Sad from '../views/Sad.vue';
import Happy from '../views/Happy.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sad',
    name: 'Sad',
    component: Sad,
  },
  {
    path: '/happy',
    name: 'Happy',
    component: Happy,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
