"use strict";
const common_vendor = require("../../common/vendor.js");
const api_contacts = require("../../api/contacts.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "hisTrends",
  props: ["fid"],
  setup(__props) {
    const props = __props;
    let hisTrendsDa = common_vendor.ref([]);
    const hisTrendsApi = async (friendId) => {
      const res = await api_contacts.hisTrends(friendId);
      console.log(res, 111);
      if (res.data.code == "200" || res.data.code == 200) {
        hisTrendsDa.value = res.data.data.list;
        console.log(hisTrendsDa, 222);
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    hisTrendsApi(props.fid);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(hisTrendsDa), (item, i, i0) => {
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/hisTrends/hisTrends.vue"]]);
wx.createPage(MiniProgramPage);
