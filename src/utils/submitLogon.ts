import axios from "axios";
// import VueAxios from "vue-axios";
// import AesHelper from "@/utils/aesHelper.js";
// import GetDefaultAesKey from "@/utils/getDefaultAesKey";
// import DownloadCsv from "@/utils/downloadCsv.js";
// import Toasts from "@/utils/toasts";
export default {
  // 公共的提交Api的轮子
  submitLogon(_self: any, key = "") {
    const requestBody = {
      head: {
        requestTerminalType: _self.$store.state.terminalType, // 告诉后端，我是否在微信浏览器里
      },
    };
    axios.post("/api/user", requestBody).then((response) => {
      console.log("回来的信息： ", response);
      // _self.$store.commit("acceptTokensFromApi", response.headers.xpagination); // 通过mutation获得tonkens数据，修改vuex+然后存储本地LocalStorage
      // _self.$store.commit("acceptPaginationFromApi", response.headers.xpagination); // 读取页码信息到vuex
      // if (response.headers.responseid === null || response.headers.responseid === undefined) {
      //   // 如果后端没有返回指令，直接返回
      //   return;
      // }
      // switch (response.headers.responseid) {
      //   case "1": // 1:成功[+返回一个List]
      //     _self.$store.commit("acceptUserFromApi", response.data[0]); // 通过mutation获得User数据，修改vuex+然后存储本地LocalStorage
      //     break;
      //   default:
      //     break;
      // }
    });
  },
};
