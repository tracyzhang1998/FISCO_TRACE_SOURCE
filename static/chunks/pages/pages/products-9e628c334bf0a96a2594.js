(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{4703:function(e,t,n){"use strict";n.r(t);var r=n(6311),s=n(2809),a=n(266),c=n(809),l=n.n(c),i=n(7294),o=n(3651),d=n(4372),u=n(8196),x=n(1721),p=n(5893);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=(0,i.useState)([]),t=e[0],n=e[1],s=(0,i.useState)({productName:"",producerName:"",productionDate:"",location:"",batchNumber:"",ingredients:[]}),c=s[0],h=s[1],j=(0,i.useState)(""),f=j[0],b=j[1],g=(0,i.useState)({productInfo:{productName:"",producerName:"",productionDate:"",location:"",batchNumber:"",ingredients:[]},productHash:"",owner:"",paused:!1,chainTraces:[]}),N=g[0],v=g[1],T=(0,i.useState)(!1),w=T[0],C=T[1],I=(0,i.useState)(!1),O=I[0],k=I[1],y=(0,i.useState)(!1),D=y[0],S=y[1];function M(e,t){"0"!==localStorage.getItem("isRegister")?1===e?C(!0):2===e?(v(t),k(!0)):3===e&&(v(t),S(!0)):alert("\u672a\u5ba1\u6838\u901a\u8fc7\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\uff01")}function R(e){1===e?C(!1):2===e?k(!1):3===e&&S(!1)}function _(){return B.apply(this,arguments)}function B(){return(B=(0,a.Z)(l().mark((function e(){var t,s,a,c,i,o,d,u,p,h,m,j,f,b,g;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Dg)();case 2:t=e.sent,s=[],s=H(t[0]),a=[],c=0;case 7:if(!(c<s.length)){e.next=26;break}return e.next=10,(0,x.wv)(s[c]);case 10:i=e.sent,o=(0,r.Z)(i,4),d=o[0],u=o[1],p=o[2],h=o[3],console.log("productInfo===: ",d),m=JSON.parse(d),console.log("info===: ",m),j={productName:m[0],producerName:m[1],productionDate:m[2],location:m[3],batchNumber:m[4],ingredients:m[5]},f=JSON.parse(h),(b=f.map((function(e){var t=(0,r.Z)(e,3),n=t[0],s=t[1],a=t[2];return{node:{nodeAddress:n[0],nodeType:n[1],isRegistered:n[2]},isVerified:s,timestamp:a}})))[0].node.nodeAddress===localStorage.getItem("address")&&(g={productInfo:j,productHash:s[c],owner:u,paused:p,chainTraces:b},a.push(g));case 23:c++,e.next=7;break;case 26:n(a);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)((function(){"1"===localStorage.getItem("nodeType")?(alert("\u60a8\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u8be5\u9875\u9762\uff01"),window.location.href="/pages"):_()}),[]);var H=function(e){return e.replace(/\[(.*)\]/,"$1").split(",").map((function(e){return e.trim()}))};function P(){return(P=(0,a.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c.productName.trim()){e.next=3;break}return alert("\u4ea7\u54c1\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"),e.abrupt("return");case 3:if(""!==c.producerName.trim()){e.next=6;break}return alert("\u751f\u4ea7\u5546\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"),e.abrupt("return");case 6:if(""!==c.productionDate.trim()){e.next=9;break}return alert("\u751f\u4ea7\u65e5\u671f\u4e0d\u80fd\u4e3a\u7a7a"),e.abrupt("return");case 9:if(""!==c.location.trim()){e.next=12;break}return alert("\u4ea7\u5730\u4e0d\u80fd\u4e3a\u7a7a"),e.abrupt("return");case 12:if(""!==c.batchNumber.trim()){e.next=15;break}return alert("\u6279\u6b21\u7f16\u53f7\u4e0d\u80fd\u4e3a\u7a7a"),e.abrupt("return");case 15:if(0!==c.ingredients.length){e.next=18;break}return alert("\u539f\u6599\u6e05\u5355\u4e0d\u80fd\u4e3a\u7a7a"),e.abrupt("return");case 18:return e.next=20,(0,x.gK)(localStorage.getItem("signUserId"),c);case 20:if(!(t=e.sent).statusOK){e.next=28;break}return alert("\u6dfb\u52a0\u6210\u529f"),R(1),e.next=26,_();case 26:e.next=29;break;case 28:alert("\u6dfb\u52a0\u5931\u8d25\uff01\u9519\u8bef\u4fe1\u606f\uff1a"+t.message);case 29:return e.next=31,_();case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(){var e=(0,a.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.ap)(localStorage.getItem("signUserId"),[f,t]);case 2:if(!(n=e.sent).statusOK){e.next=10;break}return alert("\u6d41\u8f6c\u6210\u529f"),e.next=7,_();case 7:R(2),e.next=11;break;case 10:alert("\u6d41\u8f6c\u5931\u8d25\uff01\u9519\u8bef\u4fe1\u606f\uff1a"+n.message);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsxs)(u.Z,{children:[(0,p.jsx)(d.Z,{children:"\u4ea7\u54c1\u7ba1\u7406"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)(o.Modal,{onClose:function(){return R(1)},isOpen:w,children:[(0,p.jsx)(o.ModalHeader,{children:"\u6dfb\u52a0\u4ea7\u54c1"}),(0,p.jsxs)(o.ModalBody,{children:[(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u4ea7\u54c1\u540d\u79f0"}),(0,p.jsx)(o.Input,{value:c.productName,onChange:function(e){return h(m(m({},c),{},{productName:e.target.value}))}})]}),(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u751f\u4ea7\u5546\u540d\u79f0"}),(0,p.jsx)(o.Input,{value:c.producerName,onChange:function(e){return h(m(m({},c),{},{producerName:e.target.value}))}})]}),(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u751f\u4ea7\u65e5\u671f"}),(0,p.jsx)(o.Input,{value:c.productionDate,onChange:function(e){return h(m(m({},c),{},{productionDate:e.target.value}))}})]}),(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u4ea7\u5730"}),(0,p.jsx)(o.Input,{value:c.location,onChange:function(e){return h(m(m({},c),{},{location:e.target.value}))}})]}),(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u6279\u6b21\u7f16\u53f7"}),(0,p.jsx)(o.Input,{value:c.batchNumber,onChange:function(e){return h(m(m({},c),{},{batchNumber:e.target.value}))}})]}),(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u539f\u6599\u6e05\u5355"}),(0,p.jsx)(o.Input,{value:c.ingredients,onChange:function(e){return h(m(m({},c),{},{ingredients:e.target.value.split(",")}))}}),(0,p.jsx)("br",{}),"\u591a\u79cd\u539f\u6599\u4f7f\u7528\u82f1\u6587\u9017\u53f7\uff08,\uff09\u5206\u9694"]})]}),(0,p.jsx)(o.ModalFooter,{children:(0,p.jsx)(o.Button,{onClick:function(){return P.apply(this,arguments)},children:"\u6dfb\u52a0\u4ea7\u54c1"})})]}),(0,p.jsxs)(o.Modal,{onClose:function(){return R(2)},isOpen:O,children:[(0,p.jsx)(o.ModalHeader,{children:"\u6d41\u8f6c\u4ea7\u54c1"}),(0,p.jsxs)(o.ModalBody,{children:[(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u4ea7\u54c1\u540d\u79f0\uff1a"}),N.productInfo.productName]}),(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u4ea7\u54c1\u54c8\u5e0c\uff1a"}),N.productHash]}),(0,p.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,p.jsx)("span",{className:"w-20 text-sm",children:"\u6d41\u901a\u5546\u8282\u70b9\u5730\u5740\uff1a"}),(0,p.jsx)(o.Input,{name:"transferNewAddr",value:f,onChange:function(e){return b(e.target.value)}})]})]}),(0,p.jsx)(o.ModalFooter,{children:(0,p.jsx)(o.Button,{onClick:function(){return E(N.productHash)},children:"\u6d41\u8f6c"})})]}),(0,p.jsxs)(o.Modal,{onClose:function(){return R(3)},isOpen:D,children:[(0,p.jsx)(o.ModalHeader,{children:"\u4ea7\u54c1\u8be6\u60c5"}),(0,p.jsx)(o.ModalBody,{children:(0,p.jsx)(o.Table,{children:(0,p.jsxs)(o.TableBody,{children:[(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:"\u4ea7\u54c1\u540d\u79f0"}),(0,p.jsx)(o.TableCell,{children:N.productInfo.productName})]}),(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:"\u751f\u4ea7\u5546\u540d\u79f0"}),(0,p.jsx)(o.TableCell,{children:N.productInfo.producerName})]}),(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:"\u751f\u4ea7\u65e5\u671f"}),(0,p.jsx)(o.TableCell,{children:N.productInfo.productionDate})]}),(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:"\u4ea7\u5730"}),(0,p.jsx)(o.TableCell,{children:N.productInfo.location})]}),(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:"\u6279\u6b21\u7f16\u53f7"}),(0,p.jsx)(o.TableCell,{children:N.productInfo.batchNumber})]}),(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:"\u539f\u6599\u6e05\u5355"}),(0,p.jsx)(o.TableCell,{children:N.productInfo.ingredients})]}),(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:"\u4ea7\u54c1\u54c8\u5e0c"}),(0,p.jsx)(o.TableCell,{children:N.productHash})]}),(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:"\u4ea7\u54c1\u6d41\u901a\u8be6\u60c5"}),(0,p.jsx)(o.TableCell,{children:N.chainTraces.map((function(e,t){return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{children:(0,p.jsx)("b",{children:0===t?"\u51fa\u5382":"\u7b2c "+t+" \u6b21\u6d41\u901a"})}),(0,p.jsxs)("div",{children:["\u8282\u70b9\u5730\u5740\uff1a",e.node.nodeAddress]}),(0,p.jsxs)("div",{children:["\u8282\u70b9\u7c7b\u578b\uff1a",0==e.node.nodeType?"\u751f\u4ea7\u5546":1===e.node.nodeType?"\u6d41\u901a\u5546":"Regulator"]}),(0,p.jsxs)("div",{children:["\u8282\u70b9\u72b6\u6001\uff1a",e.node.isRegistered?"\u5df2\u5ba1\u6838":"\u672a\u5ba1\u6838"]}),(0,p.jsxs)("div",{children:["\u6d41\u901a\u65f6\u95f4\uff1a","".concat(new Date(e.timestamp).getFullYear(),"-").concat(new Date(e.timestamp).getMonth()+1,"-").concat(new Date(e.timestamp).getDate()," ").concat(new Date(e.timestamp).getHours(),":").concat(new Date(e.timestamp).getMinutes(),":").concat(new Date(e.timestamp).getSeconds())]}),(0,p.jsxs)("div",{children:["\u6d41\u901a\u72b6\u6001\uff1a",e.isVerified?"\u5df2\u9a8c\u8bc1":"\u672a\u9a8c\u8bc1"]})]},t)}))})]})]})})})]})]}),(0,p.jsx)("div",{className:"mt-4 flex items-start",children:(0,p.jsx)(o.Button,{onClick:function(){return M(1,N)},children:"\u6dfb\u52a0\u4ea7\u54c1"})}),(0,p.jsx)(o.TableContainer,{className:"mb-8",children:(0,p.jsxs)(o.Table,{children:[(0,p.jsx)(o.TableHeader,{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)(o.TableCell,{children:"\u4ea7\u54c1\u540d\u79f0"}),(0,p.jsx)(o.TableCell,{children:"\u751f\u4ea7\u5546\u540d\u79f0"}),(0,p.jsx)(o.TableCell,{children:"\u751f\u4ea7\u65e5\u671f"}),(0,p.jsx)(o.TableCell,{children:"\u4ea7\u5730"}),(0,p.jsx)(o.TableCell,{children:"\u6279\u6b21\u7f16\u53f7"}),(0,p.jsx)(o.TableCell,{children:"\u64cd\u4f5c"})]})}),(0,p.jsx)(o.TableBody,{children:t.map((function(e,t){return(0,p.jsxs)(o.TableRow,{children:[(0,p.jsx)(o.TableCell,{children:(0,p.jsx)("div",{className:"flex items-center text-sm",children:e.productInfo.productName})}),(0,p.jsx)(o.TableCell,{children:(0,p.jsx)("div",{className:"flex items-center text-sm",children:e.productInfo.producerName})}),(0,p.jsx)(o.TableCell,{children:(0,p.jsx)("div",{className:"flex items-center text-sm",children:e.productInfo.productionDate})}),(0,p.jsx)(o.TableCell,{children:(0,p.jsx)("div",{className:"flex items-center text-sm",children:e.productInfo.location})}),(0,p.jsx)(o.TableCell,{children:(0,p.jsx)("div",{className:"flex items-center text-sm",children:e.productInfo.batchNumber})}),(0,p.jsx)(o.TableCell,{children:(0,p.jsxs)("div",{className:"flex items-center text-sm",children:[(0,p.jsx)(o.Button,{onClick:function(){return M(3,e)},children:" \u8be6\u60c5 "}),"\xa0\xa0",1==e.chainTraces.length?(0,p.jsx)(o.Button,{onClick:function(){return M(2,e)},children:" \u6d41\u8f6c "}):""]})})]},t)}))})]})})]})}},8147:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/products",function(){return n(4703)}])}},function(e){e.O(0,[442,196,316,774,888,179],(function(){return t=8147,e(e.s=t);var t}));var t=e.O();_N_E=t}]);