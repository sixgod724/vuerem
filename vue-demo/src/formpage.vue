<template>
	<div>
		<my-head header-title="美食">
			<div @click="back" slot="head_left" class="head_lf">
				<i class="icon iconfont icon-fanhui1"></i>
			</div>
			<div class="header_right" slot="head_right">
				<router-link to="/Home" class="link" href="javascript:;">
					<span><i class="iconfont icon-wode"></i>我的</span>
				</router-link>
			</div>
		</my-head>
		<div class="nav-bar-wrapper">
			<div class="nav-container">
				<div class="nav-bar ">
					<div class="nav">
						<a @click="tabChange(child1)" href="javascript:;" class="dropdown-toggle caret">
							<span class="nav-head-name">{{msgOfp}}</span>
						</a>
						<a @click="tabChange(child2)" href="javascript:;" class="dropdown-toggle caret">
							<span class="nav-head-name">{{msgInfo}}</span>
						</a>
						<a @click="tabChange(child3)" href="javascript:;" class="dropdown-toggle caret">
							<span class="nav-head-name">{{msgOrder}}</span>
						</a>
					</div>
					<div class="dropdown-wrapper">
						<div class="dropdown-module category-active">
							<div class="scroller-wrapper">
								<div class="dropdown-scroller">
									<div class="dropdown-list-wrapper">
										<div v-show="dropdown" class="category-wrapper active">
											<div class="dropdown-list hook">
													 <!--:msgOfp="msgOfp"--> 
												<div
													@showInfo="showinfopage($event)"
													@showOrderpage="showpage($event)" 
													@showCityName="hideItem($event)" 
													:is="currentView"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="deal-container">
				<div class="plr20 bg-white">
					<goodlist></goodlist>
				</div>
				<div v-show="shade" class="shade"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import child1 from '@/components/tab/tab1'
	import child2 from '@/components/tab/tab2'
	import child3 from '@/components/tab/tab3'

	export default {
		name: 'formpage',
		data() {
			return {
				msgOfp: "全部",
				msgInfo: "附近商家",
				msgOrder: "智能排序",
				dropdown: false,
				shade: false,
				tabs: ["全部类目", "附近商家", "智能排序"],
				child1: 'child1',
				child2: 'child2',
				child3: 'child3',
				currentView: '' //默认选中第一项
			}
		},
		methods: {
			back() {
				this.$router.push('/')
			},
			tabChange(tabItem) {
				this.currentView = tabItem;
				this.dropdown = true;
				this.shade = true;
			},
			hideItem(msg) {
				this.dropdown = false;
				this.shade = false;
				this.msgOfp = msg;
			},
			showinfopage(info) {
				this.dropdown = false;
				this.shade = false;
				this.msgInfo = info;
			},
			showpage(order) {
				this.dropdown = false;
				this.shade = false;
				this.msgOrder = order;
			}
		},
		components: {
			child1,
			child2,
			child3
		}
	}
</script>

<style>
	.nav-bar-wrapper {}
	
	.nav-bar.fixed,
	.nav-bar.fixed-inapp {
		position: fixed;
		top: 0;
	}
	
	.nav-bar.fixed {
		padding-top: .87rem;
	}
	
	.nav-bar {
		width: 100%;
		z-index: 30;
	}
	
	.nav-bar .nav {
		display: -webkit-box;
		display: -ms-flexbox;
		background: #fff;
		border-bottom: 1px solid #d8d8d8;
		text-align: center;
		height: .84rem;
		line-height: .84rem;
	}
	
	.nav-bar .nav .dropdown-toggle {
		display: block;
		position: relative;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		//border-left: 1px solid #c6c0b3;
		width: 100%;
		text-align: center;
		color: #666;
	}
	
	.nav-bar .nav .dropdown-toggle:first-child {
		border: 0;
	}
	
	.nav-bar .nav .dropdown-toggle.caret:after {
		content: '';
		width: 0;
		height: 0;
		display: inline-block;
		border-top: .15rem solid #b7b7b7;
		border-left: .09rem solid transparent;
		border-right: .09rem solid transparent;
		border-bottom: 0;
		margin-left: .12rem;
	}
	
	.nav-bar,
	.nav-bar .dropdown-wrapper {
		position: relative;
	}
	
	.nav-bar .dropdown-wrapper .dropdown-module {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 0;
		overflow: hidden;
		background: #fff;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper {
		position: relative;
	}
	
	.nav-bar .dropdown-wrapper .dropdown-module.category-active .scroller-wrapper .dropdown-scroller,
	.nav-bar .dropdown-wrapper .dropdown-module.region-active .scroller-wrapper .dropdown-scroller {
		max-height: 60%;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper .dropdown-scroller {
		width: 100%;
		background: #f6f4f0;
		overflow-y: scroll;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper .dropdown-scroller .dropdown-list-wrapper {
		width: 100%;
		background: #fff;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper .dropdown-list {
		width: 100%;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper .hook.dropdown-list {
		min-height: 6rem;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper .dropdown-list a {
		display: block;
		color: #333;
		-webkit-transform: translate3d(0, 0, 0);
		border-bottom: 1px solid #ddd8cd;
		line-height: .87rem;
		height: .87rem;
		position: relative;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper .dropdown-list a span {
		margin: 0;
		display: block;
		margin-right: .6rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: left;
		margin-left: .4rem;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper .dropdown-list a .quantity {
		position: absolute;
		right: 0;
		top: 0;
		text-align: right;
		margin-right: .2rem;
		font-size: .24rem;
		color: #999;
	}
	
	.nav-bar .dropdown-wrapper .scroller-wrapper .hook.dropdown-list a span {
		margin-left: .78rem;
	}
	
	.nav-bar .dropdown-wrapper .dropdown-module.category-active,
	.nav-bar .dropdown-wrapper .dropdown-module.csp-active,
	.nav-bar .dropdown-wrapper .dropdown-module.region-active,
	.nav-bar .dropdown-wrapper .dropdown-module.sort-active {
		height: auto;
	}
	
	.deal-container {
		position: relative;
	}
	
	.deal-container .shade {
		/*display: none;*/
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .3);
		z-index: 20;
	}
	
	.deal-container .shade.show {
		display: block;
	}
</style>