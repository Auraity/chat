"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "register",
  setup(__props) {
    let user = common_vendor.ref("");
    let email = common_vendor.ref("");
    let code = common_vendor.ref("");
    let pwd = common_vendor.ref("");
    let rePwd = common_vendor.ref("");
    let isCodeSent = common_vendor.ref(false);
    let countdown = common_vendor.ref(60);
    let isValid = common_vendor.ref(true);
    function register() {
      formCheck();
      if (isValid.value) {
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
      }
    }
    var usernameRegex = /^.{2,16}$/;
    var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var pwdRegex = /^.{4,}$/;
    var codeRegex = /^[A-Za-z0-9]{4}$/;
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
            title: "邮箱输入格式不正确",
            icon: "none"
          });
        }
      }
      if (code.value === "" || code.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "验证码不能为空",
          icon: "none"
        });
      } else {
        if (!codeRegex.test(code.value)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "验证码输入不正确",
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
      if (rePwd.value === "" || rePwd.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "确认密码不能为空",
          icon: "none"
        });
      } else {
        if (rePwd.value !== pwd.value) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "确认密码与密码不相同",
            icon: "none"
          });
        }
      }
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
        a: common_vendor.unref(user),
        b: common_vendor.o(($event) => common_vendor.isRef(user) ? user.value = $event.detail.value : user = $event.detail.value),
        c: common_vendor.unref(email),
        d: common_vendor.o(($event) => common_vendor.isRef(email) ? email.value = $event.detail.value : email = $event.detail.value),
        e: !common_vendor.unref(isCodeSent)
      }, !common_vendor.unref(isCodeSent) ? {
        f: common_vendor.o(sendCode)
      } : {
        g: common_vendor.t(common_vendor.unref(countdown)),
        h: common_vendor.o(sendCode)
      }, {
        i: common_vendor.unref(code),
        j: common_vendor.o(($event) => common_vendor.isRef(code) ? code.value = $event.detail.value : code = $event.detail.value),
        k: common_vendor.unref(pwd),
        l: common_vendor.o(($event) => common_vendor.isRef(pwd) ? pwd.value = $event.detail.value : pwd = $event.detail.value),
        m: common_vendor.unref(rePwd),
        n: common_vendor.o(($event) => common_vendor.isRef(rePwd) ? rePwd.value = $event.detail.value : rePwd = $event.detail.value),
        o: common_vendor.o(register)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
