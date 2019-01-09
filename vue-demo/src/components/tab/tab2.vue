<template>
	<div>
		<a @click="itemActive(tabinfo)"  v-for="tabinfo in tabcon" href="javascript:;">
			<span>{{tabinfo.tabItem}}</span>
			<span class="quantity">{{tabinfo.tabNum}}</span>
		</a>
	</div>
</template>

<script>
	export default {
		props:["msgInfo"],
		data() {
			return {
				tabcon: [{
					tabItem: "全城",
					tabNum: 12
				}, {
					tabItem: "一号线",
					tabNum: 332
				}]
			}
		},
		methods:{
			itemActive(tabinfo){
				this.$emit("showInfo",tabinfo.tabItem);
			}
		}
	}
</script>

<style>

</style>