"use strict";
const common_vendor = require("../../common/vendor.js");
const api_my = require("../../api/my.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "myTrends",
  setup(__props) {
    let myTrendsDa = common_vendor.ref([]);
    common_vendor.index.getStorage({
      key: "user",
      success: function(res) {
        myTrendsApi(res.data.userId);
      }
    });
    const myTrendsApi = async (friendId) => {
      const res = await api_my.myTrends(friendId);
      if (res.data.code == "200" || res.data.code == 200) {
        myTrendsDa.value = res.data.data.list;
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(myTrendsDa), (item, i, i0) => {
          return {
            a: item.userHeadImgUrl,
            b: common_vendor.t(item.username),
            c: common_vendor.t(item.content),
            d: common_vendor.t(item.createTime),
            e: i
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/myTrends/myTrends.vue"]]);
wx.createPage(MiniProgramPage);
