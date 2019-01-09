import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/header/headertop' //头部组件
import Home from '@/Home' //首页
import Address from '@/address' //地址
import Details from '@/details' //商品详情
import Evaluation from '@/evaluation' //评论
import CreateOrder from '@/createorder' //结算
import Search from '@/search' //搜索
import Formpage from '@/formpage'
Vue.use(Router)

export default new Router({
	mode: 'history', //去掉路由地址的#
	routes: [{
			path: '/',
			redirect: '/Home'
		},
		{
			path: '/Home',
			name: 'Home',
			component: Home,
		},
		{
			path: '/Address',
			name: 'Address',
			component: Address
		},
		{
			path: '/Details',
			name: 'Details',
			component: Details
		},
		{
			path: '/Evaluation',
			name: 'Evaluation',
			component: Evaluation
		},
		{
			path: '/CreateOrder',
			name: 'CreateOrder',
			component: CreateOrder
		},
		{
			path: '/Search',
			name: 'Search',
			component: Search
		},
		{
			path: '/Formpage',
			name: 'Formpage',
			component: Formpage
		}
	]
})