<template>
	<div class="box">
		<div class="header">
			<a @click="back" class="head_lf" href="javascript:;">
				<i class="icon iconfont icon-fanhui1"></i>
			</a>
			<div class="header_title">搜索</div>
			<div class="header_right">
				<router-link class="link" to="/Home">
					<span>
						<i class="iconfont icon-shouye"></i>
						首页
					</span>
				</router-link>
			</div>
		</div>
		<div class="search_wrapper">
			<div>
				<!--搜索-->
				<form class="search_form">
					<div class="box_search">
						<i class="iconfont icon-sousuo-copy icon-search"></i>
						<input v-model="ivalue" @blur="showinput()" @focus="ipthide()" type="text" placeholder="案例/1/2/3/4/5" />
						<i v-show="true ? this.ivalue != '':this.ivalue == ''" @click="clear()" class="btn_reset">x</i>
					</div>
					<button class="btn" disabled="disabled">搜索</button>
				</form>
				<!--热门展示-->
				<div v-show="searchHot" class="search_hot">
					<dl class="list list_in">
						<dd class="icon-wrapper h_gesture_">
							<ul class="icon-list page current" style="position: relative;">
								<li v-for="(Hot,index) in hotList" class="icon">
									<a :class="{'title':!index}" class="hot-link react " href="#">{{Hot.listTit}}</a>
								</li>
							</ul>
						</dd>
					</dl>
				</div>
			</div>
			<div class="search-suggestion">
				<ul>
					<li v-show="toggleSearch" v-for="searchlist in filteredArticles" class="list-item">
						<a class="suggestion-item react" href="#">
							<span class="item-search single-line absolute">
								<i class="iconfont icon-sousuo-copy"></i>
								{{searchlist.listName}}
							</span>
							<span class="result-count">
								约{{searchlist.listNum}}个团购
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchHot: true,
				toggleSearch:false,
				iii: true,
				ivalue: "",
				hotList: [{
						listTit: "周边热门"
					},
					{
						listTit: "上海迪士尼"
					},
					{
						listTit: "如家酒店"
					},
					{
						listTit: "海上明珠园"

					},
					{
						listTit: "汉庭"
					}
				],
				search: [{
						listName: "1点点",
						listNum: "15"
					},
					{
						listName: "24小时KTV",
						listNum: "1000"
					},
					{
						listName: "3D魔幻趣味馆",
						listNum: "4"
					},
					{
						listName: "4D电影",
						listNum: "19"
					},
					{
						listName: "57°湘",
						listNum: "2"
					}
				]
			}
		},
		computed: {
			filteredArticles() {
				let search_array = this.search,
					ivalue = this.ivalue;
				if(!ivalue) {
					return search_array;
				}
				ivalue = ivalue.trim().toLowerCase();
				search_array = search_array.filter(function(item) {
					if(item.listName.toLowerCase().indexOf(ivalue) !== -1) {
						return item;
					}
				})
				return search_array;
			}
		},
		methods: {
			back() {
				this.$router.push('/')
				console.log(this.$route.path)
			},
			ipthide() {
				if(this.ivalue == "") {
					//					this.searchHot = !this.searchHot;
					this.searchHot = false;
				} else {
					this.searchHot = false;
				}
				this.toggleSearch = true;
			},
			showinput() {
				if(this.ivalue == "") {
					this.searchHot = !this.searchHot;
				};
				this.toggleSearch = false;
			},
			clear() {
				this.ivalue = "";
				this.searchHot = true
			}
		}
	}
</script>

<style>
	.search_form {
		margin-top: .2rem;
		margin-bottom: .2rem;
		height: .8rem;
		position: relative;
		padding: 0 0.2rem;
	}
	
	.search_wrapper .box_search {
		vertical-align: middle;
		position: relative;
		margin-right: 1.4rem;
		border-radius: .06rem;
		border: 1px #CCC solid;
		background: #FFF;
		height: .8rem;
		line-height: .8rem;
		padding: 0 .7rem 0 .7rem;
	}
	
	.btn {
		display: inline-block;
		margin: 0;
		text-align: center;
		height: .6rem;
		padding: 0 .32rem;
		border-radius: .06rem;
		color: #fff;
		border: 0;
		background-color: #06c1ae;
		font-size: .28rem;
		vertical-align: middle;
		line-height: .6rem;
		box-sizing: border-box;
		cursor: pointer;
		-webkit-user-select: none;
	}
	
	.search_form button {
		position: absolute;
		right: 0.2rem;
		top: 0;
		width: 1.2rem;
		height: 100%;
	}
	
	.btn:disabled,
	.btn.btn-disabled {
		background-color: #dcdcdc;
		color: #999;
		border: 0;
	}
	
	.search_form .icon-search {
		position: absolute;
		left: .2rem;
		font-size: .4rem;
		color: #999;
	}
	
	.search_form input[type='text'] {
		width: 100%;
		border: none;
		background: rgba(255, 255, 255, 0);
		outline-style: none;
		display: block;
		line-height: .28rem;
		height: 100%;
		font-size: .28rem;
		padding: 0;
	}
	
	.box_search .btn_reset {
		position: absolute;
		right: 0.14rem;
		top: 50%;
		margin-top: -0.2rem;
		width: 0.4rem;
		height: 0.4rem;
		line-height: 0.4rem;
		border-radius: 0.2rem;
		text-align: center;
		background: #B5B5B5;
		color: white;
		font-style: normal;
		cursor: pointer;
		font-family: "微软雅黑";
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
	
	.icon-wrapper {
		height: 3.6rem;
		-webkit-transform: scale(1);
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
	
	.search_hot .page {
		height: auto;
		display: block;
		position: absolute;
		padding-bottom: 0.4rem;
		font-size: 0.28rem;
	}
	
	.page li {
		display: inline-block;
		width: 25%;
		height: .8rem;
		line-height: .8rem;
		font-size: .28rem;
		text-align: center;
		border-bottom: 1px solid #ddd8ce;
		margin-bottom: -1px;
		float: left;
		position: relative;
		z-index: 10;
		box-sizing: border-box;
		background: white;
		padding: 1px;
		box-sizing: border-box;
		background-clip: content-box;
		background-origin: content-box;
	}
	
	.icon-list .icon {
		display: inline-block;
		box-sizing: border-box;
		width: 25%;
		text-align: center;
	}
	
	.hot-link {
		position: relative;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	a.react,
	label.react {
		display: block;
		color: inherit;
		height: 100%;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.icon-list .icon>a {
		padding: .2rem 0;
	}
	
	.hot-link.title {
		color: #fdb338;
	}
	
	.search-suggestion {
		border-top: 1px solid #ccc;
	}
	
	.search-suggestion .list-item {
		height: 0.8rem;
		line-height: 0.8rem;
		padding: 0 0.28rem;
		background-color: #FDFDFC;
		border-bottom: 1px solid #ccc;
		color: #999999;
	}
	
	a.react,
	label.react {
		display: block;
		color: inherit;
		height: 100%;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.search-suggestion a {
		position: relative;
	}
	
	.search-suggestion .list-item a {
		color: #999999;
	}
	
	.single-line {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.search-suggestion .item-search {
		display: block;
	}
	
	.search-suggestion .item-search i {
		font-size: .30rem;
	}
	
	.search-suggestion .item-search.absolute {
		position: absolute;
		top: 0;
		left: 0;
		right: 2rem;
	}
	
	.search-suggestion .list-item .result-count {
		float: right;
		color: #999;
	}
</style>