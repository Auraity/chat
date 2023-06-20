"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "messageListCop",
  props: ["msgdata"],
  setup(__props) {
    const props = __props;
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    function enterSocket(sessionId) {
      common_vendor.index.navigateTo({
        url: `/pages/WebSocket/WebSocket?sessionId=${sessionId}`
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.msgdata, (item, i, i0) => {
          return {
            a: item.friends[0].friendHeadImgUrl,
            b: common_vendor.t(item.friends[0].friendName),
            c: common_vendor.t(item.lastMessage),
            d: common_vendor.t(item.lastActiveTime),
            e: common_vendor.o(($event) => enterSocket(item.sessionId), item.sessionId),
            f: item.sessionId
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/components/messageListCop/messageListCop.vue"]]);
wx.createComponent(Component);
