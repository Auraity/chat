/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="card">
		<image class="thumbnail" src="/static/logo.png" />
		<view class="content">
			<text class="title"> 姓名 </text><br />
			<text class="description">
				descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
			</text><br />
			<view class="operation">
				<text class="publishedDate">发布时间：</text>
				<text class="deleteTrend">删除</text>
			</view>
		</view>
	</view>
</template>


<script setup>
</script>

<style lang="scss">
	.card {
		display: flex;
		padding: 40rpx 0;
		margin: 20rpx 40rpx;
		border-bottom: 1rpx solid #dddddd;

		.thumbnail {
			width: 100rpx;
			height: 100rpx;
			margin-right: 20rpx;
		}

		.content {
			flex: 1;
			width: 500rpx;

			.title {
				font-size: 36rpx;
				font-weight: bold;
				color: #00557f;
			}

			.description {
				font-size: 30rpx;
				word-wrap: break-word;

			}

			.operation {
				display: flex;
				justify-content: space-between;

				.publishedDate {
					font-size: 24rpx;
					color: #666;
				}

				.deleteTrend {
					font-size: 24rpx;
					color: #666;
				}
			}

		}
	}
</style>
