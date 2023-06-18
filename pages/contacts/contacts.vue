<template>
	<view class="container">
		<view class="search">
			<view @click="toSearch" class="inp">
				<button type="default" @click="toAddFriends"> ※ 点击此处进行联系人搜索"</button>
			</view>
			<view class="btn">
				<button type="default" @click="toAddFriends">✚</button>
			</view>
		</view>
		<view @click="toNewFriends">
			<contac></contac>
		</view>
		<view class="messageList" v-for="i in 10" :key="i">
			<view @click="toOtherHome">
				<contac></contac>
			</view>
		</view>
	</view>
</template>

<script setup>
	function toSearch() {
		uni.navigateTo({
			url: "/pages/searchPage/searchPage"
		})
	}

	function toAddFriends() {
		uni.navigateTo({
			url: '/pages/addFrends/addFrends'
		})
	}

	function toNewFriends() {
		uni.navigateTo({
			url: '/pages/newFriends/newFriends'
		})
	}

	function toOtherHome() {
		uni.navigateTo({
			url: '/pages/otherPeapleHome/otherPeapleHome'
		})
	}
</script>

<style lang="scss" scoped>
	.container {
		.search {
			display: flex;
			height: 75rpx;
			line-height: 75rpx;
			align-items: center;
			justify-content: center;

			.inp {
				button {
					width: 650rpx;
					text-align: left;
					height: 75rpx;
					line-height: 75rpx;
					color: #ccc;
					background-color: #f4f4f4;
					font-size: 24rpx;
				}
			}

			.btn {
				button {
					line-height: 75rpx;
					height: 75rpx;
					width: 100rpx;
					margin: 0 10rpx;
				}
			}

		}

		.messageList {
			margin-top: 30rpx;
		}
	}
</style>
