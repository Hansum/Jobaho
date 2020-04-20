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
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\chris\\Desktop\\Jobaho\\pages\\junior.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var fetcher = function fetcher(url) {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url));

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

var SearchBar = function SearchBar(_ref) {
  var searchJob = _ref.searchJob;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(event) {
    return setValue(event.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    searchJob(value);
    setValue("");
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    value: value,
    onChange: handleChange,
    placeholder: "Search Job Title",
    size: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
}; // const searchJob = (text) => {
//   // const { query } = useRouter();
//   const { data, error } = useSWR(
//     `/api/juniorAPI${text ? "?keyword=" + text : ""}`,
//     fetcher
//   );
//   if (error) return <div>Failed to load entry level api</div>;
//   if (!data) return <Loader>Scraping Junior Level Jobs</Loader>;
//   return (
//     <Flex flexWrap="wrap" justifyContent="center">
//       {data.entry_level.map((res, index) => {
//         const { Job_Position, Job_Company_Name, Job_Location, Job_url } = res;
//         return (
//           <JobCards
//             index={index}
//             title={Job_Position}
//             company={Job_Company_Name}
//             location={Job_Location}
//             url={Job_url}
//           ></JobCards>
//         );
//       })}
//     </Flex>
//   );
// };


var JobCards = function JobCards(_ref2) {
  var title = _ref2.title,
      company = _ref2.company,
      location = _ref2.location,
      url = _ref2.url,
      index = _ref2.index;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
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
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    color: "gray.500",
    fontWeight: "semibold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    fontSize: "xs",
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, company)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    mt: "2",
    fontWeight: "semibold",
    fontSize: "lg",
    textAlign: "center",
    color: "blue.600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    href: url,
    isExternal: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, title)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    mt: "2",
    color: "gray.600",
    fontSize: "sm",
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, location));
};

function FetchData() {
  var _this2 = this;

  var searchJob = function searchJob(text) {
    if (text) {}
  }; // const { data, error } = useSWR("/api/juniorAPI", fetcher);


  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/juniorAPI".concat(query.keyword ? "?keyword=" + query.keyword : ""), fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  console.log("Input value:", data);
  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "Failed to load entry level api");

  if (!data) {
    return __jsx(_components_LoadingLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 12
      }
    }, "Scraping Junior Level Jobs");
  } //BOX ----> DIV


  return __jsx(_components_JobsectionCards__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    p: 3,
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    color: "white",
    textAlign: "center",
    fontSize: "40px",
    fontFamily: "Sen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, "Junior / Entry Level Jobs")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    color: "white",
    m: 5,
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Sen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, "Number of Jobs: ", data.length), __jsx(SearchBar, {
    searchJob: searchJob,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
    flexWrap: "wrap",
    justifyContent: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, data.entry_level.map(function (res, index) {
    var Job_Position = res.Job_Position,
        Job_Company_Name = res.Job_Company_Name,
        Job_Location = res.Job_Location,
        Job_url = res.Job_url;
    return __jsx(JobCards, {
      index: index,
      title: Job_Position,
      company: Job_Company_Name,
      location: Job_Location,
      url: Job_url,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 15
      }
    });
  }))));
}

/***/ })

})
//# sourceMappingURL=junior.js.df42385fd16a12190c18.hot-update.js.map