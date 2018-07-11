/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _popup = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Output = function () {
	function Output(query, settings) {
		var _this = this;

		_classCallCheck(this, Output);

		var self = this;

		this.list = [];

		document.querySelectorAll(query).forEach(function (element) {
			_this.list.push(new _popup.InfoPopup(element, settings));
		});
	}

	_createClass(Output, [{
		key: "show",
		value: function show(fast) {
			this.list.forEach(function (item) {
				return item.show(fast);
			});
		}
	}, {
		key: "hide",
		value: function hide(fast) {
			this.list.forEach(function (item) {
				return item.hide(fast);
			});
		}
	}, {
		key: "toggle",
		value: function toggle(fast) {
			this.list.forEach(function (item) {
				return item.toggle(fast);
			});
		}
	}, {
		key: "getElementBy",
		value: function getElementBy(query) {}
	}]);

	return Output;
}();

window.InfoPopup = Output;

var out = new Output("[data-info-popup]");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InfoPopup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _functions = __webpack_require__(2);

var func = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
	type: "hover",
	content: "",
	speed: 250,
	zIndex: 100,
	side: "bottom",
	align: "begin",
	showDelay: 0,
	hideDelay: 0,
	hideOnOver: false,
	closeButton: false,
	closeText: "x",
	scrollSense: false,
	className: null,
	onShow: null,
	onHide: null,
	onReady: null
};

var attributes = {
	showDelay: "show-delay",
	hideDelay: "hide-delay",
	hideOnOver: "hide-onover",
	closeButton: "close-button",
	closeText: "close-text",
	scrollSense: "scroll-sense",
	className: "class",
	onShow: "on-show",
	onHide: "on-hide",
	onReady: "on-ready"
};

var InfoPopup = exports.InfoPopup = function () {
	function InfoPopup(target) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, InfoPopup);

		this.target = target;

		func.getSettings(settings, defaults, attributes, target);

		this.speed = settings.speed;
		this.side = settings.side;
		this.align = settings.align;
		this.showDelay = settings.showDelay;
		this.hideDelay = settings.hideDelay;
		this.active = false;

		this._create(settings);
		this._listenEvents(settings);

		this.onShow = func.getCallBack(settings.onShow);
		this.onHide = func.getCallBack(settings.onHide);
		this.onReady = func.getCallBack(settings.onReady);

		if (this.onReady) this.onReady();
	}

	_createClass(InfoPopup, [{
		key: "_create",
		value: function _create(settings) {
			var self = this;

			this.wrapper = func.createElement("div", "info-popup-wrapper");
			this.wrapper.innerHTML = settings.content;

			this.wrapper.style.display = "none";
			this.wrapper.style.position = "fixed";
			this.wrapper.style.transition = settings.speed + "ms, top 0ms, left 0ms";
			this.wrapper.style.zIndex = settings.zIndex;

			if (settings.className) this.wrapper.classList.add(settings.className);

			if (settings.closeButton && settings.type == "click") {
				this.closeButton = func.createElement("button", "close");
				this.closeButton.innerHTML = settings.closeText;
				this.wrapper.appendChild(this.closeButton);
			}

			document.body.appendChild(this.wrapper);
		}
	}, {
		key: "_listenEvents",
		value: function _listenEvents(settings) {
			var self = this;

			if (settings.type == "hover") {
				this.target.addEventListener("mouseover", function () {
					self.show();
				});

				if (!settings.hideOnOver) this.wrapper.addEventListener("mouseover", function () {
					self.show();
				});

				this.target.addEventListener("mouseleave", function () {
					self.hide();
				});

				this.wrapper.addEventListener("mouseleave", function () {
					self.hide();
				});
			} else if (settings.type == "click") {
				this.target.addEventListener("click", function () {
					self.toggle();
				});

				if (this.closeButton) this.closeButton.onclick = function () {
					self.hide(true);
				};
			}

			if (settings.scrollSense) window.addEventListener("scroll", function () {
				if (self.active) self._updatePosition();
			});
		}
	}, {
		key: "_updatePosition",
		value: function _updatePosition() {
			var offsetX = 0,
			    offsetY = 0,
			    rect = this.target.getBoundingClientRect();

			switch (this.side) {
				case "top":
					offsetX = this._align(this.align, rect.x, rect.width, this.wrapper.offsetWidth);
					offsetY = rect.top - this.wrapper.offsetHeight;
					break;

				case "bottom":
					offsetX = this._align(this.align, rect.x, rect.width, this.wrapper.offsetWidth);
					offsetY = rect.bottom;
					break;

				case "left":
					offsetY = this._align(this.align, rect.y, rect.height, this.wrapper.offsetHeight);
					offsetX = rect.left - this.wrapper.offsetWidth;
					break;

				case "right":
					offsetY = this._align(this.align, rect.y, rect.height, this.wrapper.offsetHeight);
					offsetX = rect.right;
					break;
			}

			this.wrapper.style.top = offsetY + "px";
			this.wrapper.style.left = offsetX + "px";
		}
	}, {
		key: "_align",
		value: function _align(direction, value, sizeTarget, sizeWrap) {
			switch (direction) {
				case "begin":
					value = value;break;
				case "middle":
					value = value + sizeTarget / 2 - sizeWrap / 2;break;
				case "end":
					value = value + sizeTarget - sizeWrap;break;
			}

			return value;
		}
	}, {
		key: "toggle",
		value: function toggle(fast) {
			this._updatePosition();
			this.active ? this.hide(fast) : this.show(fast);
		}
	}, {
		key: "show",
		value: function show(fast) {
			var _this = this;

			this.active = true;

			clearTimeout(this.hideTimer);

			if (this.showDelay && !fast) this.showTimer = setTimeout(function () {
				return _this._show();
			}, this.showDelay);else this._show();
		}
	}, {
		key: "_show",
		value: function _show() {
			if (this.active) {
				this.wrapper.style.display = "block";

				this._updatePosition();

				this.wrapper.classList.add("active");
				this.target.classList.add("active");

				if (this.onShow) this.onShow();
			}
		}
	}, {
		key: "hide",
		value: function hide(fast) {
			var _this2 = this;

			this.active = false;

			clearTimeout(this.showTimer);

			if (this.hideDelay && !fast) this.hideTimer = setTimeout(function () {
				return _this2._hide();
			}, this.hideDelay);else this._hide();
		}
	}, {
		key: "_hide",
		value: function _hide() {
			var _this3 = this;

			if (!this.active) {
				this.wrapper.classList.remove("active");

				this.speed ? setTimeout(function () {
					return _this3._hideElements();
				}, this.speed) : this._hideElements();
			}
		}
	}, {
		key: "_hideElements",
		value: function _hideElements() {
			if (!this.active) {
				this.wrapper.style.display = "none";
				this.target.classList.remove("active");

				if (this.onHide) this.onHide();
			}
		}
	}]);

	return InfoPopup;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isTouch = isTouch;
exports.createElement = createElement;
exports.getCallBack = getCallBack;
exports.getSettings = getSettings;
function isTouch() {
	return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
}

function createElement(tag, attr, styles) {
	var element = document.createElement(tag);

	if (typeof attr == "string") element.classList.add(attr);else if ((typeof attr === "undefined" ? "undefined" : _typeof(attr)) == "object") for (var name in attr) {
		element.setAttribute(name, attr[name]);
	}if (styles) {
		for (var name in styles) {
			element.style[name] = styles[name];
		}
	}

	return element;
}

function getCallBack(str) {
	if (typeof str == "string") return new Function("e", str);else if (typeof str == "function") return str;else return null;
}

function getSettings(settings, defaults, attributes, element) {
	for (var i in defaults) {
		if (settings[i] === undefined) {
			var attr = element ? element.getAttribute('data-' + (attributes[i] || i)) : null,
			    num = +attr;

			if (attr === "" || attr === "true") attr = true;else if (attr === "false") attr = false;else if (attr !== null && !isNaN(num)) attr = num;

			settings[i] = attr !== null ? attr : defaults[i];
		}
	}return settings;
}

/***/ })
/******/ ]);