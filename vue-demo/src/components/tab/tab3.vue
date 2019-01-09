<template>
	<div>
		<a @click="itemActive(tabinfo)" v-for="tabinfo in tabcon" href="javascript:;">
			<span>{{tabinfo.tabItem}}</span>
			<span class="quantity"></span>
		</a>
	</div>
</template>

<script>
	export default {
		props:["msgOrder"],
		data() {
			return {
				tabcon: [{
					tabItem: "智能排序",
				}, {
					tabItem: "综合排序",
				}]
			}
		},
		methods:{
			itemActive(tabinfo){
				this.$emit('showOrderpage',tabinfo.tabItem);
			}
		}
	}
</script>

<style>

</style>