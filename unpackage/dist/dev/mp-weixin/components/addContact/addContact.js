"use strict";
const common_vendor = require("../../common/vendor.js");
const api_contacts = require("../../api/contacts.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "addContact",
  props: ["searchDa"],
  setup(__props) {
    const props = __props;
    const searchApi = async (userId2) => {
      const res = await api_contacts.addFri(userId2);
      if (res.data.code == "200" || res.data.code == 200) {
        common_vendor.index.switchTab({
          url: "/pages/contacts/contacts"
        });
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    let userId = props.searchDa.friendId;
    function addOption() {
      searchApi(userId);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.searchDa.friendHeadImgUrl,
        b: common_vendor.t(props.searchDa.friendName),
        c: !props.searchDa.whetherMyFriend
      }, !props.searchDa.whetherMyFriend ? {
        d: common_vendor.o(addOption)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/components/addContact/addContact.vue"]]);
wx.createComponent(Component);
