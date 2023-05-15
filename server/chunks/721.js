"use strict";
exports.id = 721;
exports.ids = [721];
exports.modules = {

/***/ 1721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gK": () => (/* binding */ addProduct),
  "EX": () => (/* binding */ approveNode),
  "cT": () => (/* binding */ disapproveNode),
  "CS": () => (/* binding */ fetchUserInfo),
  "m7": () => (/* binding */ getAllNode),
  "Dg": () => (/* binding */ getAllProducts),
  "wv": () => (/* binding */ getProduct),
  "pH": () => (/* binding */ isRegistered),
  "W$": () => (/* binding */ newUser),
  "td": () => (/* binding */ nodes),
  "gD": () => (/* binding */ setRole),
  "Xx": () => (/* binding */ sign),
  "ap": () => (/* binding */ transferProduct),
  "kD": () => (/* binding */ verifyProduct)
});

// UNUSED EXPORTS: getNodeStatus

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./utils/request.ts

const reqUser = external_axios_default().create({
  baseURL: '/sign/WeBASE-Sign',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
});
const reqContract = external_axios_default().create({
  baseURL: '/contract/WeBASE-Front',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
}); // 拦截请求

reqUser.interceptors.request.use(config => {
  // 在请求被发送之前做一些处理
  console.log('请求拦截器被触发：', config);
  return config;
}, error => {
  // 对请求错误做些什么
  console.error('请求拦截器出错：', error);
  return Promise.reject(error);
});
reqContract.interceptors.request.use(config => {
  console.log('请求拦截器被触发：', config);
  return config;
}, error => {
  console.error('请求拦截器出错：', error);
  return Promise.reject(error);
}); // 拦截响应

reqUser.interceptors.response.use(response => {
  console.log('响应拦截器被触发：', response);
  return response.data;
}, error => {
  console.error('响应拦截器出错：', error);
  return Promise.reject(error.data);
});
reqContract.interceptors.response.use(response => {
  console.log('响应拦截器被触发：', response);
  return response.data;
}, error => {
  console.error('响应拦截器出错：', error);
  return Promise.reject(error.data);
});
// EXTERNAL MODULE: external "buffer"
var external_buffer_ = __webpack_require__(4293);
;// CONCATENATED MODULE: ./api/user.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const payload = {
  "groupId": 1,
  "contractName": "SupplyChain",
  "contractPath": "/SupplyChain",
  "version": "",
  "funcName": "isRegister",
  "contractAddress": "0x2193b14e975b761323f6b774e906765ebf815770",
  "contractAbi": [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "nodeAddress",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "enum SupplyChain.NodeType",
      "name": "nodeType",
      "type": "uint8"
    }],
    "name": "NodeCanceled",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "nodeAddress",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "enum SupplyChain.NodeType",
      "name": "nodeType",
      "type": "uint8"
    }],
    "name": "NodeRegistered",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "nodeAddress",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "enum SupplyChain.NodeType",
      "name": "nodeType",
      "type": "uint8"
    }],
    "name": "NodeVerified",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "string",
      "name": "productCode",
      "type": "string"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "nodeAddress",
      "type": "address"
    }],
    "name": "ProductInfoAdded",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "string",
      "name": "productCode",
      "type": "string"
    }],
    "name": "ProductInfoVerified",
    "type": "event"
  }, {
    "inputs": [{
      "internalType": "string",
      "name": "_productName",
      "type": "string"
    }, {
      "internalType": "string",
      "name": "_producerName",
      "type": "string"
    }, {
      "internalType": "string",
      "name": "_productionDate",
      "type": "string"
    }, {
      "internalType": "string",
      "name": "_location",
      "type": "string"
    }, {
      "internalType": "string",
      "name": "_batchNumber",
      "type": "string"
    }, {
      "internalType": "string[]",
      "name": "_ingredients",
      "type": "string[]"
    }],
    "name": "addProduct",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "admin",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_node",
      "type": "address"
    }],
    "name": "cancelNode",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getAllNode",
    "outputs": [{
      "components": [{
        "internalType": "address",
        "name": "nodeAddress",
        "type": "address"
      }, {
        "internalType": "enum SupplyChain.NodeType",
        "name": "nodeType",
        "type": "uint8"
      }, {
        "internalType": "bool",
        "name": "isRegistered",
        "type": "bool"
      }],
      "internalType": "struct SupplyChain.Node[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getAllProductHash",
    "outputs": [{
      "internalType": "uint256[]",
      "name": "",
      "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_productHash",
      "type": "uint256"
    }],
    "name": "getProduct",
    "outputs": [{
      "components": [{
        "internalType": "string",
        "name": "productName",
        "type": "string"
      }, {
        "internalType": "string",
        "name": "producerName",
        "type": "string"
      }, {
        "internalType": "string",
        "name": "productionDate",
        "type": "string"
      }, {
        "internalType": "string",
        "name": "location",
        "type": "string"
      }, {
        "internalType": "string",
        "name": "batchNumber",
        "type": "string"
      }, {
        "internalType": "string[]",
        "name": "ingredients",
        "type": "string[]"
      }],
      "internalType": "struct SupplyChain.ProductInfo",
      "name": "productInfo",
      "type": "tuple"
    }, {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "internalType": "bool",
      "name": "paused",
      "type": "bool"
    }, {
      "components": [{
        "components": [{
          "internalType": "address",
          "name": "nodeAddress",
          "type": "address"
        }, {
          "internalType": "enum SupplyChain.NodeType",
          "name": "nodeType",
          "type": "uint8"
        }, {
          "internalType": "bool",
          "name": "isRegistered",
          "type": "bool"
        }],
        "internalType": "struct SupplyChain.Node",
        "name": "node",
        "type": "tuple"
      }, {
        "internalType": "bool",
        "name": "isVerified",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }],
      "internalType": "struct SupplyChain.ChainTrace[]",
      "name": "chainTraces",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_node",
      "type": "address"
    }],
    "name": "isRegister",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "name": "nodes",
    "outputs": [{
      "internalType": "address",
      "name": "nodeAddress",
      "type": "address"
    }, {
      "internalType": "enum SupplyChain.NodeType",
      "name": "nodeType",
      "type": "uint8"
    }, {
      "internalType": "bool",
      "name": "isRegistered",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "enum SupplyChain.NodeType",
      "name": "_nodeType",
      "type": "uint8"
    }],
    "name": "registerNode",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_node",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "_productHash",
      "type": "uint256"
    }],
    "name": "transferProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_productHash",
      "type": "uint256"
    }],
    "name": "verifiedProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_node",
      "type": "address"
    }],
    "name": "verifyNode",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }],
  "useAes": false,
  "useCns": false,
  "cnsName": ""
};

const interact = (signUserId, funcName, funcParam) => {
  return reqContract.post('/trans/handleWithSign', _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, payload), {}, {
    signUserId,
    funcName
  }, (typeof funcParam === 'string' || typeof funcParam === 'number') && {
    funcParam: [funcParam]
  }), Array.isArray(funcParam) && {
    funcParam
  }), typeof funcParam === 'object' && !Array.isArray(funcParam) && {
    funcParam: Object.values(funcParam)
  }));
};

const newUser = (signUserId, appId = 'test') => reqUser.get('/user/newUser', {
  params: {
    signUserId,
    appId
  }
});
const fetchUserInfo = signUserId => {
  return reqUser.get(`/user/${signUserId}/userInfo`);
};
const sign = (signUserId, encodedDataStr) => {
  encodedDataStr = external_buffer_.Buffer.from(encodedDataStr).toString('hex');
  return reqUser.post(`/sign`, {
    signUserId,
    encodedDataStr
  });
};
const isRegistered = (signUserId, addr) => {
  return interact(signUserId, 'isRegister', addr);
};
const setRole = (signUserId, roleId) => {
  return interact(signUserId, 'registerNode', roleId);
};
const getAllNode = () => {
  return interact('admin', 'getAllNode');
};
const nodes = (signUserId, addr) => {
  return interact(signUserId, 'nodes', addr);
};
const getNodeStatus = addr => {
  return interact('admin', 'nodes', addr);
};
const approveNode = addr => {
  return interact('admin', 'verifyNode', addr);
};
const disapproveNode = addr => {
  return interact('admin', 'cancelNode', addr);
};
const addProduct = (signUserId, product) => {
  return interact(signUserId, 'addProduct', product);
};
const getAllProducts = () => {
  return interact('admin', 'getAllProductHash');
};
const getProduct = productHash => {
  return interact('admin', 'getProduct', productHash);
};
const transferProduct = (signUserId, productHash) => {
  return interact(signUserId, 'transferProduct', productHash);
};
const verifyProduct = (signUserId, productHash) => {
  return interact(signUserId, 'verifiedProduct', productHash);
};

/***/ })

};
;