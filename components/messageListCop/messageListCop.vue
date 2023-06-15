<template>
	<view class="card">
		<image class="thumbnail" src="/static/logo.png" />
		<view class="content">
			<text class="title"> 姓名 </text><br />
			<text class="description"> description </text>
		</view>
	</view>
</template>


<script setup>
</script>

<style lang="scss">
	.card {
		display: flex;
		align-items: center;
		// padding: 10rpx;
		padding: 0;
		margin: 20rpx 40rpx;

		.thumbnail {
			width: 100rpx;
			height: 100rpx;
			// object-fit: cover;
			margin-right: 20rpx;
		}

		.content {
			flex: 1;
			border-bottom: 1rpx solid #dddddd;
			height: 100rpx;

			.title {
				font-size: 34rpx;
				font-weight: bold;
			}

			.description {
				font-size: 28rpx;
				color: #666;

			}
		}
	}
</style>
