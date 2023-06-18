"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "alterUserName",
  setup(__props) {
    let newUsername = common_vendor.ref();
    function changeUsername() {
      console.log("新用户名:", this.newUsername);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(newUsername),
        b: common_vendor.o(($event) => common_vendor.isRef(newUsername) ? newUsername.value = $event.detail.value : newUsername = $event.detail.value),
        c: common_vendor.o(changeUsername)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/alterUserName/alterUserName.vue"]]);
wx.createPage(MiniProgramPage);
