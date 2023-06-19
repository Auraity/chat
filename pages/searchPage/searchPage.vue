<template>
	<view class="container">
		<!-- 搜索框 -->
		<view class="search-bar">
			<image class="search-icon" src="/static/icon/search.png"></image>
			<input class="search-input" type="text" placeholder="请输入搜索内容" @input="handleInput" />
			<button class="search-btn" @click="handleSearch">搜索</button>
		</view>

		<!-- 搜索结果 -->
		<view class="search-result">
			<view v-if="searchResults==false" class="empty">
				<text class="empty-text">暂无搜索结果~</text>
			</view>
			<view v-else class="result-item" v-for="(result, index) in searchResults" :key="index">
				<text class="result-text">{{ result }}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	let searchResults = ref(false)
</script>

<style lang="scss">
	.container {
		padding: 20rpx;
		background-color: #f5f5f5;
		height: 100vh;

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
				padding: 8rpx 16rpx;
				background-color: #0aa3b4;
				color: #fff;
				border: none;
				border-radius: 20rpx;
				font-size: 24rpx;
				cursor: pointer;
			}
		}

		.search-result {
			text-align: center;

			.loading {
				margin-top: 20rpx;

				.loading-text {
					color: #999;
					font-size: 24rpx;
				}
			}

			.empty {
				margin-top: 20rpx;

				.empty-text {
					color: #999;
					font-size: 24rpx;
				}
			}

			.result-item {
				margin-top: 10rpx;
				padding: 10rpx;
				background-color: #fff;
				box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
				border-radius: 8rpx;

				.result-text {
					color: #333;
				}
			}
		}
	}
</style>
