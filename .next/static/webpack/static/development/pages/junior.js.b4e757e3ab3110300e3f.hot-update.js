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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_JobsectionCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/JobsectionCards */ "./components/JobsectionCards.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");

var _jsxFileName = "C:\\Users\\chris\\Desktop\\Jobaho\\pages\\junior.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var fetcher = function fetcher(url) {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url));

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

function FetchData() {
  var _this = this;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/juniorAPI", fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // console.log("Data:", data);


  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Failed to load entry level api");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Loading..."); //BOX ----> DIV

  return __jsx(_components_JobsectionCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    color: "white",
    m: 5,
    textAlign: "center",
    fontSize: "30px",
    fontFamily: "Sen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variantColor: "green",
    variant: "outline",
    "float": "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Back"), " ", "Junior / Entry Level Jobs"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    color: "white",
    m: 5,
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Sen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Number of Jobs: ", data.length), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexWrap: "wrap",
    justifyContent: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, data.entry_level.map(function (res, index) {
    var Job_Position = res.Job_Position,
        Job_Company_Name = res.Job_Company_Name,
        Job_Location = res.Job_Location,
        Job_url = res.Job_url;
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      m: 3,
      borderWidth: "1px",
      bg: "white",
      flex: "0 1 24%",
      p: 6,
      rounded: "lg",
      mt: 5,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      color: "gray.500",
      fontWeight: "semibold",
      letterSpacing: "wide",
      textTransform: "uppercase",
      fontSize: "xs",
      textAlign: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, Job_Company_Name)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      mt: "2",
      fontWeight: "semibold",
      fontSize: "lg",
      textAlign: "center",
      color: "blue.600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      href: Job_url,
      isExternal: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, Job_Position)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      mt: "2",
      color: "gray.600",
      fontSize: "sm",
      textAlign: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, Job_Location));
  }))));
}

/***/ })

})
//# sourceMappingURL=junior.js.b4e757e3ab3110300e3f.hot-update.js.map