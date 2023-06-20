/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<view class="addTrend" @click="addTrends">
			<input type="text" placeholder="       ✚ 点击此处创建动态···" />
		</view>
		<view>
			<trendsListCop :allFTrendsDa='allFTrendsDa'></trendsListCop>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import {
		allFTrends
	} from '../../api/trends.js'

	function addTrends() {
		uni.navigateTo({
			url: '/pages/textEdit/textEdit'
		})
	}
	// 调用接口
	let allFTrendsDa = ref([])
	const allFTrendsApi = async () => {
		const res = await allFTrends();
		// console.log(res);
		if (res.data.code == "200" || res.data.code == 200) {
			allFTrendsDa.value = res.data.data.list;
			// console.log(allFTrendsDa.value, 222);
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}
	allFTrendsApi()
</script>

<style lang="scss" scoped>
	.container {
		input {
			pointer-events: none;
			width: 750rpx;
			height: 80rpx;
			padding: 10rpx;
			border: 1rpx solid #dddddd;
			background-color: #f4f4f4;
			font-size: 24rpx;
		}
	}
</style>
