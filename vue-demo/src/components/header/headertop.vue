<template>
	<div class="header">
		<slot name="head_left">无效</slot>
		<div class="header_title">{{headerTitle}}</div>
		<slot name="head_right"></slot>
	</div>
</template>

<script>
	export default {
		name: "heads",
		data() {
			//组件内参数定义在data
			return {
				msg: "123",
			}
		},
		props: {
			//组件传参
			//vue的组件的props属性支持驼峰命名,不支持连接线命名,使用是用连接线进行赋值或者数据绑定!
			headerTitle: {
				type: String,
				default: '标题'
			}
		},
		hethods: {}
	}
</script>

<style scoped>
	.header {
		background: #1bbc9b;
		height: .9rem;
		padding: 0 .3rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		position: relative;
		z-index: 999;
	}
	
	.head_lf {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		color: #fff;
		line-height: .9rem;
	}
	
	.head_lf .icon {
		font-size: 0.4rem;
		vertical-align: middle;
	}
	
	.header_title {
		-webkit-box-flex: 2;
		-ms-flex: 2;
		flex: 2;
		color: #fff;
		font-size: 0.3rem;
		line-height: 0.9rem;
		text-align: center;
	}
	
	.header_right {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: right;
		color: #fff;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: end;
		-ms-flex-pack: end;
		justify-content: flex-end;
	}
	
	.link {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}
	
	.link span {
		display: inline-block;
		text-align: center;
	}
	
	.link span i {
		font-size: 0.35rem;
		display: block;
	}
</style>