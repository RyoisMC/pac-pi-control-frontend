import Vue from 'vue';
import VueRouter from 'vue-router';
const homepage = () => import('../views/homepage.vue');
const power_on = () => import('../views/power_on.vue');
const power_off = () => import('../views/power_off.vue');
const mode_one = () => import('../views/modes/one.vue');
const mode_one_pc = () => import('../views/modes/one_pc.vue');
const mode_four_pc = () => import('../views/modes/four_pc.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homepage,
    meta: {
      title: 'Home',
      visible: true
    },
  },
  {
    path: '/power_on',
    name: 'PowerOn',
    component: power_on,
    props: true,
    meta: {
      title: 'System Powering On',
      visible: true
    },
  },
  {
    path: '/power_off',
    name: 'PowerOff',
    component: power_off,
    meta: {
      title: 'System Shutting Down',
      visible: true
    },
  },
  {
    path: '/modes/one',
    name: 'mode_one',
    component: mode_one,
    meta: {
      title: 'One Microphone Mode',
      visible: true
    },
  },
  {
    path: '/modes/one_pc',
    name: 'mode_one_pc',
    component: mode_one_pc,
    meta: {
      title: 'One Microphone with PC Mode',
      visible: true
    },
  },
  {
    path: '/modes/four_pc',
    name: 'mode_four_pc',
    component: mode_four_pc,
    meta: {
      title: 'Four Microphones with PC Mode',
      visible: true
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = `${nearestWithTitle.meta.title} | PAC Pi Control`;

  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]'),
  ).map((el) => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    .forEach((tag) => document.head.appendChild(tag));

  next();
});
export default router;