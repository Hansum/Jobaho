module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/juniorData.js":
/*!****************************!*\
  !*** ./data/juniorData.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const cheerio = __webpack_require__(/*! cheerio */ "cheerio");

const axios = __webpack_require__(/*! axios */ "axios");

const fetchData = async () => {
  const url = "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs";
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const jobData = [];
  const url = [];
  const companyName = [];
  const locations = [];
  const positions = [];
  const $ = await fetchData();
  jobTitle = $(".browser-wrapper_container").text();
  $('div[id="job-browse-card"]').find("div > div > div > a").each(function (index, element) {
    positions.push($(element).text());
  });
  $('div[id="job-browse-card"]').find("div > div > div > div > span > .verified-employer-new-info").each(function (index, element) {
    companyName.push($(element).text());
  });
  $('div[id="job-browse-card"]').find(".job-browse-card-element > .four > .item-style2").each(function (index, element) {
    locations.push($(element).text());
  });
  $('div[id="job-browse-card"]').find("a").each(function (index, element) {
    url.push($(element).attr("href"));
  });

  for (var i = 0; i < positions.length; i++) {
    jobData.push({
      Job_Position: positions[i],
      Job_Company_Name: companyName[i],
      Job_Location: locations[i],
      Job_url: "https://mynimo.com" + url[i]
    });
  }

  return jobData;
};

const JuniorJobData = async () => {
  const entry_level = await getResults();
  const length = entry_level.length;
  return {
    entry_level,
    length
  };
};

module.exports = JuniorJobData;

/***/ }),

/***/ "./pages/api/juniorAPI.js":
/*!********************************!*\
  !*** ./pages/api/juniorAPI.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_juniorData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/juniorData */ "./data/juniorData.js");
/* harmony import */ var _data_juniorData__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_juniorData__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const data = [];
  const {
    keyword
  } = req.query; // Keyword is case sensitive

  const retval = await _data_juniorData__WEBPACK_IMPORTED_MODULE_0___default()();

  if (keyword) {
    for (let item of retval.entry_level) {
      const exists = item.Job_Position.toLowerCase().includes(keyword);

      if (exists) {
        data.push(item);
      }
    }

    res.status(200).json({
      entry_level: data,
      length: data.length
    });
  } else {
    res.status(200).json(retval);
  }
});

/***/ }),

/***/ 7:
/*!**************************************!*\
  !*** multi ./pages/api/juniorAPI.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chris\Desktop\Jobaho\pages\api\juniorAPI.js */"./pages/api/juniorAPI.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ })

/******/ });
//# sourceMappingURL=juniorAPI.js.map