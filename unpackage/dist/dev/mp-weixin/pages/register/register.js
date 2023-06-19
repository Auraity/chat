"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "register",
  setup(__props) {
    let userData = common_vendor.reactive({
      username: "",
      email: "",
      emailVerificationCode: "",
      password: ""
    });
    let rePwd = common_vendor.ref("");
    let isCodeSent = common_vendor.ref(false);
    let countdown = common_vendor.ref(60);
    let isValid = common_vendor.ref(true);
    var usernameRegex = /^.{2,16}$/;
    var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var codeRegex = /^[A-Za-z0-9]{4}$/;
    function formCheck() {
      if (userData.username === "" || userData.username === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "用户名不能为空",
          icon: "none"
        });
        return;
      } else {
        if (!usernameRegex.test(userData.username)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "用户名为2~16位任意字符",
            icon: "none"
          });
          return;
        }
      }
      if (userData.email === "" || userData.email === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "邮箱不能为空",
          icon: "none"
        });
        return;
      } else {
        if (!emailRegex.test(userData.email)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "邮箱输入格式不正确",
            icon: "none"
          });
          return;
        }
      }
      if (userData.emailVerificationCode === "" || userData.emailVerificationCode === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "验证码不能为空",
          icon: "none"
        });
        return;
      } else {
        if (!codeRegex.test(userData.emailVerificationCode)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "验证码输入不正确",
            icon: "none"
          });
          return;
        }
      }
      if (userData.password === "" || userData.password === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "密码不能为空",
          icon: "none"
        });
        return;
      }
      if (rePwd.value === "" || rePwd.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "确认密码不能为空",
          icon: "none"
        });
        return;
      } else {
        if (rePwd.value !== userData.password) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "确认密码与密码不相同",
            icon: "none"
          });
        }
      }
    }
    function sendCode() {
      console.log(userData.email, "canshu");
      echeckApi(userData.email);
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
    let codeSucc = common_vendor.ref(false);
    const echeckApi = async (email) => {
      const res = await api_login.echeck(email);
      console.log(res, 111);
      if (res.data.code == "200" || res.data.code == 200) {
        codeSucc.value = true;
      } else {
        common_vendor.index.showToast({
          title: "验证码获取失败",
          icon: "none"
        });
      }
    };
    const rgsApi = async (data) => {
      const res = await api_login.rgs(data);
      console.log(res, 222);
      if (res.data.code == "200" || res.data.code == 200) {
        common_vendor.index.showToast({
          title: "注册成功",
          icon: "none"
        });
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
      } else {
        common_vendor.index.showToast({
          title: "注册失败",
          icon: "none"
        });
      }
    };
    function register() {
      formCheck();
      if (isValid.value) {
        rgsApi(userData);
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userData).username,
        b: common_vendor.o(($event) => common_vendor.unref(userData).username = $event.detail.value),
        c: common_vendor.unref(userData).email,
        d: common_vendor.o(($event) => common_vendor.unref(userData).email = $event.detail.value),
        e: !common_vendor.unref(isCodeSent)
      }, !common_vendor.unref(isCodeSent) ? {
        f: common_vendor.o(sendCode)
      } : {
        g: common_vendor.t(common_vendor.unref(countdown)),
        h: common_vendor.o(sendCode)
      }, {
        i: common_vendor.unref(userData).emailVerificationCode,
        j: common_vendor.o(($event) => common_vendor.unref(userData).emailVerificationCode = $event.detail.value),
        k: common_vendor.unref(userData).password,
        l: common_vendor.o(($event) => common_vendor.unref(userData).password = $event.detail.value),
        m: common_vendor.unref(rePwd),
        n: common_vendor.o(($event) => common_vendor.isRef(rePwd) ? rePwd.value = $event.detail.value : rePwd = $event.detail.value),
        o: common_vendor.o(register)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
