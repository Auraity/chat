"use strict";
const common_vendor = require("../../common/vendor.js");
const api_contacts = require("../../api/contacts.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "newFriends",
  props: ["newFriDa"],
  setup(__props) {
    const props = __props;
    let uId = common_vendor.ref("");
    common_vendor.index.getStorage({
      key: "user",
      success: (res) => {
        console.log(res, "id");
        uId.value = res.data.userId;
        console.log(uId.value);
      }
    });
    const upStatusApi = async (uid, fid, status) => {
      const res = await api_contacts.updateStatus(uid, fid, status);
      console.log(res, 111);
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
    function agreen(index) {
      upStatusApi(props.newFriDa[index].userId, props.newFriDa[index].friendId, 1);
    }
    function refuse(index) {
      upStatusApi(props.newFriDa[index].userId, props.newFriDa[index].friendId, 2);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.newFriDa, (item, i, i0) => {
          return common_vendor.e({
            a: item.friendHeadImgUrl,
            b: common_vendor.t(item.friendName),
            c: item.status == 0 && item.friendId == common_vendor.unref(uId)
          }, item.status == 0 && item.friendId == common_vendor.unref(uId) ? {
            d: common_vendor.o(($event) => agreen(i), i),
            e: common_vendor.o(($event) => refuse(i), i)
          } : {
            f: common_vendor.t(item.statusDescription)
          }, {
            g: i
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/components/newFriends/newFriends.vue"]]);
wx.createComponent(Component);
