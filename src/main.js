// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import VueFire from 'vuefire';
import Firebase from 'firebase';
import VueResource from 'vue-resource'
import Vue from 'vue';
import App from './App';
import router from './router';



// explicit installation required in module environments
Vue.use(VueFire);
Vue.use(VueResource);


Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
