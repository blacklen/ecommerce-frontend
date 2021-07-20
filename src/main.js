import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import Spinner from './components/Spinner';
import App from './App';

Vue.use(VeeValidate);
Vue.component('Spinner', Spinner);

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
