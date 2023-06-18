"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let email = common_vendor.ref("");
    let pwd = common_vendor.ref("");
    function toRegister() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    }
    function toFogPwd() {
      common_vendor.index.navigateTo({
        url: "/pages/forgetPwd/forgetPwd"
      });
    }
    let isValid = common_vendor.ref(true);
    function login() {
      formCheck();
      if (isValid.value) {
        common_vendor.index.reLaunch({
          url: "/pages/index/index"
        });
      }
    }
    var emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    var pwdRegex = /^.{4,}$/;
    function formCheck() {
      if (email.value === "" || email.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "邮箱不能为空",
          icon: "none"
        });
      } else {
        if (!emailRegex.test(email.value)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "邮箱输入的格式不正确",
            icon: "none"
          });
        }
      }
      if (pwd.value === "" || pwd.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "密码不能为空",
          icon: "none"
        });
      } else {
        if (!pwdRegex.test(pwd.value)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "密码至少输入4位",
            icon: "none"
          });
        }
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(email),
        b: common_vendor.o(($event) => common_vendor.isRef(email) ? email.value = $event.detail.value : email = $event.detail.value),
        c: common_vendor.unref(pwd),
        d: common_vendor.o(($event) => common_vendor.isRef(pwd) ? pwd.value = $event.detail.value : pwd = $event.detail.value),
        e: common_vendor.o(toRegister),
        f: common_vendor.o(toFogPwd),
        g: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
