"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_messageListCop2 = common_vendor.resolveComponent("messageListCop");
  _easycom_messageListCop2();
}
const _easycom_messageListCop = () => "../../components/messageListCop/messageListCop.js";
if (!Math) {
  _easycom_messageListCop();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(10, (i, k0, i0) => {
      return {
        a: "1cf27b2a-0-" + i0,
        b: i
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/HXproject/Chat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
