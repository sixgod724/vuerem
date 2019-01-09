<template>
	<div class="box">
		<router-view></router-view>
		<!--<div class="header">
			<a @click="back" class="head_lf" href="javascript:;">
				<i class="icon iconfont icon-fanhui1"></i>
			</a>
			<div class="header_title">提交订单</div>
			<div class="header_right">
			</div>
		</div>-->
		<my-head header-title="提交订单">
			<div @click="back" slot="head_left" class="head_lf">
				<i class="icon iconfont icon-fanhui1"></i>
			</div>
			<div class="header_right" slot="head_right"></div>
		</my-head>
		<div class="mb-form-wrapper">
			<div class="mb-list-line">
				<div class="text-lightgrey">单价：</div>
				<div class="flex-2">{{price}}</div>
			</div>
			<div class="mb-list-line">
				<div class="text-lightgrey">数量：</div>
				<div class="flex-2">
					<div class="counter">
						<a class="minus disable" @click="subtract()" href="#"></a>
						<input onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" v-model="count" @blur="inputFun()" type="tel" class="number" />
						<a class="plus" @click="add()" href="#"></a>
					</div>
				</div>
			</div>
			<div class="mb-list-line">
				<div class="text-lightgrey">总价：</div>
				<div class="flex-2 total-detail">{{totalPrice}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//数量初始化
				count: 1,
				price: 80
			}
		},
		computed: {
			//合计
			totalPrice() {
				return this.price * this.count;
			}
		},
		methods: {
			back() {
				this.$router.push('/Details')
				console.log(this.$route.path)
			},
			//数量增加
			add(count) {
				this.count++;
			},
			//数量减少
			subtract(count) {
				if(this.count <= 1) {
					return this.count = 1;
				} else {
					this.count -= 1;

				}
			},
			inputFun() {
				//检测数量是否为小于1  强制更改为1
				if(this.count <= 1) {
					return this.count = 1
				}
			}
		}
	}
</script>

<style>
	.mb-form-wrapper {
		padding-left: .5rem;
		background-color: #fff;
	}
	
	.mb-form-wrapper .mb-list-line {
		font-size: .3rem;
		padding: .2rem 0 .2rem;
		position: relative;
		display: -webkit-flex;
		display: flex;
		display: -moz-box;
		display: -webkit-box;
		-webkit-flex-direction: row;
		flex-direction: row;
		-moz-box-orient: horizontal;
		-webkit-box-orient: horizontal;
		-moz-box-lines: single;
		-webkit-box-lines: single;
		box-lines: single;
		-moz-flex-flow: row nowrap;
		-webkit-flex-flow: row nowrap;
		flex-flow: row nowrap;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.text-lightgrey {
		color: #999!important;
	}
	
	.mb-form-wrapper .mb-list-line .flex-2 {
		padding-right: .3rem;
		display: block;
		-moz-box-flex: 1;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}
	
	.flex-2 {
		text-align: right;
	}
	
	.text-lightgrey {
		color: #999!important;
	}
	
	.counter .minus,
	.counter .number,
	.counter .plus {
		height: .5rem;
		text-align: center;
		vertical-align: middle;
	}
	
	.counter .minus,
	.counter .plus {
		display: inline-block;
		border: 1px solid #f63;
		width: .5rem;
		color: #f63;
		font-size: .5rem;
		border-radius: 1px;
		margin: 0!important;
		line-height: .5rem;
	}
	
	.counter .minus:before {
		display: block;
		content: '-';
	}
	
	.counter .plus:before {
		display: block;
		content: '+';
	}
	
	.counter .number {
		display: inline-block;
		width: 1.2rem!important;
		margin: 0 .2rem;
	}
	
	.counter .minus.disable,
	.mt .counter .plus.disable {
		border-color: #ccc;
		color: #ccc;
	}
	
	.counter .minus,
	.counter .plus {
		border-color: #2bb2a3;
		color: #2bb2a3;
	}
	
	.mb-form-wrapper .mb-list-line .flex-2 input {
		font-size: 0.25rem;
	}
	
	.total-detail {
		color: #FF9712;
	}
</style>