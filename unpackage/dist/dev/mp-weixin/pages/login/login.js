"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
require("../../api/request.js");
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
    const loginApi = async () => {
      const res = await api_login.log(email.value, pwd.value);
      if (res.data.code == "200" || res.data.code == 200) {
        common_vendor.index.setStorage({
          key: "user",
          data: res.data.data
        });
        common_vendor.index.setStorage({
          key: "userId",
          data: 2
        });
        common_vendor.index.reLaunch({
          url: "/pages/index/index"
        });
      } else {
        common_vendor.index.showToast({
          title: "用户信息不正确",
          icon: "none"
        });
      }
    };
    function login() {
      formCheck();
      if (isValid.value) {
        loginApi();
      }
    }
    var emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    function formCheck() {
      if (email.value === "" || email.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "邮箱不能为空",
          icon: "none"
        });
        return;
      } else {
        if (!emailRegex.test(email.value)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "邮箱输入的格式不正确",
            icon: "none"
          });
          return;
        }
      }
      if (pwd.value === "" || pwd.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "密码不能为空",
          icon: "none"
        });
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
