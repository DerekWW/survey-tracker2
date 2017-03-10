// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

let VueResource = require('vue-resource');
let VueFire = require('vuefire')
let Firebase = require('firebase')

// explicit installation required in module environments
Vue.use(VueFire)
Vue.use(VueResource);


Vue.config.productionTip = false;

let firebaseApp = firebase.initializeApp({ ... })
let db = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
