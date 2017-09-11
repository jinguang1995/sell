import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import App from './App';
import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter({
    linkActiveClass: 'active'
});
var app = Vue.extend(App);
router.map({
    '/goods': {
        component: goods
    },
    '/ratings': {
        component: ratings
    },
    '/seller': {
        component: seller
    }
});
router.go('/goods');
router.start(app, '#app');
