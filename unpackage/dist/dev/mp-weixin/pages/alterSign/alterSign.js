"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "alterSign",
  setup(__props) {
    let newSign = common_vendor.ref();
    let isValid = common_vendor.ref(true);
    function changeSign() {
      formCheck();
      if (isValid.value) {
        common_vendor.index.switchTab({
          url: "/pages/my/my"
        });
      }
    }
    var signRegex = /^.{,32}$/;
    function formCheck() {
      if (newSign.value === "" || newSign.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "不能为空",
          icon: "none"
        });
      } else {
        if (!signRegex.test(newSign.value)) {
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
        a: common_vendor.unref(newSign),
        b: common_vendor.o(($event) => common_vendor.isRef(newSign) ? newSign.value = $event.detail.value : newSign = $event.detail.value),
        c: common_vendor.o(changeSign)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/alterSign/alterSign.vue"]]);
wx.createPage(MiniProgramPage);
