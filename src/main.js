// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import { localStorageUtil } from './common/js/util/storageUtil';
import { loadMask } from './common/js/util/loadMask.js';
import { mapService } from './common/js/util/mapService.js';
import { MessageBox } from './common/js/util/MessageBox.js';
Vue.use(localStorageUtil);
Vue.use(loadMask);
Vue.use(mapService);
Vue.use(MessageBox);
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
