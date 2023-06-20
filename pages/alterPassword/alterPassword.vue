/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<view class="input-email">
			<input v-model="email" type="text" placeholder="请输入邮箱验证码" class="emailInput" />
			<button class="codeCli" @click="sendCode" v-if="!isCodeSent">验证码</button>
			<button class="codeSecond" @click="sendCode" v-else>{{ countdown }} 秒后重试</button>
		</view>
		<view class="input-container">
			<input v-model="pwd" type="password" placeholder="请输入新密码" class="input" />
		</view>
		<view class="input-container">
			<input v-model="rePwd" type="password" placeholder="请输入确认密码" class="input" />
		</view>
		<button @click="confirm" class="login-button">确认</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		echeck,
		forgetPwd
	} from '../../api/login.js'
	let email = ref('');
	let code = ref('');
	let pwd = ref('')
	let rePwd = ref('')
	let isCodeSent = ref(false)
	let countdown = ref(60)

	let isValid = ref(true)

	function confirm() {
		formCheck()
		if (isValid.value) {
			uni.reLaunch({
				url: '/pages/login/login'
			})
		}
	}

	// 表单校验
	var usernameRegex = /^.{2,16}$/;
	var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var pwdRegex = /^.{4,}$/;
	var codeRegex = /^[A-Za-z0-9]{4}$/;

	function formCheck() {
		// 邮箱校验		
		if (email.value === '' || email.value === null) {
			isValid.value = false;
			uni.showToast({
				title: '邮箱不能为空',
				icon: 'none'
			});
			return;
		} else {
			if (!emailRegex.test(email.value)) {
				isValid.value = false;
				uni.showToast({
					title: '邮箱输入格式不正确',
					icon: 'none'
				});
				return;
			}
		}

		// 验证码校验
		if (code.value === '' || code.value === null) {
			isValid.value = false;
			uni.showToast({
				title: '验证码不能为空',
				icon: 'none'
			});
			return;
		} else {
			if (!codeRegex.test(code.value)) {
				isValid.value = false;
				uni.showToast({
					title: '验证码输入不正确',
					icon: 'none'
				});
				return;
			}

		}

		// 密码校验
		if (pwd.value === '' || pwd.value === null) {
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
			if (rePwd.value !== pwd.value) {
				isValid.value = false;
				uni.showToast({
					title: '确认密码与密码不相同',
					icon: 'none'
				});
			}
		}
	}

	function sendCode() {
		countdown.value = 60; // 重置倒计时为初始值
		isCodeSent.value = true; // 验证码已发送
		const timer = setInterval(() => {
			countdown.value--;
			if (countdown.value <= 0) {
				clearInterval(timer);
				isCodeSent.value = false; // 可以再次发送验证码
			}
		}, 1000);

		uni.getStorage({
			key: 'user',
			success: function(res) {
				echeckApi('updatePassword', res.data.email)
			}
		})

	}
	// 调用接口
	let codeSucc = ref(false)
	const echeckApi = async (forPwd, email) => {
		const res = await echeck(forPwd, email);
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
	const forgetPwdApi = async (data) => {
		const res = await forgetPwd(data);
		// console.log(res, 222);
		if (res.data.code == "200" || res.data.code == 200) {
			uni.showToast({
				title: '修改密码成功',
				icon: 'none'
			});
			uni.reLaunch({
				url: '/pages/login/login'
			})
		} else {
			uni.showToast({
				title: '修改失败',
				icon: 'none'
			});
		}
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
