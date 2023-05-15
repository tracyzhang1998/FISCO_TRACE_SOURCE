"use strict";
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 8196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ containers_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./context/SidebarContext.tsx
 // create context


const SidebarContext = /*#__PURE__*/external_react_default().createContext({
  isSidebarOpen: false,
  scrollY: {
    id: null,
    position: 0
  },
  closeSidebar: () => {},
  toggleSidebar: () => {},
  saveScroll: el => {}
});
const SidebarProvider = ({
  children
}) => {
  const {
    0: isSidebarOpen,
    1: setIsSidebarOpen
  } = (0,external_react_.useState)(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const defaultScrollY = (0,external_react_.useMemo)(() => {
    return {
      id: null,
      position: 0
    };
  }, []);
  const storageScrollY = (0,external_react_.useCallback)(() => {
    return JSON.parse(localStorage.getItem('sidebarScrollY') || JSON.stringify(defaultScrollY));
  }, [defaultScrollY]);
  const {
    0: scrollY,
    1: setScrollY
  } = (0,external_react_.useState)( false ? 0 : defaultScrollY);

  function saveScroll(el) {
    const id = (el === null || el === void 0 ? void 0 : el.id) || null;
    const position = (el === null || el === void 0 ? void 0 : el.scrollTop) || 0;
    setScrollY({
      id,
      position
    });
  }

  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, [scrollY]);
  (0,external_react_.useLayoutEffect)(() => {
    if (false) { var _document$getElementB2, _document$getElementB; }
  }, [scrollY, storageScrollY, isSidebarOpen]);
  const context = {
    isSidebarOpen,
    scrollY,
    toggleSidebar,
    closeSidebar,
    saveScroll
  };
  return /*#__PURE__*/jsx_runtime_.jsx(SidebarContext.Provider, {
    value: context,
    children: children
  });
};
/* harmony default export */ const context_SidebarContext = (SidebarContext);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./routes/sidebar.tsx
/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */
function routeIsActive(pathname, route) {
  if (route.checkActive) {
    return route.checkActive(pathname, route);
  }

  return route !== null && route !== void 0 && route.exact ? pathname == (route === null || route === void 0 ? void 0 : route.path) : route !== null && route !== void 0 && route.path ? pathname.indexOf(route.path) === 0 : false;
}
const routes = [{
  path: '/pages',
  // the url
  icon: 'HomeIcon',
  // the component being exported from icons/index.js
  name: '主页',
  // name that appear in Sidebar
  exact: true
}, {
  path: '/pages/users',
  icon: 'FormsIcon',
  name: '用户审核'
}, {
  path: '/pages/products',
  icon: 'FormsIcon',
  name: '产品管理'
}, {
  path: '/pages/distributors',
  icon: 'FormsIcon',
  name: '流通管理'
}];
/* harmony default export */ const sidebar = (routes);
// EXTERNAL MODULE: ./icons/index.ts + 28 modules
var icons = __webpack_require__(2422);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@roketid/windmill-react-ui"
var windmill_react_ui_ = __webpack_require__(7232);
;// CONCATENATED MODULE: ./components/Sidebar/SidebarSubmenu.tsx
const _excluded = ["icon"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function Icon(_ref) {
  let {
    icon
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // @ts-ignore
  const _Icon = icons[icon];
  return /*#__PURE__*/jsx_runtime_.jsx(_Icon, _objectSpread({}, props));
}

function SidebarSubmenu({
  route,
  linkClicked
}) {
  const {
    pathname
  } = (0,router_.useRouter)();
  const {
    saveScroll
  } = (0,external_react_.useContext)(context_SidebarContext);
  const {
    0: isDropdownMenuOpen,
    1: setIsDropdownMenuOpen
  } = (0,external_react_.useState)(route.routes ? route.routes.filter(r => {
    return routeIsActive(pathname, r);
  }).length > 0 : false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "relative px-6 py-3",
    children: [isDropdownMenuOpen && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "absolute h-12 inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: `inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${isDropdownMenuOpen ? 'dark:text-gray-100 text-gray-800' : ''}`,
      onClick: handleDropdownMenuClick,
      "aria-haspopup": "true",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "inline-flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
          className: "w-5 h-5",
          "aria-hidden": "true",
          icon: route.icon || ""
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ml-4",
          children: route.name
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(icons.DropdownIcon, {
        className: `w-4 h-4 ${isDropdownMenuOpen ? `transform rotate-180` : ``}`,
        "aria-hidden": "true"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Transition, {
      show: isDropdownMenuOpen,
      enter: "transition-all ease-in-out duration-300",
      enterFrom: "opacity-25 max-h-0",
      enterTo: "opacity-100 max-h-xl",
      leave: "transition-all ease-in-out duration-300",
      leaveFrom: "opacity-100 max-h-xl",
      leaveTo: "opacity-0 max-h-0",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900",
        "aria-label": "submenu",
        children: route.routes && route.routes.map(r => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: r.path || "",
            scroll: false,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `w-full inline-block ${routeIsActive(pathname, r) ? 'dark:text-gray-100 text-gray-800' : ''}`,
              onClick: linkClicked,
              children: r.name
            })
          })
        }, r.name))
      })
    })]
  }, route.name);
}

/* harmony default export */ const Sidebar_SidebarSubmenu = (SidebarSubmenu);
;// CONCATENATED MODULE: ./components/Sidebar/SidebarContent.tsx
const SidebarContent_excluded = ["icon"];

function SidebarContent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SidebarContent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SidebarContent_ownKeys(Object(source), true).forEach(function (key) { SidebarContent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SidebarContent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SidebarContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SidebarContent_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SidebarContent_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SidebarContent_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function SidebarContent_Icon(_ref) {
  let {
    icon
  } = _ref,
      props = SidebarContent_objectWithoutProperties(_ref, SidebarContent_excluded);

  // @ts-ignore
  const Icon = icons[icon];
  return /*#__PURE__*/jsx_runtime_.jsx(Icon, SidebarContent_objectSpread({}, props));
}

function SidebarContent({
  linkClicked
}) {
  const {
    pathname
  } = (0,router_.useRouter)();
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "text-gray-500 dark:text-gray-400",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/#",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ml-6 py-6",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-lg font-bold text-gray-800 dark:text-gray-200",
          children: appName
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: sidebar.map(route => route.routes ? /*#__PURE__*/jsx_runtime_.jsx(Sidebar_SidebarSubmenu, {
        route: route,
        linkClicked: linkClicked
      }, route.name) : /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "relative px-6 py-3",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: route.path || '#',
          scroll: false,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: `inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${routeIsActive(pathname, route) ? 'dark:text-gray-100 text-gray-800' : ''}`,
            onClick: linkClicked,
            children: [routeIsActive(pathname, route) && /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg",
              "aria-hidden": "true"
            }), /*#__PURE__*/jsx_runtime_.jsx(SidebarContent_Icon, {
              className: "w-5 h-5",
              "aria-hidden": "true",
              icon: route.icon || ''
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "ml-4",
              children: route.name
            })]
          })
        })
      }, route.name))
    })]
  });
}

/* harmony default export */ const Sidebar_SidebarContent = (SidebarContent);
;// CONCATENATED MODULE: ./components/Sidebar/DesktopSidebar.tsx





function DesktopSidebar() {
  const sidebarRef = (0,external_react_.useRef)(null);
  const {
    saveScroll
  } = (0,external_react_.useContext)(context_SidebarContext);

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    id: "desktopSidebar",
    ref: sidebarRef,
    className: "z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block",
    children: /*#__PURE__*/jsx_runtime_.jsx(Sidebar_SidebarContent, {
      linkClicked: linkClickedHandler
    })
  });
}

/* harmony default export */ const Sidebar_DesktopSidebar = (DesktopSidebar);
;// CONCATENATED MODULE: ./components/Sidebar/MobileSidebar.tsx








function MobileSidebar() {
  const sidebarRef = (0,external_react_.useRef)(null);
  const {
    isSidebarOpen,
    closeSidebar,
    saveScroll
  } = (0,external_react_.useContext)(context_SidebarContext);

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Transition, {
    show: isSidebarOpen,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Transition, {
        enter: "transition ease-in-out duration-150",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "transition ease-in-out duration-150",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Backdrop, {
          onClick: closeSidebar
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Transition, {
        enter: "transition ease-in-out duration-150",
        enterFrom: "opacity-0 transform -translate-x-20",
        enterTo: "opacity-100",
        leave: "transition ease-in-out duration-150",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0 transform -translate-x-20",
        children: /*#__PURE__*/jsx_runtime_.jsx("aside", {
          id: "mobileSidebar",
          ref: sidebarRef,
          className: "fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx(Sidebar_SidebarContent, {
            linkClicked: linkClickedHandler
          })
        })
      })]
    })
  });
}

/* harmony default export */ const Sidebar_MobileSidebar = (MobileSidebar);
;// CONCATENATED MODULE: ./components/Sidebar/index.tsx







function Sidebar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Sidebar_DesktopSidebar, {}), /*#__PURE__*/jsx_runtime_.jsx(Sidebar_MobileSidebar, {})]
  });
}

/* harmony default export */ const components_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./components/Header.tsx








function Header() {
  const {
    mode,
    toggleMode
  } = (0,external_react_.useContext)(windmill_react_ui_.WindmillContext);
  const {
    toggleSidebar
  } = (0,external_react_.useContext)(context_SidebarContext);
  const {
    0: isNotificationsMenuOpen,
    1: setIsNotificationsMenuOpen
  } = (0,external_react_.useState)(false);
  const {
    0: isProfileMenuOpen,
    1: setIsProfileMenuOpen
  } = (0,external_react_.useState)(false);
  const {
    0: userName,
    1: setUserName
  } = (0,external_react_.useState)('');
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    setUserName(localStorage.getItem('signUserId'));
  }, []);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  function logOut() {
    localStorage.removeItem('signUserId');
    localStorage.removeItem('address');
    localStorage.removeItem('nodeType');
    localStorage.removeItem('isRegister');
    router.push('/pages/login');
  }

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "z-40 py-4 bg-white shadow-bottom dark:bg-gray-800",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple",
        onClick: toggleSidebar,
        "aria-label": "Menu",
        children: /*#__PURE__*/jsx_runtime_.jsx(icons.MenuIcon, {
          className: "w-6 h-6",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-center flex-1 lg:mr-32",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "relative w-full max-w-xl mr-6 focus-within:text-purple-500"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "flex items-center flex-shrink-0 space-x-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "flex",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "rounded-md focus:outline-none focus:shadow-outline-purple",
            onClick: toggleMode,
            "aria-label": "Toggle color mode",
            children: mode === 'dark' ? /*#__PURE__*/jsx_runtime_.jsx(icons.SunIcon, {
              className: "w-5 h-5",
              "aria-hidden": "true"
            }) : /*#__PURE__*/jsx_runtime_.jsx(icons.MoonIcon, {
              className: "w-5 h-5",
              "aria-hidden": "true"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "relative",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "rounded-full focus:shadow-outline-purple focus:outline-none",
            onClick: handleProfileClick,
            "aria-label": "Account",
            "aria-haspopup": "true",
            children: /*#__PURE__*/jsx_runtime_.jsx(windmill_react_ui_.Avatar, {
              className: "align-middle",
              src: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82",
              alt: "",
              "aria-hidden": "true"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(windmill_react_ui_.Dropdown, {
            align: "right",
            isOpen: isProfileMenuOpen,
            onClose: () => setIsProfileMenuOpen(false),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(windmill_react_ui_.DropdownItem, {
              tag: "a",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons.OutlinePersonIcon, {
                className: "w-4 h-4 mr-3",
                "aria-hidden": "true"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: userName
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(windmill_react_ui_.DropdownItem, {
              onClick: logOut,
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons.OutlineLogoutIcon, {
                className: "w-4 h-4 mr-3",
                "aria-hidden": "true"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Log out"
              })]
            })]
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./containers/Main.tsx



function Main({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("main", {
    className: "h-full overflow-y-auto",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container grid px-6 mx-auto",
      children: children
    })
  });
}

/* harmony default export */ const containers_Main = (Main);
;// CONCATENATED MODULE: ./containers/Layout.tsx








function Layout({
  children
}) {
  const {
    isSidebarOpen
  } = (0,external_react_.useContext)(context_SidebarContext);
  return /*#__PURE__*/jsx_runtime_.jsx(SidebarProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col flex-1 w-full",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(containers_Main, {
          children: children
        })]
      })]
    })
  });
}

/* harmony default export */ const containers_Layout = (Layout);

/***/ }),

/***/ 2422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BellIcon": () => (/* reexport */ bell),
  "ButtonsIcon": () => (/* reexport */ buttons),
  "CardsIcon": () => (/* reexport */ cards),
  "CartIcon": () => (/* reexport */ cart),
  "ChartsIcon": () => (/* reexport */ charts),
  "ChatIcon": () => (/* reexport */ chat),
  "DropdownIcon": () => (/* reexport */ dropdown),
  "EditIcon": () => (/* reexport */ edit),
  "ForbiddenIcon": () => (/* reexport */ forbidden),
  "FormsIcon": () => (/* reexport */ icons_forms),
  "HeartIcon": () => (/* reexport */ heart),
  "HomeIcon": () => (/* reexport */ home),
  "MailIcon": () => (/* reexport */ mail),
  "MenuIcon": () => (/* reexport */ menu),
  "ModalsIcon": () => (/* reexport */ modals),
  "MoneyIcon": () => (/* reexport */ money),
  "MoonIcon": () => (/* reexport */ moon),
  "NoIcon": () => (/* reexport */ no),
  "OkIcon": () => (/* reexport */ ok),
  "OutlineCogIcon": () => (/* reexport */ outlineCog),
  "OutlineLogoutIcon": () => (/* reexport */ outlineLogout),
  "OutlinePersonIcon": () => (/* reexport */ outlinePerson),
  "PagesIcon": () => (/* reexport */ pages),
  "PeopleIcon": () => (/* reexport */ people),
  "SearchIcon": () => (/* reexport */ search),
  "SunIcon": () => (/* reexport */ sun),
  "TablesIcon": () => (/* reexport */ tables),
  "TrashIcon": () => (/* reexport */ trash)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./icons/buttons.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgButtons = function SvgButtons(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m15 15-2 5L9 9l11 4-5 2zm0 0 5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"
  })));
};

/* harmony default export */ const buttons = (SvgButtons);
;// CONCATENATED MODULE: ./icons/cards.svg
var cards_path;

function cards_extends() { cards_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return cards_extends.apply(this, arguments); }



var SvgCards = function SvgCards(props) {
  return /*#__PURE__*/external_react_.createElement("svg", cards_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), cards_path || (cards_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10"
  })));
};

/* harmony default export */ const cards = (SvgCards);
;// CONCATENATED MODULE: ./icons/charts.svg
var charts_path, _path2;

function charts_extends() { charts_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return charts_extends.apply(this, arguments); }



var SvgCharts = function SvgCharts(props) {
  return /*#__PURE__*/external_react_.createElement("svg", charts_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), charts_path || (charts_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 3.055A9.001 9.001 0 1 0 20.945 13H11V3.055z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M20.488 9H15V3.512A9.025 9.025 0 0 1 20.488 9z"
  })));
};

/* harmony default export */ const charts = (SvgCharts);
;// CONCATENATED MODULE: ./icons/forms.svg
var forms_path;

function forms_extends() { forms_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return forms_extends.apply(this, arguments); }



var SvgForms = function SvgForms(props) {
  return /*#__PURE__*/external_react_.createElement("svg", forms_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), forms_path || (forms_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  })));
};

/* harmony default export */ const icons_forms = (SvgForms);
;// CONCATENATED MODULE: ./icons/home.svg
var home_path;

function home_extends() { home_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return home_extends.apply(this, arguments); }



var SvgHome = function SvgHome(props) {
  return /*#__PURE__*/external_react_.createElement("svg", home_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), home_path || (home_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
  })));
};

/* harmony default export */ const home = (SvgHome);
;// CONCATENATED MODULE: ./icons/modals.svg
var modals_path;

function modals_extends() { modals_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return modals_extends.apply(this, arguments); }



var SvgModals = function SvgModals(props) {
  return /*#__PURE__*/external_react_.createElement("svg", modals_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), modals_path || (modals_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"
  })));
};

/* harmony default export */ const modals = (SvgModals);
;// CONCATENATED MODULE: ./icons/pages.svg
var pages_path;

function pages_extends() { pages_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pages_extends.apply(this, arguments); }



var SvgPages = function SvgPages(props) {
  return /*#__PURE__*/external_react_.createElement("svg", pages_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), pages_path || (pages_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zm0 8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm12 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6z"
  })));
};

/* harmony default export */ const pages = (SvgPages);
;// CONCATENATED MODULE: ./icons/tables.svg
var tables_path;

function tables_extends() { tables_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tables_extends.apply(this, arguments); }



var SvgTables = function SvgTables(props) {
  return /*#__PURE__*/external_react_.createElement("svg", tables_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), tables_path || (tables_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 6h16M4 10h16M4 14h16M4 18h16"
  })));
};

/* harmony default export */ const tables = (SvgTables);
;// CONCATENATED MODULE: ./icons/heart.svg
var heart_path;

function heart_extends() { heart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return heart_extends.apply(this, arguments); }



var SvgHeart = function SvgHeart(props) {
  return /*#__PURE__*/external_react_.createElement("svg", heart_extends({
    fill: "currentColor",
    "aria-hidden": "true",
    viewBox: "0 0 20 20"
  }, props), heart_path || (heart_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.172 5.172a4 4 0 0 1 5.656 0L10 6.343l1.172-1.171a4 4 0 1 1 5.656 5.656L10 17.657l-6.828-6.829a4 4 0 0 1 0-5.656z",
    clipRule: "evenodd",
    fillRule: "evenodd"
  })));
};

/* harmony default export */ const heart = (SvgHeart);
;// CONCATENATED MODULE: ./icons/edit.svg
var edit_path;

function edit_extends() { edit_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return edit_extends.apply(this, arguments); }



var SvgEdit = function SvgEdit(props) {
  return /*#__PURE__*/external_react_.createElement("svg", edit_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), edit_path || (edit_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  })));
};

/* harmony default export */ const edit = (SvgEdit);
;// CONCATENATED MODULE: ./icons/trash.svg
var trash_path;

function trash_extends() { trash_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return trash_extends.apply(this, arguments); }



var SvgTrash = function SvgTrash(props) {
  return /*#__PURE__*/external_react_.createElement("svg", trash_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), trash_path || (trash_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 0 0-.894.553L7.382 4H4a1 1 0 0 0 0 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a1 1 0 1 0 0-2h-3.382l-.724-1.447A1 1 0 0 0 11 2H9zM7 8a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0V8zm5-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const trash = (SvgTrash);
;// CONCATENATED MODULE: ./icons/forbidden.svg
var forbidden_path;

function forbidden_extends() { forbidden_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return forbidden_extends.apply(this, arguments); }



var SvgForbidden = function SvgForbidden(props) {
  return /*#__PURE__*/external_react_.createElement("svg", forbidden_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), forbidden_path || (forbidden_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.477 14.89A6 6 0 0 1 5.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 0 1 8.367 8.367zM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const forbidden = (SvgForbidden);
;// CONCATENATED MODULE: ./icons/mail.svg
var mail_path;

function mail_extends() { mail_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return mail_extends.apply(this, arguments); }



var SvgMail = function SvgMail(props) {
  return /*#__PURE__*/external_react_.createElement("svg", mail_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), mail_path || (mail_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
  })));
};

/* harmony default export */ const mail = (SvgMail);
;// CONCATENATED MODULE: ./icons/cart.svg
var cart_path;

function cart_extends() { cart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return cart_extends.apply(this, arguments); }



var SvgCart = function SvgCart(props) {
  return /*#__PURE__*/external_react_.createElement("svg", cart_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), cart_path || (cart_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 1a1 1 0 0 0 0 2h1.22l.305 1.222a.997.997 0 0 0 .01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 0 0 0-2H6.414l1-1H14a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 17 3H6.28l-.31-1.243A1 1 0 0 0 5 1H3zm13 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  })));
};

/* harmony default export */ const cart = (SvgCart);
;// CONCATENATED MODULE: ./icons/chat.svg
var chat_path;

function chat_extends() { chat_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chat_extends.apply(this, arguments); }



var SvgChat = function SvgChat(props) {
  return /*#__PURE__*/external_react_.createElement("svg", chat_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), chat_path || (chat_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const chat = (SvgChat);
;// CONCATENATED MODULE: ./icons/money.svg
var money_path;

function money_extends() { money_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return money_extends.apply(this, arguments); }



var SvgMoney = function SvgMoney(props) {
  return /*#__PURE__*/external_react_.createElement("svg", money_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), money_path || (money_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2V6h10a2 2 0 0 0-2-2H4zm2 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4zm6 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const money = (SvgMoney);
;// CONCATENATED MODULE: ./icons/people.svg
var people_path;

function people_extends() { people_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return people_extends.apply(this, arguments); }



var SvgPeople = function SvgPeople(props) {
  return /*#__PURE__*/external_react_.createElement("svg", people_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), people_path || (people_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-4 7a4 4 0 0 0-8 0v3h8v-3zM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 10v-3a5.972 5.972 0 0 0-.75-2.906A3.005 3.005 0 0 1 19 15v3h-3zM4.75 12.094A5.973 5.973 0 0 0 4 15v3H1v-3a3 3 0 0 1 3.75-2.906z"
  })));
};

/* harmony default export */ const people = (SvgPeople);
;// CONCATENATED MODULE: ./icons/search.svg
var search_path;

function search_extends() { search_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return search_extends.apply(this, arguments); }



var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/external_react_.createElement("svg", search_extends({
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), search_path || (search_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const search = (SvgSearch);
;// CONCATENATED MODULE: ./icons/moon.svg
var moon_path;

function moon_extends() { moon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return moon_extends.apply(this, arguments); }



var SvgMoon = function SvgMoon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", moon_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), moon_path || (moon_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"
  })));
};

/* harmony default export */ const moon = (SvgMoon);
;// CONCATENATED MODULE: ./icons/sun.svg
var sun_path;

function sun_extends() { sun_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return sun_extends.apply(this, arguments); }



var SvgSun = function SvgSun(props) {
  return /*#__PURE__*/external_react_.createElement("svg", sun_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), sun_path || (sun_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const sun = (SvgSun);
;// CONCATENATED MODULE: ./icons/bell.svg
var bell_path;

function bell_extends() { bell_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bell_extends.apply(this, arguments); }



var SvgBell = function SvgBell(props) {
  return /*#__PURE__*/external_react_.createElement("svg", bell_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), bell_path || (bell_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 2a6 6 0 0 0-6 6v3.586l-.707.707A1 1 0 0 0 4 14h12a1 1 0 0 0 .707-1.707L16 11.586V8a6 6 0 0 0-6-6zm0 16a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z"
  })));
};

/* harmony default export */ const bell = (SvgBell);
;// CONCATENATED MODULE: ./icons/menu.svg
var menu_path;

function menu_extends() { menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_extends.apply(this, arguments); }



var SvgMenu = function SvgMenu(props) {
  return /*#__PURE__*/external_react_.createElement("svg", menu_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), menu_path || (menu_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const menu = (SvgMenu);
;// CONCATENATED MODULE: ./icons/dropdown.svg
var dropdown_path;

function dropdown_extends() { dropdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dropdown_extends.apply(this, arguments); }



var SvgDropdown = function SvgDropdown(props) {
  return /*#__PURE__*/external_react_.createElement("svg", dropdown_extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), dropdown_path || (dropdown_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const dropdown = (SvgDropdown);
;// CONCATENATED MODULE: ./icons/outlinePerson.svg
var outlinePerson_path;

function outlinePerson_extends() { outlinePerson_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return outlinePerson_extends.apply(this, arguments); }



var SvgOutlinePerson = function SvgOutlinePerson(props) {
  return /*#__PURE__*/external_react_.createElement("svg", outlinePerson_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), outlinePerson_path || (outlinePerson_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"
  })));
};

/* harmony default export */ const outlinePerson = (SvgOutlinePerson);
;// CONCATENATED MODULE: ./icons/outlineCog.svg
var outlineCog_path, outlineCog_path2;

function outlineCog_extends() { outlineCog_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return outlineCog_extends.apply(this, arguments); }



var SvgOutlineCog = function SvgOutlineCog(props) {
  return /*#__PURE__*/external_react_.createElement("svg", outlineCog_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), outlineCog_path || (outlineCog_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  })), outlineCog_path2 || (outlineCog_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  })));
};

/* harmony default export */ const outlineCog = (SvgOutlineCog);
;// CONCATENATED MODULE: ./icons/outlineLogout.svg
var outlineLogout_path;

function outlineLogout_extends() { outlineLogout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return outlineLogout_extends.apply(this, arguments); }



var SvgOutlineLogout = function SvgOutlineLogout(props) {
  return /*#__PURE__*/external_react_.createElement("svg", outlineLogout_extends({
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), outlineLogout_path || (outlineLogout_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m11 16-4-4m0 0 4-4m-4 4h14m-5 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1"
  })));
};

/* harmony default export */ const outlineLogout = (SvgOutlineLogout);
;// CONCATENATED MODULE: ./icons/ok.svg
var ok_path;

function ok_extends() { ok_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ok_extends.apply(this, arguments); }



var SvgOk = function SvgOk(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ok_extends({
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }, props), ok_path || (ok_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M430.88 780c-6.24 0-12.48-2.4-17.28-7.2L169.92 529.28c-9.44-9.44-9.44-24.96 0-34.4l81.12-81.12c9.44-9.44 24.96-9.44 34.4 0l145.12 145.12L738.4 251.2c9.44-9.44 24.96-9.44 34.4 0l81.12 81.12c9.44 9.44 9.44 24.96 0 34.4L448 772.8c-4.8 4.8-11.04 7.2-17.12 7.2zM221.6 512l209.12 209.12L802.24 349.6l-46.72-46.72L448 610.4c-9.44 9.44-24.96 9.44-34.4 0L268.48 465.28 221.6 512z"
  })));
};

/* harmony default export */ const ok = (SvgOk);
;// CONCATENATED MODULE: ./icons/no.svg
var no_path;

function no_extends() { no_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return no_extends.apply(this, arguments); }



var SvgNo = function SvgNo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", no_extends({
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }, props), no_path || (no_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M714.4 816.48c-6.4 0-12.64-2.56-17.28-7.2L512 624.32 326.88 809.28c-4.64 4.64-10.72 7.2-17.28 7.2-6.4 0-12.64-2.56-17.28-7.2l-77.76-77.76c-9.44-9.44-9.44-24.96 0-34.4L399.68 512 214.72 326.88c-9.44-9.44-9.44-24.96 0-34.4l77.76-77.76c9.44-9.44 24.96-9.44 34.4 0L512 399.68l185.12-185.12c9.44-9.44 24.96-9.44 34.4 0l77.76 77.76c9.44 9.44 9.44 24.96 0 34.4L624.32 512l185.12 185.12c9.44 9.44 9.44 24.96 0 34.4l-77.76 77.76c-4.64 4.64-10.88 7.2-17.28 7.2zM512 565.44c6.24 0 12.48 2.4 17.28 7.2L714.4 757.76l43.36-43.36-185.12-185.12c-4.64-4.64-7.2-10.72-7.2-17.28 0-6.4 2.56-12.64 7.2-17.28L757.76 309.6l-43.36-43.36-185.12 185.12c-9.44 9.44-24.96 9.44-34.4 0L309.6 266.24l-43.36 43.36 185.12 185.12c4.64 4.64 7.2 10.72 7.2 17.28 0 6.4-2.56 12.64-7.2 17.28L266.24 714.24l43.36 43.36 185.12-185.12c4.8-4.64 11.04-7.04 17.28-7.04z"
  })));
};

/* harmony default export */ const no = (SvgNo);
;// CONCATENATED MODULE: ./icons/index.ts






























/***/ })

};
;