<template>
	<view class="container">
		<view class="logo"><text>MyChat</text></view>
		<view class="input-container">
			<input v-model="email" type="text" placeholder="请输入email" class="input" />
		</view>
		<view class="input-container">
			<input v-model="pwd" type="text" placeholder="请输入密码" class="input" />
		</view>
		<view class="text">
			<text @click="toRegister">点击注册</text>
			<text class="forget" @click="toFogPwd">忘记密码?</text>
		</view>
		<button @click="login" class="login-button">登录</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	let email = ref('');
	let pwd = ref('');

	function toRegister() {
		uni.redirectTo({
			url: '/pages/register/register'
		})
	}

	function toFogPwd() {
		uni.redirectTo({
			url: '/pages/forgetPwd/forgetPwd'
		})
	}

	function login() {
		console.log("登录");
	}
</script>

<style lang="scss" scoped>
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

		.input-container {
			margin-bottom: 20rpx;
			width: 500rpx;

			.input {
				height: 40rpx;
				margin: 30rpx 0;
				border-bottom: 1rpx solid #ccc;
				font-size: 24rpx;
			}
		}

		.text {
			width: 400rpx;
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;
			color: royalblue;

			.forget {
				color: gray !important;
			}
		}

		.login-button {
			width: 80%;
			margin-top: 50rpx;
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
</style>
