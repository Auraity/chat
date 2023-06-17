<template>
	<view class="container">
		<view class="search">
			<input type="text" placeholder="     ※ 点击此处进行联系人搜索" />
			<button type="default">✚</button>
		</view>
		<contac></contac>
		<view class="messageList" v-for="i in 10" :key="i">
			<contac></contac>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.container {
		.search {
			display: flex;

			input {
				pointer-events: none;
				width: 600rpx;
				height: 80rpx;
				padding: 10rpx;
				border: 1rpx solid #dddddd;
				background-color: #f4f4f4;
				font-size: 24rpx;
			}

			button {
				width: 100rpx;
			}
		}

		.messageList {
			margin-top: 30rpx;
		}
	}
</style>
