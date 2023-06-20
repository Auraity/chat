/**
* @Author 邓冬勤
* @Description
*/
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
	let newSign = ref('')
	let isValid = ref(true)
	import {
		onLoad
	} from "@dcloudio/uni-app"

	onLoad((e) => {
		newSign.value = e.friendIntroduction;
	})

	function changeSign() {
		// 发送请求到服务器更改用户名
		// 在这里可以添加相应的逻辑，比如校验用户名是否合法等
		formCheck()
		if (isValid.value) {
			uni.switchTab({
				url: '/pages/my/my'
			})
		}
	}
	// 表单验证
	var signRegex = /^.{,32}$/;

	function formCheck() {
		// 密码校验
		if (newSign.value === '' || newSign.value === null) {
			isValid.value = false;
			uni.showToast({
				title: '不能为空',
				icon: 'none'
			});
		} else {
			if (!signRegex.test(newSign.value)) {
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
