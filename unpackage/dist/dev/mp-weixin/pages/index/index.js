"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_messageListCop2 = common_vendor.resolveComponent("messageListCop");
  _easycom_messageListCop2();
}
const _easycom_messageListCop = () => "../../components/messageListCop/messageListCop.js";
if (!Math) {
  _easycom_messageListCop();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function toSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/searchPage/searchPage"
      });
    }
    function enterSocket() {
      common_vendor.index.navigateTo({
        url: "/pages/WebSocket/WebSocket"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toSearch),
        b: common_vendor.f(10, (i, k0, i0) => {
          return {
            a: "1cf27b2a-0-" + i0,
            b: common_vendor.o(enterSocket, i),
            c: i
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/HXproject/Chat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
