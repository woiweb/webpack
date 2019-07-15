import pic from '../image/logo.png';
console.log(pic);

import './index.less';
import add from '../math';

let result = add(3, 3);
console.log(result);

import Vue from 'vue';
import App from './index.vue';

window.app = new Vue({
    render: h => h(App),
}).$mount('#app');
