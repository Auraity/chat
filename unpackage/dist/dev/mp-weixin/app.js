"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./pages/register/register.js";
  "./pages/contacts/contacts.js";
  "./pages/trends/trends.js";
  "./pages/addFrends/addFrends.js";
  "./pages/textEdit/textEdit.js";
  "./pages/my/my.js";
  "./pages/myTrends/myTrends.js";
  "./pages/ChangePwd/ChangePwd.js";
  "./pages/forgetPwd/forgetPwd.js";
  "./pages/searchPage/searchPage.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
