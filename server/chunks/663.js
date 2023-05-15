"use strict";
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 4663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ saveUserInfo)
/* harmony export */ });
function saveUserInfo(userInfo) {
  localStorage.setItem('signUserId', userInfo.signUserId);
  localStorage.setItem('address', userInfo.address);
  localStorage.setItem('nodeType', userInfo.nodeType);
  localStorage.setItem('isRegister', userInfo.isRegister);
}

/***/ })

};
;