"use strict";
const common_vendor = require("../../common/vendor.js");
const api_trends = require("../../api/trends.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_trendsListCop2 = common_vendor.resolveComponent("trendsListCop");
  _easycom_trendsListCop2();
}
const _easycom_trendsListCop = () => "../../components/trendsListCop/trendsListCop.js";
if (!Math) {
  _easycom_trendsListCop();
}
const _sfc_main = {
  __name: "trends",
  setup(__props) {
    function addTrends() {
      common_vendor.index.navigateTo({
        url: "/pages/textEdit/textEdit"
      });
    }
    let allFTrendsDa = common_vendor.ref([]);
    const allFTrendsApi = async () => {
      const res = await api_trends.allFTrends();
      if (res.data.code == "200" || res.data.code == 200) {
        allFTrendsDa.value = res.data.data.list;
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    allFTrendsApi();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(addTrends),
        b: common_vendor.p({
          allFTrendsDa: common_vendor.unref(allFTrendsDa)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c74d60ef"], ["__file", "D:/HXproject/Chat/pages/trends/trends.vue"]]);
wx.createPage(MiniProgramPage);
