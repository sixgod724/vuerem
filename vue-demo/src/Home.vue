<template>
	<div class="box">
		<router-view></router-view>
		<div class="header">
			<router-link to="/Address" class="head_left left_text">
				<span class="fontS28">北京</span>
				<span class="fontS28">▼</span>
			</router-link>
			<router-link to="/Search" class="head_center _center">
				<i class="iconfont icon-sousuo-copy"></i>
				<span>嗖的一声</span>
			</router-link>

			<a class="right" href="javascript:;">
				<span class="tips"></span>
				<i class="icon iconfont icon-wode"></i>
			</a>
		</div>
		<div class="am_carousel">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div v-for="slide in slides" class="swiper-slide">
						<a class="black" href="javascript:;">
							<img :src="slide.imgUrl" />
						</a>
					</div>
				</div>
				<!-- 分页器 -->
				<div class="swiper-pagination"></div>
			</div>
			<!--触控轮播-->
		</div>
		<div class="bg-white hor pt30">
			<ul>
				<li v-for="column in columns" class="root center_center_column">
					<router-link to="/Formpage" >
						<img :src="column.imgUrl" class="thumb" />
						<span>{{column.title}}</span>
					</router-link>
				</li>
			</ul>
			<!--<div v-for="column in columns" class="root center_center_column">
				<router-link to="/Formpage" >
					<img :src="column.imgUrl" class="thumb" />
					<span>{{column.title}}</span>
				</router-link>
			</div>-->
			
		</div>
		<div class="bg-white root_pt">
			<div class="main_color left">
				<i>
							<!--字体图标-->
						</i>
				<span>今日消息</span>
			</div>
			<div class="txt_scroller" :style="{ top: -itemIndex + 'rem'}" :class="{marquee_top:itemIndex}">
				<!-- 当显示最后一条的时候（num=0转换布尔类型为false）去掉过渡效果-->
				<div v-for="(scroller,index) in marqueeList" style="line-height: .7rem;" class="right_">
					<!--文字垂直滚动-->
					<span>{{scroller.itemText}}</span>
				</div>
			</div>
		</div>
		<h3 class="root_pt3">
					<span style="color: #999;font-weight: 400;">精品好店</span>
					<a style="font-style: normal;color: #19bd9b;" href="javascript:;">查看更多></a>
				</h3>
		<div class="plr20 bg-white">
			<goodlist></goodlist>
		</div>
		<div>
			<div style="height: 1.2rem;"></div>
			<div class="root_1">
				<a class="root_ root_tab" href="#">
					<i></i>
					<span>首页</span>
				</a>
				<a class="root_ root_tab" href="#">
					<i></i>
					<span>好店</span>
				</a>
				<a class="root_ root_tab" href="#">
					<i></i>
					<span>优惠</span>
				</a>
				<a class="root_ root_tab" href="#">
					<i></i>
					<span>周边</span>
				</a>
				<a class="root_ root_tab" href="#">
					<i></i>
					<span>我的</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import heads from './components/header/headertop'
	//引入iconfont
	import iconfont from './assets/iconfont/iconfont.css'
	//引入swiper组件
	import Swiper from "swiper"
	export default {
		name: 'Home',
		//存放数据
		data() {
			return {
				itemIndex: 0,
				//首页分类入口
				columns: [{
					imgUrl: require('./assets/img/94x94.png'),
					title: '大牌推荐',
					id: 0
				}, {
					imgUrl: require('./assets/img/94x94.png'),
					title: '生鲜果蔬',
					id: 1
				}, {
					imgUrl: require('./assets/img/94x94.png'),
					title: '跑腿代购',
					id: 2
				}, {
					imgUrl: require('./assets/img/94x94.png'),
					title: '甜点饮品',
					id: 3
				}, {
					imgUrl: require('./assets/img/94x94.png'),
					title: '快餐简食',
					id: 4
				}, {
					imgUrl: require('./assets/img/94x94.png'),
					title: '夜宵',
					id: 5
				}, {
					imgUrl: require('./assets/img/94x94.png'),
					title: '家常菜',
					id: 6
				}, {
					imgUrl: require('./assets/img/94x94.png'),
					title: '送药上门',
					id: 7
				}],
				//banner轮播
				slides: [{
						imgUrl: require('./assets/img/fff.png'),
					},
					{
						imgUrl: require('./assets/img/fff.png'),
					},
					{
						imgUrl: require('./assets/img/fff.png'),
					},
					{
						imgUrl: require('./assets/img/fff.png'),
					}
				],
				//首页文字轮播
				marqueeList: [{
					itemText: "今天吃什么好?"
				}, {
					itemText: "明天吃什么好?"
				}, {
					itemText: "现在还饿吗?"
				}],
				/*goodlist: [{
						name: "年年有鱼",
						Subtitle: "本市最棒烤鱼店",
						label: "美食",
						Distance: 2.5,
						Pay: "本店支持微信支付",
						time: "周一到周五每天9:00-24:00"
					},
					{
						name: "年年有鱼1",
						Subtitle: "本市最棒烤鱼店2",
						label: "美食3",
						Distance: 2.54,
						Pay: "本店支持支付宝支付",
						time: "周一到周五每天9:00-24:00"
					}
				]*/
			}
		},
		//文档挂载点完成后自动运行方法
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				}
			})
		},
		created() {
			this.showMarquee(this.itemIndex)
		},
		//存放方法
		methods: {
			showMarquee(itemIndex) {
				this.marqueeList.push(this.marqueeList[0]);
				let max = this.marqueeList.length;
				let that = this;
				let marqueetimer = setInterval(function() {
					itemIndex++;
					if(itemIndex >= max) {
						itemIndex = 0;
					}
					that.itemIndex = itemIndex * 0.7;
				}, 2000);
			}
		}
	}
</script>

<style scope>
	@import url("./assets/iconfont/iconfont.css");
	/*基础样式文件*/
	
	@import url("./assets/css/base.css");
	/*页面样式文件*/
	
	@import url("./assets/css/home.css");
	.header {
		background: #1bbc9b;
		height: .9rem;
		padding: 0 .3rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.head_left {
		color: #fff;
		margin-right: .4rem;
		line-height: 0.9rem;
	}
	
	.left_text span {
		vertical-align: middle;
	}
	
	.left_text .iconfont {
		font-size: 0.7rem;
		vertical-align: middle;
	}
	
	.fontS28 {
		font-size: .28rem;
	}
	
	.head_center {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		margin-top: .2rem;
		padding-left: .2rem;
		background: #fff;
		height: .5rem;
		border-radius: .25rem;
		color: #858585;
		align-items: center;
	}
	
	.head_center .iconfont {
		font-size: 0.3rem;
	}
	
	.right {
		position: relative;
		color: #fff;
		font-size: .4rem;
		line-height: 2.5;
		margin-left: .3rem;
	}
	
	.right .icon {
		font-size: 0.4rem;
	}
	
	.tips {
		position: absolute;
		display: inline-block;
		width: .16rem;
		height: .16rem;
		background-color: #fe535c;
		left: .24rem;
		top: .3rem;
		border-radius: 50%;
	}
	
	.swiper-pagination-bullet {
		width: .16rem;
		height: .16rem;
		background: #ccc;
	}
</style>