"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "WebSocket",
  setup(__props) {
    const messages = [
      {
        sender: "other",
        avatar: "/static/addFriends.png",
        content: "你好？",
        time: "2023-09-09 09:30"
      },
      {
        sender: "me",
        avatar: "/static/logo.png",
        content: "你好，我有一个问题想请教你。",
        time: "2023-09-09 09:35"
      },
      {
        sender: "me",
        avatar: "/static/logo.png",
        content: "你好，我有一个问题想请教你。",
        time: "2023-09-09 09:35"
      },
      {
        sender: "me",
        avatar: "/static/logo.png",
        content: "你好，我有一个问题想请教你。",
        time: "2023-09-09 09:35"
      },
      {
        sender: "me",
        avatar: "/static/logo.png",
        content: "你好，我有一个问题想请教你我有一个问题想请教你。",
        time: "2023-09-09 09:35"
      },
      {
        sender: "other",
        avatar: "/static/addFriends.png",
        content: "你好，有什么可以帮到你的吗你好，有什么可以帮到你的吗？",
        time: "2023-09-09 09:38"
      },
      {
        sender: "other",
        avatar: "/static/addFriends.png",
        content: "你好，有什么可以帮到你的吗你好，有什么可以帮到你的吗？",
        time: "2023-09-09 09:38"
      },
      {
        sender: "other",
        avatar: "/static/addFriends.png",
        content: "你好，有什么可以帮到你的吗你好，有什么可以帮到你的吗？",
        time: "2023-09-09 09:38"
      },
      {
        sender: "other",
        avatar: "/static/addFriends.png",
        content: "你好，有什么可以帮到你的吗你好，有什么可以帮到你的吗？",
        time: "2023-09-09 09:38"
      },
      {
        sender: "other",
        avatar: "/static/addFriends.png",
        content: "你好，有什么可以帮到你的吗你好，有什么可以帮到你的吗？",
        time: "2023-09-09 09:38"
      },
      {
        sender: "me",
        avatar: "/static/logo.png",
        content: "你好，我有一个问题想请教你。",
        time: "2023-09-09 09:35"
      }
      // 添加更多聊天记录...
    ];
    let inputText = common_vendor.ref("");
    function toOtherHome() {
      common_vendor.index.navigateTo({
        url: "/pages/otherPeapleHome/otherPeapleHome"
      });
    }
    function toMyHome() {
      common_vendor.index.switchTab({
        url: "/pages/my/my"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(messages, (message, index, i0) => {
          return common_vendor.e({
            a: message.sender === "me"
          }, message.sender === "me" ? {
            b: common_vendor.t(message.content),
            c: common_vendor.t(message.time),
            d: message.avatar,
            e: common_vendor.o(toMyHome, index)
          } : {
            f: message.avatar,
            g: common_vendor.o(toOtherHome, index),
            h: common_vendor.t(message.content),
            i: common_vendor.t(message.time)
          }, {
            j: index
          });
        }),
        b: common_vendor.unref(inputText),
        c: common_vendor.o(($event) => common_vendor.isRef(inputText) ? inputText.value = $event.detail.value : inputText = $event.detail.value),
        d: common_vendor.o((...args) => _ctx.sendMessage && _ctx.sendMessage(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/WebSocket/WebSocket.vue"]]);
wx.createPage(MiniProgramPage);
