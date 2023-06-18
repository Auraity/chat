"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "alterUserName",
  setup(__props) {
    let newUsername = common_vendor.ref("");
    let isValid = common_vendor.ref(true);
    function changeUsername() {
      formCheck();
      if (isValid.value) {
        common_vendor.index.switchTab({
          url: "/pages/my/my"
        });
      }
    }
    var usernameRegex = /^.{2,16}$/;
    function formCheck() {
      if (user.value === "" || user.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "用户名不能为空",
          icon: "none"
        });
      } else {
        if (!usernameRegex.test(user.value)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "用户名为2~16位任意字符",
            icon: "none"
          });
        }
      }
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
