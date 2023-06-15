"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "textEdit",
  setup(__props) {
    let content = common_vendor.ref("");
    function publish() {
      console.log("发布内容:", content.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(content),
        b: common_vendor.o(($event) => common_vendor.isRef(content) ? content.value = $event.detail.value : content = $event.detail.value),
        c: common_vendor.o(publish)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/textEdit/textEdit.vue"]]);
wx.createPage(MiniProgramPage);
