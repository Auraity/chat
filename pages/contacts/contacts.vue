/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<view class="search">
			<view @click="toSearch" class="inp">
				<button type="default" @click="toSearch"> ※ 点击此处进行联系人搜索"</button>
			</view>
			<view class="btn">
				<button type="default" @click="toAddFriends">✚</button>
			</view>
		</view>
		<view @click="toNewFriends">
			<contac :cotdata='addCot'></contac>
		</view>
		<view class="cotList" v-for="(item,i) in cotDa" :key="item.friendId">
			<view @click="toOtherHome(item.friendId)">
				<contac :cotdata='item'></contac>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue";
	import {
		cot
	} from '/api/tabbar.js'
	let cotDa = ref([])
	const cotApi = async () => {
		const res = await cot();
		// console.log(res, 111);
		if (res.data.code == "200" || res.data.code == 200) {
			cotDa.value = res.data.data.list;
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}
	cotApi()

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

	function toOtherHome(fid) {
		uni.navigateTo({
			url: `/pages/otherPeapleHome/otherPeapleHome?fid=${fid}`
		})
	}
	let addCot = reactive({
		"friendId": 0,
		"friendName": "添加好友",
		"friendHeadImgUrl": "/static/addFriends.png"
	})
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

		.cotList {
			margin-top: 30rpx;
		}
	}
</style>
