console.log('---list');

import Vue from 'vue';
import App from './index.vue';

window.app = new Vue({
    render: h => h(App),
}).$mount('#app');
