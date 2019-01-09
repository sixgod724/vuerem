<template>
	<div class="box">
		<router-view></router-view>
		<my-head header-title="团购详情">
			<div slot="head_left" class="head_lf">
				<a @click="back">
					<i class="icon iconfont icon-fanhui1"></i>
				</a>
			</div>
			<div class="header_right" slot="head_right">
				<a class="link">
					<span><i class="iconfont icon-shoucang"></i>收藏</span>
				</a>
			</div>
		</my-head>
		<div class="conter-wrapper">
			<div class="deal">
				<div class="list">
					<a @click="showConter" class="toutu" href="#">
						<img class="toutu-img" src="./assets/img/rrr.jpg" />
						<div class="desc">
							<h1 class="title">上海1号私藏菜</h1>
							<span>100元代金券1张，可叠加</span>
						</div>
					</a>
					<div class="list-group">
						<div class="group-item buy-price dd-padding">
							<div class="container">
								<div class="price">
									<strong class="strong-color">95</strong>
									<span class="strong-color">元</span>
									<span class="retail-price">门市价:100元</span>
								</div>
							</div>
							<router-link class="buy-btn btn btn-strong" to="/CreateOrder">
								立即抢购
							</router-link>
						</div>
						<div class="group-item buy-price agreement dd-padding">
							<ul class="agree">
								<li class="color-ok">
									<span class="agreement-icon"><i class="iconfont icon-tui"></i>支持随时退款</span>
								</li>
								<li class="color-ok">
									<span class="agreement-icon"><i class="iconfont icon-dui"></i>支持过期自动退</span>
								</li>
								<li>
									<span class="agreement-icon"><i style="font-size: .42rem;" class="iconfont icon-shouhou"></i>已售8788</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="list-group tags-container">
						<div class="group-item">
							<router-link to="/Evaluation" class="star-row">
								<div class="comment-headline more">
									<span class="stars"></span>
									<span class="pull-right ">265人评价</span>
								</div>
							</router-link>
						</div>
						<div class="dd-padding cloud-tag ">
							<a class="btn btn-tag btn-tag-light" href="#"><span class="tag-title">味道赞67</span></a>
							<a class="btn btn-tag btn-tag-light" href="#"><span class="tag-title">菜品不错56</span></a>
							<a class="btn btn-tag btn-tag-light" href="#"><span class="tag-title">服务热情56</span></a>
							<a class="btn btn-tag btn-tag-light" href="#"><span class="tag-title">上菜快35</span></a>
							<a class="btn btn-tag" href="#"><span class="tag-title">弄堂小店</span></a>
							<a class="btn btn-tag" href="#"><span class="tag-title">肉类差</span></a>
						</div>
					</div>
					<div class="list-group poi-container">
						<div class="group-title">商家信息</div>
						<div class="group-item dd-padding">
							<div class="merchant-card">
								<div class="biz-detail">
									<a href="#">
										<h5 class="title single-line">上海1号私藏菜（卢湾店）</h5>
										<div class="address single-line">黄浦区瑞金南路1号海兴广场3层</div>
									</a>
								</div>
								<div @click="phone" class="biz-call">
									<a href="#">
										<i class="iconfont icon-weibiaoti-"></i>
									</a>
								</div>
							</div>
						</div>
						<div v-show="propshow">
							<div class="meishi-msg-bg">
								<div class="msg-option">
									<div class="msg-bd">拨打电话</div>
									<div class="msg-option-btns">
										<a href="tel:123456" class="btn msg-btn">123-123</a>
										<a href="tel:18321660079" class="btn msg-btn">18321660079</a>
									</div>
									<button @click="hideprop" type="button" class="btn msg-btn-cancel">取消</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div @click="show" v-show="isHide" class="slide-img">
			<div class="am_carousel">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div v-for="slide in imgsdata" class="swiper-slide">
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
		</div>
	</div>
</template>

<script>
	//引入swiper组件
	import Swiper from "swiper"
	export default {
		data() {
			return {
				imgsdata: [{
						imgUrl: require('./assets/img/1231.jpg'),
					},
					{
						imgUrl: require('./assets/img/15151.jpg'),
					},
					{
						imgUrl: require('./assets/img/2323.jpg'),
					},
					{
						imgUrl: require('./assets/img/2424424.jpg'),
					}
				],
				isHide: false,
				propshow: false
			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,
				loop: false,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction'
				}
			})
		},
		methods: {
			back() {
				this.$router.push('/')
				console.log(this.$route.path)
			},
			showConter() {
				this.isHide = true
			},
			show() {
				this.isHide = false
			},
			phone() {
				this.propshow = true
			},
			hideprop() {
				this.propshow = false
			}
		}
	}
</script>

<style>
	.slide-img {
		background: #000;
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: 100%;
	}
	
	.am_carousel span {
		color: #fff;
	}
	
	.slide-img .am_carousel {
		top: 50%;
		margin-top: -157px;
	}
	
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
	
	.toutu {
		display: block;
		position: relative;
		overflow: hidden;
		height: 3.9rem;
	}
	
	.toutu-img {
		width: 100%;
		min-height: 100%;
	}
	
	.desc {
		position: absolute;
		left: .3rem;
		right: .3rem;
		bottom: .24rem;
		z-index: 1;
		text-shadow: 1px 1px 1px #000;
		color: #fff;
	}
	
	.desc h1.title {
		margin-bottom: .14rem;
		font-size: .38rem;
		line-height: 1.1;
	}
	
	.buy-price {
		background-color: #fff;
	}
	
	.buy-price,
	.campaign-tip,
	.campaign-tip .campaign,
	.group-title,
	.list-group {
		border-bottom: 1px solid #ddd8ce;
	}
	
	.group-title {
		font-size: .34rem;
		line-height: 1.5;
		padding: .22rem .2rem .14rem;
		color: #333;
	}
	
	.btn {
		display: inline-block;
		height: .6rem;
		padding: 0 .32rem;
		margin: 0;
		text-align: center;
		border-radius: .06rem;
		font-size: .28rem;
		line-height: .6rem;
		border: 0;
		color: #fff;
		background-color: #06c1ae;
		box-sizing: border-box;
		cursor: pointer;
		-webkit-user-select: none;
	}
	
	.btn-strong {
		background-color: #f90;
	}
	
	.buy-btn {
		position: absolute;
		right: .2rem;
		top: .21rem;
		height: .8rem;
		width: 2.6rem;
		margin: 0;
		line-height: .8rem;
		font-size: .4rem;
	}
	
	.buy-price {
		position: relative;
		top: 0;
		left: 0;
		color: #999;
		width: 100%;
		box-sizing: border-box;
	}
	
	.buy-price .price {
		display: inline-block;
		vertical-align: text-top;
	}
	
	.buy-price .strong-color {
		color: #06c1ae;
	}
	
	.buy-price strong {
		font-size: .66rem;
	}
	
	.buy-price .retail-price {
		letter-spacing: -.02rem;
	}
	
	.buy-price span,
	.buy-price strong {
		margin-right: .06rem;
	}
	
	.dd-padding {
		padding: .28rem .2rem;
	}
	
	.container {
		line-height: 1;
	}
	
	.agreement .color-ok {
		color: #6bbd00;
	}
	
	.agree {
		overflow: hidden;
	}
	
	.agreement li {
		/*display: inline-block;*/
		float: left;
		height: .56rem;
		width: 50%;
		padding: 0;
		box-sizing: border-box;
		line-height: .56rem;
		color: #666;
		text-align: left;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.agreement li i {
		font-size: 0.5rem;
		vertical-align: middle;
		margin-right: .16rem;
		margin-left: .1rem;
	}
	
	.agreement li span {
		font-size: .28rem;
	}
	
	.list-group {
		border-top: 1px solid #ddd8ce;
		margin-top: .2rem;
		margin-bottom: 0;
	}
	
	.tags-container .star-row {
		display: block;
		height: 100%;
		padding: .28rem .2rem;
	}
	
	.tags-container .comment-headline {
		color: #999;
		line-height: .35rem;
	}
	
	.more {
		position: relative;
		padding-right: .3rem;
		width: 100%;
		box-sizing: border-box;
	}
	
	.buy-price,
	.campaign-tip,
	.group-title,
	.list-group {
		background-color: #fff;
	}
	
	.pull-right {
		float: right;
	}
	
	.stars,
	audio,
	canvas,
	progress,
	video {
		display: inline-block;
	}
	
	.tags-container .more:after {
		right: .05rem;
		border-left: .04rem solid #999;
		border-bottom: .04rem solid #999;
	}
	
	.more:after {
		border-color: #666;
		position: absolute;
		right: .25rem;
		top: 50%;
		display: block;
		content: '';
		width: .6em;
		height: .6em;
		border-left: .04rem solid #06c1ae;
		border-bottom: .04rem solid #06c1ae;
		transform: translateY(-50%) scaleY(.7) rotateZ(-135deg);
		-webkit-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg);
		-moz-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg);
		-ms-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg);
	}
	
	.tags-container .cloud-tag {
		padding-bottom: .22rem;
		padding-top: .19rem;
		border-top: 1px solid #ddd8ce;
	}
	
	.btn-tag {
		height: .62rem;
		padding: 0 .11rem;
		line-height: .62rem;
		background: 0;
		border: .02rem solid #ACACAC;
		color: #999;
	}
	
	.merchant-card .biz-detail {
		flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
	}
	
	.merchant-card .biz-detail .detail-info {
		display: block;
	}
	
	.merchant-card .biz-detail h5 {
		margin-top: 0;
		margin-bottom: .06rem;
		font-size: .32rem;
		color: #000;
	}
	
	.merchant-card .biz-detail .address {
		padding-right: .2rem;
		color: #666;
	}
	
	.merchant-card .biz-call .phone {
		display: block;
		height: 100%;
	}
	
	.merchant-card .biz-call {
		width: 1.4rem;
		text-align: center;
		border-left: 1px solid #ddd8ce;
		font-size: .5rem;
		height: 1.2rem;
		line-height: 1.2rem;
		color: #06c1ae;
	}
	
	.merchant-card .biz-call i {
		font-size: 0.5rem;
	}
	
	.btn-tag-light {
		border: .02rem solid #FDB338;
		color: #FDB338;
	}
	
	.btn-tag,
	.btn-tag-light {
		margin-bottom: .14rem;
		margin-right: .1rem;
	}
	
	.merchant-card {
		display: flex;
		display: -webkit-box;
		display: -ms-flexbox;
		-webkit-box-align: center;
		-moz-box-align: center;
		-ms-box-align: center;
	}
	
	.meishi-msg-bg {
		background: rgba(0, 0, 0, .4);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		z-index: 1000;
	}
	
	.meishi-msg-bg,
	.meishi-msg-doc {
		position: fixed;
		overflow: hidden;
	}
	
	.msg-option {
		bottom: .5rem;
		position: fixed;
		left: .3rem;
		right: .3rem;
		border-radius: .06rem;
		background: 0 0;
		overflow: hidden;
		z-index: 1001;
		animation-name: slideup;
		animation-duration: .3s;
		-webkit-animation-name: slideup;
		-webkit-animation-duration: .3s;
	}
	
	.msg-option .msg-bd {
		background: #fff;
		font-size: .34rem;
		padding: .4rem .43rem;
		border-radius: .06rem .06rem 0 0;
	}
	
	.msg-option .btn {
		height: .8rem;
		line-height: .8rem;
		border-top: 1px solid #ccc;
		width: 100%;
		background: #fff;
		color: #06c1ae;
		border-radius: 0;
	}
	
	.msg-option .msg-btn-cancel {
		padding: 0;
		margin-top: .14rem;
		color: #06c1ae;
		border-radius: .06rem;
	}
	
	@-webkit-keyframes slideup {
		0% {
			opacity: 0;
			bottom: -5rem
		}
		50% {
			opacity: 1;
			bottom: 1rem
		}
		100% {
			opacity: 1;
			bottom: .5rem
		}
	}
	
	@keyframes slideup {
		0% {
			opacity: 0;
			bottom: -5rem
		}
		50% {
			opacity: 1;
			bottom: 1rem
		}
		100% {
			opacity: 1;
			bottom: .5rem
		}
	}
</style>