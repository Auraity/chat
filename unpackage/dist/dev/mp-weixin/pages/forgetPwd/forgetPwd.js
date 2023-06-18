"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "forgetPwd",
  setup(__props) {
    let email = common_vendor.ref("");
    let code = common_vendor.ref("");
    let pwd = common_vendor.ref("");
    let rePwd = common_vendor.ref("");
    let isCodeSent = common_vendor.ref(false);
    let countdown = common_vendor.ref(60);
    function confirm() {
      formCheck();
      if (isValid.value) {
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
      }
    }
    var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var pwdRegex = /^.{4,}$/;
    var codeRegex = /^[A-Za-z0-9]{4}$/;
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
        a: common_vendor.unref(email),
        b: common_vendor.o(($event) => common_vendor.isRef(email) ? email.value = $event.detail.value : email = $event.detail.value),
        c: !common_vendor.unref(isCodeSent)
      }, !common_vendor.unref(isCodeSent) ? {
        d: common_vendor.o(sendCode)
      } : {
        e: common_vendor.t(common_vendor.unref(countdown)),
        f: common_vendor.o(sendCode)
      }, {
        g: common_vendor.unref(code),
        h: common_vendor.o(($event) => common_vendor.isRef(code) ? code.value = $event.detail.value : code = $event.detail.value),
        i: common_vendor.unref(pwd),
        j: common_vendor.o(($event) => common_vendor.isRef(pwd) ? pwd.value = $event.detail.value : pwd = $event.detail.value),
        k: common_vendor.unref(rePwd),
        l: common_vendor.o(($event) => common_vendor.isRef(rePwd) ? rePwd.value = $event.detail.value : rePwd = $event.detail.value),
        m: common_vendor.o(confirm)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e334d760"], ["__file", "D:/HXproject/Chat/pages/forgetPwd/forgetPwd.vue"]]);
wx.createPage(MiniProgramPage);
