import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueCookie from 'vue-cookie';

import './plugins/vuetify';

import router from './router';
import App from '@Component/App/App.vue';
import VuexStoreConfig from './vuex/store';

import { enableAnalytics, analyticsKey, disableAnalyticsInDebug } from './config';

if (enableAnalytics) {
  const VueAnalytics = require('vue-analytics').default;
  Vue.use(VueAnalytics, {
    id: analyticsKey,
    router,
    debug: {
      enabled: process.env.NODE_ENV !== 'production',
      sendHitTask: process.env.NODE_ENV === 'production' || !disableAnalyticsInDebug,
    },
  });
}

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
});
Vue.use(Vuex);
Vue.use(VueCookie);

const store = new Vuex.Store(VuexStoreConfig);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
