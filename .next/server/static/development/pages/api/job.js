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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

const cheerio = __webpack_require__(/*! cheerio */ "cheerio");

const loadWebsite = async () => {
  const url = "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs";
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const fetchDatafromWebsite = async () => {
  const $ = await loadWebsite();
  const Job_title = [];
  const Company_name = [];
  const location = [];
  const Job_url = [];
  $('div[id="job-browse-card"]').find("div > div > div > a").each(function (index, element) {
    Job_title.push($(element).text());
  });
  $('div[id="job-browse-card"]').find("div > div > div > div > span > .verified-employer-new-info").each(function (index, element) {
    Company_name.push($(element).text());
  });
  $('div[id="job-browse-card"]').find(".job-browse-card-element > .four > .item-style2").each(function (index, element) {
    location.push($(element).text());
  });
  $('div[id="job-browse-card"]').find("a").each(function (index, element) {
    Job_url.push($(element).attr("href"));
  });
  return {
    Job_title,
    Company_name,
    location,
    Job_url
  };
};

const combineData = async (req, res) => {
  const fetchData = await fetchDatafromWebsite();
  const data = [];

  for (let i = 0; i <= fetchData.Job_title.length; i++) {
    data.push({
      job_position: fetchData.Job_title[i],
      company: fetchData.Company_name[i],
      location: fetchData.location[i],
      url: fetchData.Job_url[i]
    });
  }

  return data;
};

/* harmony default export */ __webpack_exports__["default"] = (combineData);

/***/ }),

/***/ "./pages/api/job/index.js":
/*!********************************!*\
  !*** ./pages/api/job/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../entry */ "./entry.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const retval = await Object(_entry__WEBPACK_IMPORTED_MODULE_0__["default"])();
  res.status(200).json(retval);
});

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/api/job/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chris\Desktop\jobaho\pages\api\job\index.js */"./pages/api/job/index.js");


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
//# sourceMappingURL=job.js.map