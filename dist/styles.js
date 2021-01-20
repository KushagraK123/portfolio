(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n    File Contents:\n\n        1. Variables\n        2. Mixins\n        3. Global Styles\n        4. Lead Styles\n        5. About Styles\n        6. Experience Styles\n        7. Education Styles\n        8. Project Styles\n        9. Skills Styles\n        10. Contact Styles\n        11. Optional Section Styles\n        12. Media Queries\n*/\n/*\n    ------------------------\n    ----- 1. Variables -----\n    ------------------------\n*/\n.card svg.material-icons path {\n  fill: #888; }\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px; }\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px; }\n.card-container .card:not(:last-child) {\n  margin-right: 0; }\n.card.card-small {\n  height: 16px;\n  width: 168px; }\n.card-container .card:not(.highlight-card) {\n  cursor: pointer; }\n.card-container .card:not(.highlight-card):hover {\n  -webkit-transform: translateY(-3px);\n          transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35); }\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: #696767; }\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative; }\n.card.card.highlight-card span {\n  margin-left: 60px; }\n/*\n    ---------------------\n    ----- 2. Mixins -----\n    ---------------------\n*/\n/*\n    ----------------------------\n    ----- 3. Global Styles -----\n    ----------------------------\n*/\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 16px; }\nbody.active {\n    overflow: hidden;\n    z-index: -1; }\n.no-js #experience-timeline > div {\n  background: #fff;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #dcd9d9; }\n.no-js #experience-timeline > div h3 {\n    font-size: 1.5em;\n    font-weight: 300;\n    color: #374054;\n    display: inline-block;\n    margin: 0; }\n.no-js #experience-timeline > div h4 {\n    font-size: 1.2em;\n    font-weight: 300;\n    color: #7e8890;\n    margin: 0 0 15px 0; }\n.no-js #experience-timeline > div p {\n    color: #74808a;\n    font-size: 0.9em;\n    margin: 0; }\n.no-js #experience-timeline:before, .no-js #experience-timeline:after {\n  content: none; }\n@-webkit-keyframes dropHeader {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n@keyframes dropHeader {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\nheader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 10;\n  -webkit-animation-name: dropHeader;\n          animation-name: dropHeader;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-duration: 0.75s;\n          animation-duration: 0.75s; }\nheader ul {\n    display: inline-block;\n    background: #fff;\n    text-align: center;\n    padding: 10px;\n    margin: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\nheader li {\n    display: inline-block; }\nheader a {\n    display: block;\n    color: #3498db;\n    padding: 10px;\n    cursor: pointer; }\nheader a:hover {\n      color: #217dbb;\n      text-decoration: none;\n      background: #eee;\n      border-radius: 4px; }\nheader a:focus {\n      color: #3498db;\n      text-decoration: none; }\nheader.active {\n    display: block; }\nheader.sticky {\n    position: fixed;\n    z-index: 999; }\n#menu.active {\n  display: block; }\n#mobile-menu-open {\n  display: none;\n  cursor: pointer;\n  position: fixed;\n  right: 15px;\n  top: 10px;\n  color: #3498db;\n  font-size: 1.5em;\n  z-index: 20;\n  padding: 0 7px;\n  border-radius: 4px;\n  background: #fff; }\n#mobile-menu-close {\n  display: none;\n  text-align: right;\n  width: 100%;\n  background: #fff;\n  font-size: 1.5em;\n  padding-right: 15px;\n  padding-top: 10px;\n  cursor: pointer;\n  color: #3498db; }\n#mobile-menu-close span {\n    font-size: 0.5em;\n    text-transform: uppercase; }\n#mobile-menu-close i {\n    vertical-align: middle; }\nfooter {\n  padding: 50px 0; }\n.copyright {\n  padding-top: 20px; }\n.copyright p {\n    margin: 0;\n    color: #74808a; }\n.top {\n  text-align: center; }\n.top span {\n    cursor: pointer;\n    display: block;\n    margin: 15px auto 0 auto;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    border: 3px solid #b9bfc4;\n    text-align: center; }\n.top i {\n    color: #74808a; }\n.social {\n  text-align: right; }\n.social ul {\n    margin: 5px 0 0 0;\n    padding: 0; }\n.social li {\n    display: inline-block;\n    font-size: 1.25em;\n    list-style: none; }\n.social a {\n    display: block;\n    color: #74808a;\n    padding: 10px; }\n.social a:hover {\n      color: #3498db; }\n.btn-rounded-white {\n  background: #167fc3;\n  display: inline-block;\n  color: #fff;\n  padding: 15px 25px;\n  border: 3px solid #fff;\n  border-radius: 30px;\n  transition: 0.5s ease all; }\n.btn-rounded-white:hover {\n    color: #3498db;\n    background: #fff;\n    text-decoration: none; }\n.shadow {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n.shadow-large {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15); }\n.heading {\n  position: relative;\n  display: inline-block;\n  font-size: 2em;\n  font-weight: 300;\n  margin: 0 0 30px 0; }\n.heading:after {\n    position: absolute;\n    content: '';\n    top: 100%;\n    height: 1px;\n    width: 50px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    background: #3498db; }\n.background-alt {\n  background: #f2f2f5; }\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  50% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2); }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n@keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  50% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2); }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n/*\n    ---------------------------\n    ----- 5. About Styles -----\n    ---------------------------\n*/\n#about {\n  padding: 75px 15px;\n  border-bottom: 1px solid #dcd9d9; }\n#about h2 {\n    color: #374054; }\n#about p {\n    color: #74808a;\n    margin: 0;\n    margin-bottom: 15px;\n    font-size: 20px; }\n/*\n    --------------------------------\n    ----- 6. Experience Styles -----\n    --------------------------------\n*/\n#experience {\n  padding: 50px 15px;\n  text-align: center;\n  border-bottom: 1px solid #dcd9d9; }\n#experience h2 {\n    color: #374054; }\n#experience-timeline {\n  margin: 30px auto 0 auto;\n  position: relative;\n  max-width: 1000px; }\n#experience-timeline:before {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    left: 303px;\n    right: auto;\n    height: 100%;\n    width: 3px;\n    background: #3498db;\n    z-index: 0; }\n#experience-timeline:after {\n    position: absolute;\n    content: '';\n    width: 3px;\n    height: 40px;\n    background: #3498db;\n    background: linear-gradient(to bottom, #3498db, rgba(52, 152, 219, 0));\n    top: 100%;\n    left: 303px; }\n.vtimeline-content {\n  margin-left: 350px;\n  background: #fff;\n  border: 1px solid #e6e6e6;\n  padding: 15px;\n  border-radius: 3px;\n  text-align: left; }\n.vtimeline-content h3 {\n    font-size: 1.5em;\n    font-weight: 300;\n    color: #374054;\n    display: inline-block;\n    margin: 0; }\n.vtimeline-content h4 {\n    font-size: 1.2em;\n    font-weight: 300;\n    color: #7e8890;\n    margin: 0 0 15px 0; }\n.vtimeline-content p {\n    color: #74808a;\n    font-size: 0.9em;\n    margin: 0; }\n.vtimeline-point {\n  position: relative;\n  display: block;\n  vertical-align: top;\n  margin-bottom: 30px; }\n.vtimeline-icon {\n  position: relative;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  background: #3498db;\n  border-radius: 50%;\n  float: left;\n  z-index: 99;\n  margin-left: 280px; }\n.vtimeline-icon i {\n    display: block;\n    font-size: 2em;\n    margin-top: 10px; }\n.vtimeline-date {\n  width: 260px;\n  text-align: right;\n  position: absolute;\n  left: 0;\n  top: 10px;\n  font-weight: 300;\n  color: #374054; }\n/*\n    -------------------------------\n    ----- 7. Education Styles -----\n    -------------------------------\n*/\n#education {\n  padding: 50px 15px 20px 15px;\n  border-bottom: 1px solid #dcd9d9;\n  text-align: center; }\n#education h2 {\n    color: #374054;\n    margin-bottom: 50px; }\n.education-block {\n  max-width: 700px;\n  margin: 0 auto 30px auto;\n  padding: 15px;\n  border: 1px solid #dcd9d9;\n  text-align: left; }\n.education-block h3 {\n    font-weight: 500;\n    float: left;\n    margin: 0;\n    color: #374054; }\n.education-block span {\n    color: #74808a;\n    float: right; }\n.education-block h4 {\n    color: #74808a;\n    clear: both;\n    font-weight: 500;\n    margin: 0 0 15px 0; }\n.education-block p, .education-block ul {\n    margin: 0;\n    color: #74808a;\n    font-size: 0.9em; }\n.education-block ul {\n    padding: 0 0 0 15px; }\n/*\n    -------------------------------\n    ----- 8. Project Styles -----\n    -------------------------------\n*/\n#projects, #current-projects {\n  padding: 50px 15px;\n  border-bottom: 1px solid #dcd9d9;\n  text-align: center; }\n#projects h2, #current-projects h2 {\n    color: #374054;\n    margin-bottom: 50px; }\n.project {\n  position: relative;\n  max-width: 900px;\n  margin: 0 auto 30px auto;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 4px; }\n.project-image {\n  float: left;\n  cursor: pointer; }\n.project-info {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  margin-left: 300px;\n  padding: 15px; }\n.project-info h3 {\n    font-size: 1.5em;\n    font-weight: 300;\n    color: #374054;\n    margin: 0 0 15px 0;\n    cursor: pointer; }\n.project-info p {\n    color: #74808a;\n    margin: 0 0 15px 0;\n    font-size: 0.9em; }\n.no-image .project-info {\n  position: relative;\n  margin: 0;\n  padding: 30px 15px;\n  -webkit-transform: none;\n          transform: none; }\n#more-projects {\n  display: none; }\n/*\n    -------------------------------\n    ----- 9. Skills Styles -----\n    -------------------------------\n*/\n#skills {\n  padding: 50px 15px;\n  text-align: center; }\n#skills h2 {\n    color: #374054;\n    margin-bottom: 50px; }\n#skills ul {\n    display: block;\n    margin: 0 auto;\n    padding: 0;\n    max-width: 800px; }\n#skills li {\n    display: inline-block;\n    margin: 7px;\n    padding: 5px 10px;\n    color: #374054;\n    background: #e4e4ea;\n    list-style: none;\n    cursor: default;\n    font-size: 1.2em; }\n/*\n    -------------------------------\n    ----- 10. Contact Styles -----\n    -------------------------------\n*/\n#courses {\n  text-align: center; }\n#courses h2 {\n    list-style-type: none;\n    border-bottom: 1px solid #3498db;\n    text-align: center;\n    color: #374054;\n    position: relative;\n    font-size: 2em;\n    font-weight: 300;\n    display: inline-block;\n    color: #374054;\n    margin: 32px 32px 72px 32px; }\n#achievements {\n  text-align: center; }\n#achievements h2 {\n    list-style-type: none;\n    border-bottom: 1px solid #3498db;\n    text-align: center;\n    color: #374054;\n    position: relative;\n    font-size: 2em;\n    font-weight: 300;\n    display: inline-block;\n    color: #374054;\n    margin: 32px 32px 72px 32px; }\n#getInTouch {\n  background: #f2f2f5;\n  text-align: center;\n  padding: 75px 15px; }\n#getInTouch h2 {\n    list-style-type: none;\n    padding: 0px 0px 0px 0px;\n    border-bottom: 1px solid #3498db;\n    text-align: center;\n    color: #374054;\n    position: relative;\n    font-size: 2em;\n    font-weight: 300;\n    display: inline-block;\n    color: #374054;\n    margin: 0 0 15px 0; }\n#getInTouch-form {\n  max-width: 500px;\n  margin: 0 auto; }\n#getInTouch-form input, #getInTouch-form textarea {\n    display: block;\n    width: 100%;\n    padding: 10px;\n    border-radius: 4px;\n    border: none;\n    margin-bottom: 10px;\n    background: #1d6fa5;\n    color: #fff;\n    transition: 0.5s ease all; }\n#getInTouch-form input::-webkit-input-placeholder, #getInTouch-form textarea::-webkit-input-placeholder {\n      color: #fff; }\n#getInTouch-form input:-moz-placeholder, #getInTouch-form textarea:-moz-placeholder {\n      color: #fff;\n      opacity: 1; }\n#getInTouch-form input::-moz-placeholder, #getInTouch-form textarea::-moz-placeholder {\n      color: #fff;\n      opacity: 1; }\n#getInTouch-form input:-ms-input-placeholder, #getInTouch-form textarea:-ms-input-placeholder {\n      color: #fff; }\n#getInTouch-form input:focus, #getInTouch-form textarea:focus {\n      outline: none;\n      background: #16527a; }\n#getInTouch-form textarea {\n    height: 150px;\n    resize: none; }\n#getInTouch-form button {\n    display: block;\n    width: 100%;\n    background: #fff;\n    border-radius: 4px;\n    padding: 5px 10px;\n    border: none;\n    color: #3498db;\n    font-weight: 700;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 0.5s ease all; }\n#getInTouch-form button:hover {\n      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n/*\n    ---------------------------------------\n    ----- 11. Optional Section Styles -----\n    ---------------------------------------\n*/\n.optional-section {\n  padding: 50px 15px;\n  text-align: center;\n  border-top: 1px solid #dcd9d9; }\n.optional-section h2 {\n    color: #374054; }\n.optional-section-block {\n  max-width: 700px;\n  margin: 0 auto 30px auto;\n  padding: 15px;\n  border: 1px solid #dcd9d9;\n  background: #fff;\n  text-align: left; }\n.optional-section-block h3 {\n    font-weight: 500;\n    margin: 0 0 15px 0;\n    color: #374054; }\n.optional-section-block h4 {\n    color: #74808a;\n    clear: both;\n    font-weight: 500;\n    margin: 0 0 15px 0; }\n.optional-section-block p, .optional-section-block ul {\n    margin: 0 0 15px 0;\n    color: #74808a;\n    font-size: 0.9em; }\n.optional-section-block ul {\n    padding: 0 0 0 15px; }\n/*\n    -----------------------------\n    ----- 12. Media Queries -----\n    -----------------------------\n*/\n@media only screen and (max-width: 750px) {\n  #experience-timeline:before, #experience-timeline:after {\n    left: 23px; }\n  .vtimeline-date {\n    width: auto;\n    text-align: left;\n    position: relative;\n    margin-bottom: 15px;\n    display: block;\n    margin-left: 70px; }\n  .vtimeline-icon {\n    margin-left: 0; }\n  .vtimeline-content {\n    margin-left: 70px; } }\n@media only screen and (max-width: 992px) {\n  #lead {\n    height: auto;\n    min-height: auto;\n    max-height: auto;\n    padding: 100px 15px; }\n  #lead-content {\n    position: relative;\n    -webkit-transform: none;\n            transform: none;\n    left: auto;\n    top: auto; }\n    #lead-content h1 {\n      font-size: 3em; }\n    #lead-content h2 {\n      font-size: 1.75em; }\n  #about {\n    text-align: center; }\n    #about p {\n      text-align: left; } }\n@media only screen and (max-width: 768px) {\n  header {\n    position: fixed;\n    display: none;\n    z-index: 999;\n    -webkit-animation: none;\n            animation: none;\n    bottom: 0;\n    height: 100%; }\n  #mobile-menu-open, #mobile-menu-close {\n    display: block; }\n  #menu {\n    height: 100%;\n    overflow-y: auto;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%; }\n    #menu li {\n      display: block;\n      margin-bottom: 10px; }\n  #lead-content h1 {\n    font-size: 2em; }\n  #lead-content h2 {\n    font-size: 1.3em; }\n  #lead-content a {\n    padding: 10px 20px; }\n  #lead-down {\n    display: none; }\n  .education-block h3, .education-block span {\n    float: none; }\n  .project-image {\n    display: none; }\n  .project-info {\n    position: relative;\n    margin: 0;\n    padding: 30px 15px;\n    top: auto;\n    -webkit-transform: none;\n            transform: none; }\n  footer {\n    text-align: center; }\n  .social {\n    text-align: center; } }\n@media only screen and (max-width: 480px) {\n  #lead-content h1 {\n    font-size: 1.5em; }\n  #lead-content h2 {\n    font-size: 1em; }\n  #lead-content a {\n    font-size: 0.9em;\n    padding: 5px 10px; } }\n.project-page-header {\n  padding: 50px 15px;\n  text-align: center;\n  border-bottom: 1px solid #dcd9d9; }\n.project-page-header h2 {\n    color: #374054; }\n.project-page-header ul {\n    display: block;\n    margin: 0 auto;\n    padding: 0;\n    max-width: 800px; }\n.project-page-header li {\n    display: inline-block;\n    margin: 7px;\n    padding: 5px 10px;\n    color: #374054;\n    background: #e4e4ea;\n    list-style: none;\n    cursor: default;\n    font-size: 1.2em; }\n.project-page-contents {\n  padding-left: 30px;\n  padding-right: 30px; }\n@media (min-width: 992px) {\n    .project-page-contents {\n      width: 800px; } }\n.project-page-contents .video-container {\n    position: relative;\n    padding-bottom: 56.25%;\n    padding-top: 35px;\n    height: 0;\n    overflow: hidden; }\n.project-page-contents .video-container iframe {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%; }\n.project-page-contents img {\n    margin-bottom: 20px; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kushagrakasliwal/Downloads/dev-portfolio-master/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map