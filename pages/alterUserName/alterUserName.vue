/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<input class="input" type="text" v-model="newUsername" placeholder="请输入新的用户名" />
		<button class="btn" @click="changeUsername">保存</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	let newUsername = ref('')
	let isValid = ref(true)

	import {
		defineProps
	} from 'vue'
	import {
		onLoad
	} from "@dcloudio/uni-app"

	onLoad((e) => {
		newUsername.value = e.friendName;
	})

	function changeUsername() {
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
	var usernameRegex = /^.{2,16}$/;

	function formCheck() {
		// 用户名校验
		if (user.value === '' || user.value === null) {
			isValid.value = false;
			uni.showToast({
				title: '用户名不能为空',
				icon: 'none'
			});
		} else {
			if (!usernameRegex.test(user.value)) {
				isValid.value = false;
				uni.showToast({
					title: '用户名为2~16位任意字符',
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
