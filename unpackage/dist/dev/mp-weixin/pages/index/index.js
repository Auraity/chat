"use strict";
const common_vendor = require("../../common/vendor.js");
const api_tabbar = require("../../api/tabbar.js");
require("../../api/request.js");
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
    let msgDa = common_vendor.ref([]);
    const msgApi = async () => {
      const res = await api_tabbar.msg();
      if (res.data.code == "200" || res.data.code == 200) {
        msgDa.value = res.data.data.list;
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    msgApi();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toSearch),
        b: common_vendor.p({
          msgdata: common_vendor.unref(msgDa)
        }),
        c: common_vendor.o(enterSocket)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/HXproject/Chat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
