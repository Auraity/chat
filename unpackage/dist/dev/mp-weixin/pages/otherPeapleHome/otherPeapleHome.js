"use strict";
const common_vendor = require("../../common/vendor.js");
const api_contacts = require("../../api/contacts.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "otherPeapleHome",
  props: ["fid"],
  setup(__props) {
    const props = __props;
    common_vendor.ref({
      name: "姓名",
      logo: "../../static/logo.png",
      email: "johndoe@example.com",
      bio: "Hello, I am John Doe"
    });
    function Delete() {
      deleteFidApi(props.fid);
    }
    function Message() {
      common_vendor.index.navigateTo({
        url: "/pages/WebSocket/WebSocket"
      });
    }
    function toHisTrends(fid) {
      common_vendor.index.navigateTo({
        url: `/pages/hisTrends/hisTrends?fid=${fid}`
      });
    }
    let hisHomeDa = common_vendor.ref([]);
    const hisHomeApi = async (friendId) => {
      const res = await api_contacts.hisHome(friendId);
      if (res.data.code == "200" || res.data.code == 200) {
        hisHomeDa.value = res.data.data;
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    const deleteFidApi = async (friendId) => {
      const res = await api_contacts.deleteFid(friendId);
      if (res.data.code == "200" || res.data.code == 200) {
        common_vendor.index.showToast({
          title: "删除成功",
          icon: "none"
        });
        common_vendor.index.switchTab({
          url: "/pages/contacts/contacts"
        });
      } else {
        common_vendor.index.showToast({
          title: "删除失败",
          icon: "none"
        });
      }
    };
    hisHomeApi(props.fid);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(hisHomeDa).friendHeadImgUrl,
        b: common_vendor.t(common_vendor.unref(hisHomeDa).friendName),
        c: common_vendor.t(common_vendor.unref(hisHomeDa).friendEmail),
        d: common_vendor.t(common_vendor.unref(hisHomeDa).friendIntroduction),
        e: common_vendor.o(($event) => toHisTrends(props.fid)),
        f: common_vendor.o(Message),
        g: common_vendor.o(Delete)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/otherPeapleHome/otherPeapleHome.vue"]]);
wx.createPage(MiniProgramPage);
