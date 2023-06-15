<template>
	<view class="container">
		<textarea v-model="content" class="content-input" placeholder="请输入内容..." maxlength="200"></textarea>
		<view class="button-container">
			<button class="publish-button" @click="publish">发布</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	let content = ref('')

	function publish() {
		// 处理发布逻辑
		console.log('发布内容:', content.value);
	}
</script>

<style lang="scss">
	.container {
		padding: 40rpx;
		background-color: #f5f5f5;
		height: 100vh;
		display: flex;
		flex-direction: column;
		// justify-content: center;
		align-items: center;

		.content-input {
			width: 80%;
			height: 20vh;
			padding: 20rpx;
			border: 2rpx solid #ccc;
			border-radius: 40rpx;
			background-color: #fff;
			font-size: 24rpx;
			line-height: 1.5;
			resize: none;
			box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
		}

		.button-container {
			display: flex;
			justify-content: center;
			align-items: right;
			margin-top: 20rpx;

			.publish-button {
				width: 200rpx;
				padding: 10rpx 20rpx;
				border: none;
				border-radius: 15rpx;
				background-color: #0aa3b4;
				color: #fff;
				font-size: 24rpx;
				cursor: pointer;
				transition: background-color 0.3s ease;
			}

			.publish-button:hover {
				background-color: #067d8a;
			}
		}
	}
</style>
