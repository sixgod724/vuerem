<template>
	<div id="app">
		<router-view></router-view>
		<!--<heads></heads>-->
	</div>
</template>

<script>
	
	export default {
		methods:{
			back() {
				this.$router.push({
					path: './Address'
				})
			}
		}
	}
</script>

<style>
	/*引入字体图标库*/
	@import url("./assets/iconfont/iconfont.css");
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>