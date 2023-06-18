"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "alterPassword",
  setup(__props) {
    let email = common_vendor.ref("");
    common_vendor.ref("");
    let pwd = common_vendor.ref("");
    let rePwd = common_vendor.ref("");
    let isCodeSent = common_vendor.ref(false);
    let countdown = common_vendor.ref(60);
    function login() {
      console.log("登录");
    }
    function sendCode() {
      countdown.value = 60;
      isCodeSent.value = true;
      const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
          clearInterval(timer);
          isCodeSent.value = false;
        }
      }, 1e3);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(email),
        b: common_vendor.o(($event) => common_vendor.isRef(email) ? email.value = $event.detail.value : email = $event.detail.value),
        c: !common_vendor.unref(isCodeSent)
      }, !common_vendor.unref(isCodeSent) ? {
        d: common_vendor.o(sendCode)
      } : {
        e: common_vendor.t(common_vendor.unref(countdown)),
        f: common_vendor.o(sendCode)
      }, {
        g: common_vendor.unref(pwd),
        h: common_vendor.o(($event) => common_vendor.isRef(pwd) ? pwd.value = $event.detail.value : pwd = $event.detail.value),
        i: common_vendor.unref(rePwd),
        j: common_vendor.o(($event) => common_vendor.isRef(rePwd) ? rePwd.value = $event.detail.value : rePwd = $event.detail.value),
        k: common_vendor.o(login)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18ccd0ae"], ["__file", "D:/HXproject/Chat/pages/alterPassword/alterPassword.vue"]]);
wx.createPage(MiniProgramPage);
