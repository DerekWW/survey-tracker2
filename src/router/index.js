import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import dashboard from '@/components/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
});
