"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_trendsListCop2 = common_vendor.resolveComponent("trendsListCop");
  _easycom_trendsListCop2();
}
const _easycom_trendsListCop = () => "../../components/trendsListCop/trendsListCop.js";
if (!Math) {
  _easycom_trendsListCop();
}
const _sfc_main = {
  __name: "trends",
  setup(__props) {
    function addTrends() {
      common_vendor.index.navigateTo({
        url: "/pages/textEdit/textEdit"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(addTrends),
        b: common_vendor.f(5, (i, k0, i0) => {
          return {
            a: "c74d60ef-0-" + i0,
            b: i
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c74d60ef"], ["__file", "D:/HXproject/Chat/pages/trends/trends.vue"]]);
wx.createPage(MiniProgramPage);
