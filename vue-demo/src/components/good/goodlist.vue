<template>
	<div id="good">
		<div v-for="gooditem in goodlist" class="pt_a overflow-h">
			<router-link :to="{path:gooditem.gurl}" >
				<div class="overflow-h relative fl">
					<img class="rootOneOne" :src="gooditem.imgPath" />
					<span style="background: #19bd9a;" class="rootOneTwoCommon">五折优惠</span>
				</div>
				<div class="rootThr">
					<span class="rootThrOne">8</span>
					<em class="rootThrTwo">折</em>
				</div>
				<div class="rootTwo">
					<div class="text-overflow-1 rootTwoZero">
						{{gooditem.name}}
					</div>
					<h3 class="text-overflow-1 rootTwoOne">{{gooditem.Subtitle}}</h3>
					<h4 class="rootTwoTwo">
						<span class="rootTwoTwoOne">{{gooditem.label}}</span>
						<em class="rootTwoTwoTwo">|{{gooditem.Distance}}km</em>
					</h4>
					<h5 class="rootTwoThr">
						<span class="rootTwoThrTwo">{{gooditem.Pay}}</span>
					</h5>
					<h6 class="text-overflow-1 rootTwoTFour">
						<span class="rootTwoThrTwo">
							周一到周五每天9:00-24:00
						</span>
					</h6>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "goood",
		data() {
			return {
				goodlist: [{
					/*如果图片是在 assets 文件夹下面的话，
					需要在路径前面加上 require 函数才行，
					否则 webpack 会识别不了路径报错*/
						imgPath:require("../../assets/img/000.png"), 
						name: "年年有鱼",
						gurl:"/Details",
						Subtitle: "本市最棒烤鱼店",
						label: "美食",
						Distance: 2.5,
						Pay: "本店支持微信支付",
						time: "周一到周五每天9:00-24:00"
					},
					{
						imgPath:require("../../assets/img/000.png"), 
						name: "年年有鱼1",
						gurl:"/Details",
						Subtitle: "本市最棒烤鱼店2",
						label: "美食3",
						Distance: 2.54,
						Pay: "本店支持支付宝支付",
						time: "周一到周五每天9:00-24:00"
					},
					{
						imgPath:require("../../assets/img/000.png"), 
						name: "年年有鱼2",
						gurl:"/Details",
						Subtitle: "本市最棒烤鱼店3",
						label: "美食4",
						Distance: 2.54,
						Pay: "本店支持支付宝支付",
						time: "周一到周五每天9:00-24:00"
					}
				]
			}
		},
		props: {
			//组件传参
			//vue的组件的props属性支持驼峰命名,不支持连接线命名,使用是用连接线进行赋值或者数据绑定!
			/*goodList: {
				type: Array,
				required: true
			}*/
		}
	}
</script>

<style>

</style>