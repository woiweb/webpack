import Vue from 'vue';
import App from './index.vue';
import '../../common.less';

window.app = new Vue({
    render: h => h(App),
}).$mount('#app');
