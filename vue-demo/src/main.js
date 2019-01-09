// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BaiduMap from'vue-baidu-map'
import router from './router'
import Home from './Home'
import Address from './address'
import Details from './details'
import Evaluation from './evaluation'
import CreateOrder from './createorder'
import Search from './search'
import Formpage from './formpage'
import rem from './assets/js/rem.js' //rem适配
//components
import heads from './components/header/headertop'
Vue.component('my-head',heads)

import good from './components/good/goodlist'
Vue.component('goodlist',good)

//导入swiper组件
require('swiper/dist/css/swiper.css')

//百度地图
Vue.use(BaiduMap, {
  ak: '6ilshntec1HkrMzQpzoFXthbVTGlOAEW'
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')