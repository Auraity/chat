/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<textarea v-model="content" class="content-input" placeholder="请输入1024个字符以内的内容..." maxlength="200"></textarea>
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
	let isValid = ref(true)


	function publish() {
		formCheck()
		if (isValid.value) {
			uni.switchTab({
				url: '/pages/trends/trends'
			})
		}
	}

	// 表单验证
	var textRegex = /^.{,1024}$/;

	function formCheck() {
		// 密码校验
		if (content.value === '' || content.value === null) {
			isValid.value = false;
			uni.showToast({
				title: '不能为空',
				icon: 'none'
			});
		} else {
			if (!textRegex.test(content.value)) {
				isValid.value = false;
				uni.showToast({
					title: '内容不能超过1024个字符',
					icon: 'none'
				});
			}

		}
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
