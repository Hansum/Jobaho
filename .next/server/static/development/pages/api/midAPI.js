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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/midData.js":
/*!*************************!*\
  !*** ./data/midData.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const cheerio = __webpack_require__(/*! cheerio */ "cheerio");

const axios = __webpack_require__(/*! axios */ "axios"); // const filterJobs = async () => {
//   const arr = await getRemainingData();
//   const keywords = [
//     "Associate",
//     "Entry-level",
//     "Junior",
//     "Jr",
//     "Fresh",
//     "Fresh-Graduate",
//     "Senior",
//     "Sr",
//   ];
//   const arrKeywordsFinal = [];
//   if (arr != 0 || arr != undefined) {
//     for (let item of arr) {
//       const exists = keywords.some((res) => item.Job_Position.includes(res));
//       if (!exists) {
//         arrKeywordsFinal.push(item);
//       }
//     }
//     return arrKeywordsFinal;
//   } else {
//     console.log("no array found to check Keywords");
//   }
// };
// const FinalOutput = async () => {
//   const keyData = await filterJobs();
//   const finalData = [];
//   if (keyData) {
//     for (let item of keyData) {
//       if (
//         item.Job_Position !== undefined &&
//         item.Company_Name !== undefined &&
//         item.Job_Date !== undefined &&
//         item.Job_url !== undefined
//       ) {
//         const jobTitle = item.Job_Position.trim();
//         const company = item.Company_Name.trim();
//         const date = item.Job_Date.trim();
//         const location = item.Job_Location.trim();
//         finalData.push({
//           Job_Position: jobTitle,
//           Company_Name: company,
//           Job_Location: location,
//           Job_Date: date,
//           Job_Url: item.Job_url,
//         });
//       }
//     }
//     return finalData;
//   } else {
//     console.log("no array found to remove space");
//   }
// };
// async function getRemainingData() {
//   const position_title = [];
//   const company_name = [];
//   const date = [];
//   const job_Url = [];
//   const location = [];
//   const finalArray = [];
//   const url = "https://www.cebuitjobs.com";
//   for (let i = 0; i !== 143; i += 13) {
//     await axios
//       .get(url + `/more/${i}`)
//       .then(function (res) {
//         const $ = cheerio.load(res.data);
//         $('div[class="card-body"]').each(function (index, element) {
//           if ($(element).find("img").length === 1) {
//             $(element)
//               .find("h5")
//               .each(function (index, job) {
//                 position_title.push($(job).text());
//               });
//             $(element)
//               .find("img")
//               .each(function (index, company) {
//                 company_name.push($(company).attr("alt"));
//               });
//             $(element)
//               .find("h6")
//               .each(function (index, jobDate) {
//                 date.push($(jobDate).text());
//               });
//             $(element)
//               .find("span:first-of-type")
//               .each(function (index, jobLocation) {
//                 location.push($(jobLocation).text());
//               });
//             $(element)
//               .find("h5 a")
//               .each(function (index, url) {
//                 job_Url.push($(url).attr("href"));
//               });
//           }
//         });
//       })
//       .catch(function (err) {
//         console.log("Error fetching", err);
//       });
//   }
//   for (let i = 0; i <= position_title.length; i++) {
//     if (
//       position_title[i] !== undefined &&
//       company_name[i] !== undefined &&
//       date[i] !== undefined &&
//       job_Url[i] !== undefined
//     ) {
//       finalArray.push({
//         Job_Position: position_title[i],
//         Company_Name: company_name[i],
//         Job_Location: location[i],
//         Job_Date: date[i],
//         Job_url: job_Url[i],
//       });
//     }
//   }
//   // console.log("array:", finalArray);
//   return axios.all(finalArray).then((res) => {
//     return res;
//   });
// }


const indeed = __webpack_require__(/*! indeed-scraper */ "indeed-scraper");

const ScrapeData = () => {
  const queryOptions = {
    host: "www.indeed.com.ph",
    query: "Software",
    city: "Cebu",
    radius: "30",
    level: "mid_level",
    jobType: "fulltime",
    maxAge: "30",
    sort: "date",
    limit: 100
  };
  return indeed.query(queryOptions).then(res => {
    return res;
  });
};

const MidJobData = async () => {
  const mid_level = await ScrapeData();
  const length = mid_level.length;
  return {
    mid_level,
    length
  };
};

module.exports = MidJobData;

/***/ }),

/***/ "./pages/api/midAPI.js":
/*!*****************************!*\
  !*** ./pages/api/midAPI.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_midData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/midData */ "./data/midData.js");
/* harmony import */ var _data_midData__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_midData__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const retval = await _data_midData__WEBPACK_IMPORTED_MODULE_0___default()();

  if (retval) {
    res.status(200).json(retval);
  }
});

/***/ }),

/***/ 6:
/*!***********************************!*\
  !*** multi ./pages/api/midAPI.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chris\Desktop\Jobaho\pages\api\midAPI.js */"./pages/api/midAPI.js");


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

/***/ }),

/***/ "indeed-scraper":
/*!*********************************!*\
  !*** external "indeed-scraper" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("indeed-scraper");

/***/ })

/******/ });
//# sourceMappingURL=midAPI.js.map