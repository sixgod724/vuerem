<template>
	<div class="box">
		<router-view></router-view>
		<my-head header-title="选择城市">
			<div @click="back" slot="head_left" class="head_lf">
				<i class="icon iconfont icon-fanhui1"></i>
			</div>
			<div class="header_right" slot="head_right">
				<router-link to="/Home" class="link" href="javascript:;">
					<span><i class="iconfont icon-shouye"></i>首页</span>
				</router-link>
				<router-link to="/search" class="link">
					<span><i class="iconfont icon-sousuo-copy"></i>搜索</span>
				</router-link>
			</div>
		</my-head>
		<div class="citBox">
			<div class="box">
				定位城市
				<span class="city-name"><a href="javascript:;">北京</a></span>
			</div>
			<baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
		</div>

	</div>
</template>

<script>
	//导入地图定位
		import getCurrentCityName from './components/getUserLocation.js'

	export default {
		name: 'addres',
		data() {
			return {
				center: {
					lng: 0,
					lat: 0
				},
				zoom: 3
			}
		},
		mounted() {
						this.getCurrentCity()
		},
		methods: {
			getCurrentCity(){
				console.log(getCurrentCityName())
				/*this.$store.state.city || getCurrentCityName().then((city) => {
					console.log(city)
					city = city.slice(0,city.length - 1)
					this.$store.commit('getCity',city)
				})*/
			},
			handler({
				BMap,
				map
			}) {
				console.log(BMap, map)
				this.center.lng = 116.404
				this.center.lat = 39.915
				this.zoom = 15
			},
			back() {
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
	.head_lf {
		flex: 1;
		color: #fff;
		line-height: .9rem;
	}
	
	.head_lf .icon {
		font-size: 0.4rem;
		vertical-align: middle;
	}
	
	.header_title {
		flex: 2;
		color: #fff;
		font-size: 0.3rem;
		line-height: 0.9rem;
		text-align: center;
	}
	
	.header_right {
		flex: 1;
		text-align: right;
		color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	
	.link {
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
	
	.citBox {
		overflow: hidden;
		padding: 0 .2rem;
	}
	
	.citBox .box {
		padding: .28rem .2rem;
		border: 1px solid #DDD8CE;
		border-radius: .06rem;
		overflow: hidden;
		background-color: #FDFDFC;
		margin-top: .2rem;
		margin-bottom: .4rem;
	}
	
	.bm-view {
		width: 100%;
		height: 300px;
	}
</style>