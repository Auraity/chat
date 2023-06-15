<template>
	<view class="container">
		<view class="addTrend" @click="addTrends">
			<input type="text" placeholder="       ✚ 点击此处创建动态···" />
		</view>
		<view v-for="i in 5" :key="i">
			<trendsListCop></trendsListCop>
		</view>
	</view>
</template>

<script setup>
	function addTrends() {
		uni.navigateTo({
			url: '/pages/textEdit/textEdit'
		})
	}
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
