<template>
	<view class="card">
		<view class="cleft">
			<image class="thumbnail" src="/static/logo.png" />
			<view class="content">
				<text class="title"> 姓名 </text>
			</view>
		</view>
		<view class="cright">
			<button v-if="1" class="addbtn">添加</button>
			<text v-else>已添加</text>
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
		justify-content: space-between;

		.cleft {
			display: flex;
			margin-top: 20rpx;

			.thumbnail {
				width: 100rpx;
				height: 100rpx;
				// object-fit: cover;
				margin-right: 20rpx;
			}

			.content {
				flex: 3;
				height: 100rpx;

				.title {
					font-size: 34rpx;
					font-weight: bold;
					line-height: 100rpx;
				}
			}
		}

		.cright {
			.addbtn {
				// padding: 8rpx 16rpx;
				background-color: #0aa3b4;
				color: #fff;
				border: none;
				border-radius: 20rpx;
				font-size: 24rpx;
				cursor: pointer;
			}
		}
	}
</style>
