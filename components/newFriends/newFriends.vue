<template>
	<view class="card">
		<view class="cleft">
			<image class="thumbnail" src="/static/logo.png" />
			<view class="content">
				<text class="title"> 姓名 </text>
			</view>
		</view>
		<view class="cright">
			<view v-if="1" class="allbtn">
				<button class="btn agreenbtn">同意</button>
				<button class="btn refusebtn">拒绝</button>
			</view>
			<text v-else>已同意</text>
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
			.allbtn {
				display: flex;

				.btn {
					// padding: 8rpx 16rpx;
					border: none;
					border-radius: 20rpx;
					font-size: 24rpx;
					cursor: pointer;

				}

				.agreenbtn {
					background-color: #0aa3b4;
					color: #fff;
				}

				.refusebtn {
					margin-left: 20rpx;
					background-color: #f4f4f4;
					color: #0aa3b4;
				}
			}
		}
	}
</style>
