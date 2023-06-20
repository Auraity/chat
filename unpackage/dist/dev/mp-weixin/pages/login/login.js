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
        common_vendor.index.setStorageSync("user", res.data.data);
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
        common_vendor.index.showToast({
          title: "用户信息不正确",
          icon: "none"
        });
      }
    }
    var emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    function changeEmail(e) {
      email.value = e.detail.value;
    }
    function changePwd(e) {
      pwd.value = e.detail.value;
    }
    function formCheck() {
      isValid.value = true;
      if (email.value === "" || email.value == null) {
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
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeEmail),
        b: common_vendor.o(changePwd),
        c: common_vendor.o(toRegister),
        d: common_vendor.o(toFogPwd),
        e: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
