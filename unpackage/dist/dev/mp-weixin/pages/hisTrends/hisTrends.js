"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_trendsListCop2 = common_vendor.resolveComponent("trendsListCop");
  _easycom_trendsListCop2();
}
const _easycom_trendsListCop = () => "../../components/trendsListCop/trendsListCop.js";
if (!Math) {
  _easycom_trendsListCop();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(5, (i, k0, i0) => {
      return {
        a: "66cc7280-0-" + i0,
        b: i
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXproject/Chat/pages/hisTrends/hisTrends.vue"]]);
wx.createPage(MiniProgramPage);
