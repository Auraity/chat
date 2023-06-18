"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "alterSign",
  setup(__props) {
    let newSign = common_vendor.ref();
    function changeSign() {
      console.log("新用户名:", this.newSign);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(newSign),
        b: common_vendor.o(($event) => common_vendor.isRef(newSign) ? newSign.value = $event.detail.value : newSign = $event.detail.value),
        c: common_vendor.o(changeSign)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/alterSign/alterSign.vue"]]);
wx.createPage(MiniProgramPage);
