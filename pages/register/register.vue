/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<view class="input-container">
			<input v-model="userData.username" type="text" placeholder="请输入2-16位用户名" class="input" />
		</view>
		<view class="input-email">
			<input v-model="userData.email" type="text" placeholder="请输入电子邮件" class="emailInput" />
			<button class="codeCli" @click="sendCode" v-if="!isCodeSent">验证码</button>
			<button class="codeSecond" @click="sendCode" v-else>{{ countdown }} 秒后重试</button>
		</view>
		<view class="input-container">
			<input v-model="userData.emailVerificationCode" type="text" placeholder="请输入验证码" class="input" />
		</view>
		<view class="input-container">
			<input v-model="userData.password" type="password" placeholder="请输入4位以上的密码" class="input" />
		</view>
		<view class="input-container">
			<input v-model="rePwd" type="password" placeholder="请输入确认密码" class="input" />
		</view>
		<button @click="register" class="login-button">注册</button>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	let userData = reactive({
		username: '',
		email: '',
		emailVerificationCode: '',
		password: '',
	})
	let rePwd = ref('')
	let isCodeSent = ref(false)
	let countdown = ref(60)
	let isValid = ref(true)



	// 表单校验
	var usernameRegex = /^.{2,16}$/;
	var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var pwdRegex = /^.{4,}$/;
	var codeRegex = /^[A-Za-z0-9]{4}$/;


	function formCheck() {
		// 用户名校验
		if (userData.username === '' || userData.username === null) {
			isValid.value = false;
			uni.showToast({
				title: '用户名不能为空',
				icon: 'none'
			});
			return;
		} else {
			if (!usernameRegex.test(userData.username)) {
				isValid.value = false;
				uni.showToast({
					title: '用户名为2~16位任意字符',
					icon: 'none'
				});
				return;
			}

		}

		// 邮箱校验		
		if (userData.email === '' || userData.email === null) {
			isValid.value = false;
			uni.showToast({
				title: '邮箱不能为空',
				icon: 'none'
			});
			return;
		} else {
			if (!emailRegex.test(userData.email)) {
				isValid.value = false;
				uni.showToast({
					title: '邮箱输入格式不正确',
					icon: 'none'
				});
				return;
			}

		}

		// 验证码校验
		if (userData.emailVerificationCode === '' || userData.emailVerificationCode === null) {
			isValid.value = false;
			uni.showToast({
				title: '验证码不能为空',
				icon: 'none'
			});
			return;
		} else {
			if (!codeRegex.test(userData.emailVerificationCode)) {
				isValid.value = false;
				uni.showToast({
					title: '验证码输入不正确',
					icon: 'none'
				});
				return;
			}

		}

		// 密码校验
		if (userData.password === '' || userData.password === null) {
			isValid.value = false;
			uni.showToast({
				title: '密码不能为空',
				icon: 'none'
			});
			return;
		}

		// 确认密码校验
		if (rePwd.value === '' || rePwd.value === null) {
			isValid.value = false;
			uni.showToast({
				title: '确认密码不能为空',
				icon: 'none'
			});
			return;
		} else {
			if (rePwd.value !== userData.password) {
				isValid.value = false;
				uni.showToast({
					title: '确认密码与密码不相同',
					icon: 'none'
				});
			}
		}
	}

	function sendCode() {
		console.log(userData.email, "canshu");
		echeckApi('register', userData.email)
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


	import {
		echeck,
		rgs
	} from '../../api/login.js'
	let codeSucc = ref(false)
	const echeckApi = async (forWhat, email) => {
		const res = await echeck(forWhat, email);
		// console.log(res, 111);
		if (res.data.code == "200" || res.data.code == 200) {
			codeSucc.value = true;
		} else {
			uni.showToast({
				title: '验证码获取失败',
				icon: 'none'
			});
		}
	}
	const rgsApi = async (data) => {
		const res = await rgs(data);
		// console.log(res, 222);
		if (res.data.code == "200" || res.data.code == 200) {
			uni.showToast({
				title: '注册成功',
				icon: 'none'
			});
			uni.reLaunch({
				url: '/pages/login/login'
			})
		} else {
			uni.showToast({
				title: '注册失败',
				icon: 'none'
			});
		}
	}

	function register() {
		formCheck()

		if (isValid.value) {
			rgsApi(userData)
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
