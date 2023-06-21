/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<view class="search" @click="toSearch">
			<input type="text" placeholder="     ※ 点击此处进行消息搜索" />
		</view>
		<view class="messageList">
			<messageListCop :msgdata='msgDa'></messageListCop>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import {
		msg
	} from '../../api/tabbar.js'


	function toSearch() {
		uni.navigateTo({
			url: "/pages/searchPage/searchPage"
		})
	}


	// 消息列表渲染
	let msgDa = ref([])
	const msgApi = async () => {
		const res = await msg();
		// console.log(res, 111);
		if (res.data.code == "200" || res.data.code == 200) {
			msgDa.value = res.data.data.list;
			// console.log(msgDa.value, 222);
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}
	msgApi()
</script>

<style lang="scss" scoped>
	.container {
		input {
			pointer-events: none;
			width: 750rpx;
			height: 80rpx;
			padding: 10rpx;
			border: 1rpx solid #dddddd;
			background-color: #f4f4f4;
			font-size: 24rpx;
		}

		.messageList {
			margin-top: 30rpx;
		}
	}
</style>
