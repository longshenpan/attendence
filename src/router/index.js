import Vue from 'vue';
import Router from 'vue-router';
import vLogin from '@/components/login/login';
import menu from '@/components/menu/menu';
import sign from '@/components/sign/sign';
import record from '@/components/record/record';
import project from '@/components/project/project';
import personal from '@/components/personal/personal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vLogin',
      component: vLogin
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
});

