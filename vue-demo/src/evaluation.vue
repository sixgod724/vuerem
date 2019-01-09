<template>
	<div class="box">
		<router-view></router-view>
		<my-head header-title="评论">
			<a slot="head_left" @click="back" class="head_lf" href="javascript:;">
				<i class="icon iconfont icon-fanhui1"></i>
			</a>
			<div slot="head_right" class="header_right">
				<a @click="tohome" class="link" href="javascript:;">
					<span>
						<i class="iconfont icon-shouye"></i>
						首页
					</span>
				</a>
			</div>
		</my-head>
		<div class="v-e-head">
			<div class="wrapper comments-withlabel-head">
				<ul class="label-container">
					<li @click="classifyFn(item)" :class="item.active===true?'label-positive':'label-not-positive'" v-for="(item,index) in classifyArr" :key="index" class="label">
						<span class="label-text">{{item.name}}</span>
						<span class="label-count">{{item.count}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="list-container">
			<dl class="list">
				<dd v-for="(list,index) in listData" :key="index" class="dd-padding">
					<div class="feedbackCard">
						<div class="user-wrapper">
							<div class="user-pic">
								<img src="./assets/img/94x94.png" />
							</div>
							<div class="user-info-text">
								<div class="userInfo">
									<span class="username">rWY414622246</span>
								</div>
								<div class="score">
									<span class="time">2018-09-26</span>
								</div>
							</div>
						</div>
						<div class="comment">
							<p>{{list.dataText}}</p>
						</div>
					</div>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				listData: [{
						dataText: '环境很好，服务较好1，',
						rateType: 1
					},
					{
						dataText: '环境很好，服务较好2，',
						rateType: 2
					},
					{
						dataText: '环境很好，服务较好3，',
						rateType: 1
					},
					{
						dataText: '环境很好，服务较好4，',
						rateType: 2
					}
				],
				newRatings: [

				],
				//评价分类按钮
				classifyArr: [{
						name: '全部',
						count: 1,
						active: true,
						rateType: ""
					}, {
						name: '海鲜差',
						count: 2,
						active: false,
						rateType: 1
					}

				]
			}
		},
		methods: {
			back() {
				history.go(-1)
				console.log(this.$route.path)
			},
			tohome() {
				this.$router.push({
					path: './Home'
				})
			},
			classifyFn(item) {
				if(item.rateType != "") {
					this.listData = this.listData.filter((data) => data.rateType === item.rateType);
				} else {
					this.listData = [{
							dataText: '环境很好，服务较好1，',
							rateType: 1
						},
						{
							dataText: '环境很好，服务较好2，',
							rateType: 2
						},
						{
							dataText: '环境很好，服务较好3，',
							rateType: 1
						},
						{
							dataText: '环境很好，服务较好4，',
							rateType: 2
						}
					];
				}

				console.log(item);
			}
		}
	}
</script>

<style>
	.wrapper {
		overflow: hidden;
		padding: 0 .2rem;
	}
	
	.comments-withlabel-head {
		/*padding-top: .38rem;*/
		border-bottom: 1px solid #e5e5e5;
		background-color: #fff;
	}
	
	.comments-withlabel-head .label-container {
		overflow: hidden;
		margin-top: .3rem;
		margin-bottom: .26rem;
		line-height: 1;
	}
	
	.comments-withlabel-head .label-not-positive {
		color: #999;
		border-color: #ACACAC;
	}
	
	.comments-withlabel-head .label {
		float: left;
		/* height: .6rem; */
		/* line-height: .6rem; */
		text-align: center;
		/* padding: 0 .16rem; */
		margin: 0 .1rem .14rem 0;
		cursor: pointer;
		font-size: 0.28rem;
		padding: .15rem .11rem;
		color: #999;
		border: 2px solid #ACACAC;
		border-radius: .06rem;
	}
	
	.comments-withlabel-head .label-positive {
		color: #FDB338;
		border-color: #FDB338;
	}
	
	.list-container {
		position: relative;
	}
	
	dl.list {
		border-top: 1px solid #DDD8CE;
		border-bottom: 1px solid #DDD8CE;
		margin-top: .2rem;
		margin-bottom: 0;
		background-color: #fff;
	}
	
	dl.list:first-child {
		margin: 0;
		border-top: 0;
	}
	
	dl.list dt,
	dl.list dd {
		margin: 0;
		border-bottom: 1px solid #DDD8CE;
		overflow: hidden;
		font-size: inherit;
		font-weight: 400;
		position: relative;
	}
	
	dl.list .dd-padding,
	dl.list dt,
	dl.list dd>.react {
		padding: .28rem .2rem;
	}
	
	.feedbackCard .user-wrapper {
		position: relative;
	}
	
	.feedbackCard .user-pic {
		position: absolute;
		width: .73rem;
		height: .73rem;
		vertical-align: top;
	}
	
	.feedbackCard .user-pic .imgbox {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.imgbox {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAAEAAQMAAACJUpNeAAAAA3NCS…44+KrVzng3GIpQOCHAtVnkovK0Ir1t7SnRqLihWvuW8jcg0Wxz1AbH1QAAAABJRU5ErkJggg==);
		background-color: #E0E0E0;
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: 50%;
		max-width: 4rem;
		position: relative;
	}
	
	.imgbox img {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
	}
	
	.feedbackCard .user-pic img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.feedbackCard .user-info-text {
		margin-left: .8rem;
		font-size: .24rem;
		color: #999;
		vertical-align: top;
		height: .73rem;
		overflow: hidden;
	}
	
	.feedbackCard .userInfo {
		font-size: .24rem;
	}
	
	.feedbackCard .score {
		margin-bottom: .4rem;
		font-size: .24rem;
	}
	
	.feedbackCard .time {
		color: #999;
	}
	
	.feedbackCard .comment {
		margin-bottom: .22rem;
		font-size: .3rem;
	}
	
	.feedbackCard .comment {
		margin-top: .3rem;
	}
	
	p,
	h6 {
		line-height: 1.41;
		text-align: justify;
		margin: -.2em 0;
		word-break: break-all;
	}
</style>