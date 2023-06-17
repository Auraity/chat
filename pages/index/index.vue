<template>
	<view class="container">
		<view class="search" @click="toSearch">
			<input type="text" placeholder="     ※ 点击此处进行消息搜索" />
		</view>
		<view class="messageList" v-for="i in 10" :key="i">
			<view @click="enterSocket">
				<messageListCop></messageListCop>
			</view>
		</view>
	</view>
</template>

<script setup>
	function toSearch() {
		uni.navigateTo({
			url: "/pages/searchPage/searchPage"
		})
	}

	function enterSocket() {
		uni.navigateTo({
			url: "/pages/WebSocket/WebSocket"
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

		.messageList {
			margin-top: 30rpx;
		}
	}
</style>
