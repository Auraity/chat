"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "textEdit",
  setup(__props) {
    let content = common_vendor.ref("");
    let isValid = common_vendor.ref(true);
    function publish() {
      formCheck();
      if (isValid.value) {
        common_vendor.index.switchTab({
          url: "/pages/trends/trends"
        });
      }
    }
    var textRegex = /^.{,1024}$/;
    function formCheck() {
      if (content.value === "" || content.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "不能为空",
          icon: "none"
        });
      } else {
        if (!textRegex.test(content.value)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "内容不能超过1024个字符",
            icon: "none"
          });
        }
      }
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
