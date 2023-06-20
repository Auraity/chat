"use strict";
const common_vendor = require("../../common/vendor.js");
const api_sessions = require("../../api/sessions.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "WebSocket",
  props: ["sessionId"],
  setup(__props) {
    const props = __props;
    let inputText = common_vendor.ref("");
    function toOtherHome() {
      common_vendor.index.navigateTo({
        url: "/pages/otherPeapleHome/otherPeapleHome"
      });
    }
    let myId = common_vendor.ref(null);
    common_vendor.index.getStorage({
      key: "user",
      success: function(res) {
        myId.value = res.data.userId;
      }
    });
    function toMyHome() {
      common_vendor.index.switchTab({
        url: "/pages/my/my"
      });
    }
    let historyMsgDa = common_vendor.ref([]);
    const historyMsgApi = async (sessionId) => {
      const res = await api_sessions.historyMsg(sessionId);
      if (res.data.code == "200" || res.data.code == 200) {
        historyMsgDa.value = res.data.data.list;
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    historyMsgApi(props.sessionId);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(historyMsgDa), (item, i, i0) => {
          return common_vendor.e({
            a: item.fromUserId == common_vendor.unref(myId)
          }, item.fromUserId == common_vendor.unref(myId) ? {
            b: common_vendor.t(item.content),
            c: common_vendor.t(item.createTime),
            d: item.fromUserHeadImgUrl,
            e: common_vendor.o(toMyHome, item.messageId)
          } : {
            f: item.fromUserHeadImgUrl,
            g: common_vendor.o(toOtherHome, item.messageId),
            h: common_vendor.t(item.content),
            i: common_vendor.t(item.createTime)
          }, {
            j: item.messageId
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
