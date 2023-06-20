"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "forgetPwd",
  setup(__props) {
    let userData = common_vendor.reactive({
      email: "",
      code: "",
      pwd: ""
    });
    let rePwd = common_vendor.ref("");
    let isCodeSent = common_vendor.ref(false);
    let countdown = common_vendor.ref(60);
    let isValid = common_vendor.ref(true);
    var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var pwdRegex = /^.{4,}$/;
    var codeRegex = /^[A-Za-z0-9]{4}$/;
    function formCheck() {
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
      if (userData.code === "" || userData.code === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "验证码不能为空",
          icon: "none"
        });
        return;
      } else {
        if (!codeRegex.test(userData.code)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "验证码输入不正确",
            icon: "none"
          });
          return;
        }
      }
      if (userData.pwd === "" || userData.pwd === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "密码不能为空",
          icon: "none"
        });
        return;
      } else {
        if (!pwdRegex.test(userData.pwd)) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "密码至少输入4位",
            icon: "none"
          });
          return;
        }
      }
      if (rePwd.value === "" || rePwd.value === null) {
        isValid.value = false;
        common_vendor.index.showToast({
          title: "确认密码不能为空",
          icon: "none"
        });
        return;
      } else {
        if (rePwd.value !== userData.pwd) {
          isValid.value = false;
          common_vendor.index.showToast({
            title: "确认密码与密s码不相同",
            icon: "none"
          });
        }
      }
    }
    function sendCode() {
      echeckApi("updatePassword", userData.email);
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
    const echeckApi = async (forPwd, email) => {
      const res = await api_login.echeck(forPwd, email);
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
    const forgetPwdApi = async (data) => {
      const res = await api_login.forgetPwd(data);
      console.log(res, 222);
      if (res.data.code == "200" || res.data.code == 200) {
        common_vendor.index.showToast({
          title: "修改密码成功",
          icon: "none"
        });
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
      } else {
        common_vendor.index.showToast({
          title: "修改失败",
          icon: "none"
        });
      }
    };
    function confirm() {
      formCheck();
      if (isValid.value) {
        forgetPwdApi(userData);
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userData).email,
        b: common_vendor.o(($event) => common_vendor.unref(userData).email = $event.detail.value),
        c: !common_vendor.unref(isCodeSent)
      }, !common_vendor.unref(isCodeSent) ? {
        d: common_vendor.o(sendCode)
      } : {
        e: common_vendor.t(common_vendor.unref(countdown))
      }, {
        f: common_vendor.unref(userData).code,
        g: common_vendor.o(($event) => common_vendor.unref(userData).code = $event.detail.value),
        h: common_vendor.unref(userData).pwd,
        i: common_vendor.o(($event) => common_vendor.unref(userData).pwd = $event.detail.value),
        j: common_vendor.unref(rePwd),
        k: common_vendor.o(($event) => common_vendor.isRef(rePwd) ? rePwd.value = $event.detail.value : rePwd = $event.detail.value),
        l: common_vendor.o(confirm)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e334d760"], ["__file", "D:/HXproject/Chat/pages/forgetPwd/forgetPwd.vue"]]);
wx.createPage(MiniProgramPage);
