<template>
	<view class="container">
		<input class="input" type="text" v-model="newSign" placeholder="请输入个性签名" />
		<button class="btn" @click="changeSign">保存</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	let newSign = ref()

	function changeSign() {
		// 发送请求到服务器更改用户名
		// 在这里可以添加相应的逻辑，比如校验用户名是否合法等
		console.log('新用户名:', this.newSign);
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.container {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #F2F2F2;


		.input {
			margin: 30rpx;
			width: 500rpx;
			height: 60rpx;
			padding: 0 10rpx;
			border-bottom: 1rpx solid #07c160;
			font-size: 30rpx;
			margin-right: 10rpx;
		}

		.btn {
			background-color: #07c160;
			color: #fff;
			font-size: 24rpx;
			border-radius: 4rpx;
		}
	}
</style>
