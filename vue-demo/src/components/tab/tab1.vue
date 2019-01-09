<template>
	<div>
		<a @click="itemActive(tabinfo)" v-for="tabinfo in tabcon" href="javascript:;">
			<span>{{tabinfo.tabItem}}</span>
			<span class="quantity">{{tabinfo.tabNum}}</span>
		</a>
	</div>
</template>

<script>
	export default {
		props:["msgOfp"],
		data() {
			return {
				tabcon: [{
					tabItem: "全部",
					tabNum: 3325
				}, {
					tabItem: "甜品",
					tabNum: 25
				}],
			}
		},
		methods:{
			itemActive(tabinfo){
				this.$emit("showCityName",tabinfo.tabItem);
				alert("您选择的是" + tabinfo.tabItem);
			}
		}
	}
</script>

<style>

</style>