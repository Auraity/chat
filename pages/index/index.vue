/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<view class="logo"><text>MyChat</text></view>
		<view class="content">
			<view class="input-container">
				<input @change="changeEmail" type="text" placeholder="请输入email" class="input" />
			</view>
			<view class="input-container">
				<input @change="changePwd" type="text" placeholder="请输入密码" class="input" />
			</view>
			<view class="text">
				<text @click="toRegister">点击注册</text>
				<text class="forget" @click="toFogPwd">忘记密码?</text>
			</view>
			<button @click="login" class="login-button">登录</button>
		</view>
	</view>
</template>

<script setup>
	import {
		log
	} from '../../api/login.js'
	import {
		ref
	} from 'vue';

	let email = ref('');
	let pwd = ref('');

	function toRegister() {
		uni.navigateTo({
			url: '/pages/register/register'
		})
	}

	function toFogPwd() {
		uni.navigateTo({
			url: '/pages/forgetPwd/forgetPwd'
		})
	}
	let isValid = ref(true)

	const loginApi = async () => {
		const res = await log(email.value, pwd.value);
		if (res.data.code == "200" || res.data.code == 200) {
			uni.setStorageSync('user', res.data.data);
			uni.reLaunch({
				url: '/pages/indexs/indexs'
			});
		} else {
			uni.showToast({
				title: '用户信息不正确',
				icon: 'none'
			});
		}
	}

	function login() {
		formCheck()
		if (isValid.value) {
			loginApi()
		}
	}

	// 表单校验
	var emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	var pwdRegex = /^.{4,}$/;

	function changeEmail(e) {
		email.value = e.detail.value;
	}

	function changePwd(e) {
		pwd.value = e.detail.value;
	}

	function formCheck() {
		isValid.value = true;
		// 邮箱校验		
		if (email.value === '' || email.value == null) {
			isValid.value = false;
			uni.showToast({
				title: '邮箱不能为空',
				icon: 'none'
			});
		} else {
			if (!emailRegex.test(email.value)) {
				isValid.value = false;
				uni.showToast({
					title: '邮箱输入的格式不正确',
					icon: 'none'
				});
			}
		}

		// 密码校验
		if (pwd.value === '' || pwd.value === null) {
			isValid.value = false;
			uni.showToast({
				title: '密码不能为空',
				icon: 'none'
			});
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.container {
		display: flex;
		flex-direction: column;
		margin-top: 100rpx;
		align-items: center;
		justify-content: center;

		.logo {
			width: 500rpx;
			text-align: center;
			margin-bottom: 150rpx;
			color: #0aa3b4;
			font-size: 60rpx;
			font-family: '黑体';
		}

		.input-email {
			width: 500rpx;
			justify-content: center;
			display: flex;

			.emailInput {
				height: 40rpx;
				margin: 30rpx 0;
				border-bottom: 1rpx solid #ccc;
				font-size: 24rpx;
			}

			.codeCli {
				width: 30%;
				background-color: #0aa3b4;
				color: #fff;
				border: none;
				border-radius: 10rpx;
				font-size: 28rpx;
				cursor: pointer;
				height: 70rpx;
			}

			.codeSecond {
				width: 30%;
				background-color: darkgray;
				color: #fff;
				border: none;
				border-radius: 10rpx;
				font-size: 28rpx;
				height: 70rpx;
				pointer-events: none;
			}

		}

		.content {
			margin-top: 110rpx;

			.input-container {
				margin-bottom: 40rpx;
				width: 500rpx;

				.input {
					height: 40rpx;
					margin: 30rpx 0;
					border-bottom: 1rpx solid #ccc;
					font-size: 26rpx;
				}
			}

			.text {
				width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				color: royalblue;
				margin-top: 50rpx;

				.forget {
					color: gray !important;
				}
			}

			.login-button {
				width: 100%;
				margin-top: 100rpx;
				height: 80rpx;
				background-color: #0aa3b4;
				color: #fff;
				border: none;
				border-radius: 5rpx;
				font-size: 28rpx;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			}
		}
	}
</style>
