webpackHotUpdate("static\\development\\pages\\junior.js",{

/***/ "./pages/junior.js":
/*!*************************!*\
  !*** ./pages/junior.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_JobsectionCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/JobsectionCards */ "./components/JobsectionCards.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LoadingLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoadingLayout */ "./components/LoadingLayout.js");
/* harmony import */ var _components_CardsLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardsLayout */ "./components/CardsLayout.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");

var _jsxFileName = "C:\\Users\\chris\\Desktop\\Jobaho\\pages\\junior.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var fetcher = function fetcher() {
  var res,
      data,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default.a.apply(void 0, _args));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;

          if (!(res.status !== 200)) {
            _context.next = 8;
            break;
          }

          throw new Error("error", data.message);

        case 8:
          return _context.abrupt("return", data);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

function FetchData(req, res) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var title = req.query; // const { query } = useRouter();
  // const { data, error } = useSWR("/api/juniorAPI", fetcher);

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/juniorAPI".concat(title ? "?keyword=" + title : ""), fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   mutate("/api/juniorAPI", value, false);
  //   mutate(
  //     "/api/juniorAPI",
  //     await fetcher("/api/juniorAPI", {
  //       method: "POST",
  //       body: JSON.stringify(value),
  //     })
  //     // Router.push({
  //     //   pathname: "/api/juniorAPI",
  //     //   query: { keyword: value },
  //     // })
  //   );
  //   setValue("");
  // };


  var handleSubmit = function handleSubmit(e) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
              pathname: "/junior",
              query: {
                title: value
              }
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  console.log("Input value:", data);
  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "Failed to load entry level api");

  if (!data) {
    return __jsx(_components_LoadingLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 12
      }
    }, "Scraping Junior Level Jobs");
  } //BOX ----> DIV


  return __jsx(_components_JobsectionCards__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["Box"], {
    p: 3,
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    color: "white",
    textAlign: "center",
    fontSize: "40px",
    fontFamily: "Sen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Junior / Entry Level Jobs")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    color: "white",
    m: 5,
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Sen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Number of Jobs: ", data.length), __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variantColor: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, "Search")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
    flexWrap: "wrap",
    justifyContent: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, data.entry_level.map(function (res, index) {
    var Job_Position = res.Job_Position,
        Job_Company_Name = res.Job_Company_Name,
        Job_Location = res.Job_Location,
        Job_url = res.Job_url;
    return __jsx(_components_CardsLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      index: index,
      title: Job_Position,
      company: Job_Company_Name,
      location: Job_Location,
      url: Job_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    });
  }))));
}

/***/ })

})
//# sourceMappingURL=junior.js.59baa5a085b5039ec318.hot-update.js.map