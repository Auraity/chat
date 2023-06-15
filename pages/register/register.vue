<template>
	<view class="container">
		<view class="input-container">
			<input v-model="user" type="text" placeholder="请输入用户名" class="input" />
		</view>
		<view class="input-email">
			<input v-model="email" type="text" placeholder="请输入电子邮件" class="emailInput" />
			<button class="codeCli" @click="sendCode" v-if="!isCodeSent">验证码</button>
			<button class="codeSecond" @click="sendCode" v-else>{{ countdown }} 秒后重试</button>
		</view>
		<view class="input-container">
			<input v-model="code" type="text" placeholder="请输入验证码" class="input" />
		</view>
		<view class="input-container">
			<input v-model="pwd" type="password" placeholder="请输入密码" class="input" />
		</view>
		<view class="input-container">
			<input v-model="rePwd" type="password" placeholder="请输入确认密码" class="input" />
		</view>
		<button @click="login" class="login-button">注册</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	let user = ref('')
	let email = ref('');
	let code = ref('');
	let pwd = ref('')
	let rePwd = ref('')
	let isCodeSent = ref(false)
	let countdown = ref(60)

	function login() {
		console.log("登录");
	}

	function sendCode() {
		// console.log("发送验证码");
		countdown.value = 60; // 重置倒计时为初始值
		isCodeSent.value = true; // 验证码已发送
		const timer = setInterval(() => {
			countdown.value--;
			if (countdown.value <= 0) {
				clearInterval(timer);
				isCodeSent.value = false; // 可以再次发送验证码
			}
		}, 1000);

	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f4f4f4;
	}

	.container {
		display: flex;
		flex-direction: column;
		margin-top: 150rpx;
		align-items: center;
		justify-content: center;

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
