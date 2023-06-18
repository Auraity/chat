<template>
	<view class="container">
		<!-- 搜索框 -->
		<view class="search-bar">
			<image class="search-icon" src="/static/icon/search.png"></image>
			<input class="search-input" type="text" placeholder="请输入搜索内容" @input="handleInput" />
			<button class="search-btn" @click="handleSearch">搜索</button>
		</view>
		<!-- 搜索出的好友 -->
		<addContact></addContact>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	.container {
		.search-bar {
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: 10rpx;
			border-radius: 8rpx;
			box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);

			.search-icon {
				width: 40rpx;
				height: 40rpx;
			}

			.search-input {
				flex: 1;
				margin-left: 10rpx;
				padding: 5rpx;
				border: none;
				outline: none;
				font-size: 24rpx;
				color: #333;
			}

			.search-btn {
				background-color: #f4f4f4;
				color: #0aa3b4;
				font-size: 24rpx;
				cursor: pointer;
			}
		}
	}
</style>
