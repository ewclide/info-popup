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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var APIObject = function () {
	function APIObject() {
		_classCallCheck(this, APIObject);

		this._objectList = {};
		this._Output = function (id) {
			this.listId = [].concat(id);
		};
	}

	_createClass(APIObject, [{
		key: "add",
		value: function add(target, id) {
			if (id === undefined) id = Math.random();
			this._objectList[id] = target;
			return id;
		}
	}, {
		key: "remove",
		value: function remove(id) {
			delete this._objectList[id];
		}
	}, {
		key: "output",
		value: function output(id) {
			return new this._Output(id);
		}
	}, {
		key: "_evoke",
		value: function _evoke(target, method, args) {
			var _this = this;

			var result = [];

			target.listId.forEach(function (id) {

				var value = void 0,
				    obj = _this._objectList[id];

				if (obj && typeof obj[method] == "function") value = obj[method].apply(obj, args);

				if (value !== undefined) result.push(value);
			});

			return result.length == 1 ? result[0] : result;
		}
	}, {
		key: "setMethods",
		value: function setMethods(methods) {
			var _this2 = this;

			var self = this;

			methods.forEach(function (method) {
				_this2._Output.prototype[method] = function () {
					return self._evoke(this, method, arguments);
				};
			});
		}
	}]);

	return APIObject;
}();

var API = exports.API = new APIObject();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(0);

var _popup = __webpack_require__(2);

_api.API.setMethods(["show", "hide", "toggle", "setSide", "setAlign", "destroy"]);

function build(query, settings) {
	var list = [],
	    elements = document.querySelectorAll(query);

	// IE supporting
	for (var i = 0; i < elements.length; i++) {
		var popup = new _popup.InfoPopup(elements[i], settings);
		list.push(popup.id);
	}

	return _api.API.output(list);
}

build.getById = function (id) {
	return _api.API.output(id);
};

window.infoPopup = build;

build("[data-infopopup]");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InfoPopup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _functions = __webpack_require__(3);

var func = _interopRequireWildcard(_functions);

var _api = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sides = ["top", "bottom", "left", "right"],
    aligns = ["begin", "middle", "end"];

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
	closeText: "",
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

		// add to API
		this.id = _api.API.add(this, target.id);

		func.getSettings(settings, defaults, attributes, target);

		this.speed = settings.speed;
		this.side = settings.side;
		this.align = settings.align;
		this.showDelay = settings.showDelay;
		this.hideDelay = settings.hideDelay;
		this.active = false;

		this._create(settings);
		this._listenEvents(settings);

		this.setSide(settings.side);
		this.setAlign(settings.align);

		this.onShow = func.getCallBack(settings.onShow);
		this.onHide = func.getCallBack(settings.onHide);
		this.onReady = func.getCallBack(settings.onReady);

		if (this.onReady) this.onReady(_api.API.output(this.id));
	}

	_createClass(InfoPopup, [{
		key: '_create',
		value: function _create(settings) {
			var self = this;

			this.wrapper = func.createElement("div", "info-popup", {
				display: "none",
				position: "absolute",
				transition: settings.speed + "ms",
				zIndex: settings.zIndex
			});

			this.wrapper.innerHTML = settings.content;

			if (settings.className) this.wrapper.classList.add(settings.className);

			if (settings.closeButton && settings.type == "click") {
				this.closeButton = func.createElement("button", "close");
				this.closeButton.innerHTML = settings.closeText;
				this.wrapper.appendChild(this.closeButton);
			}

			document.body.appendChild(this.wrapper);
		}
	}, {
		key: '_listenEvents',
		value: function _listenEvents(settings) {
			var self = this,
			    touch = func.isTouch();

			if (settings.type == "hover" && !touch) {
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
			} else if (settings.type == "click" || touch) {
				this.target.addEventListener("click", function () {
					self.toggle();
				});

				if (this.closeButton) this.closeButton.onclick = function () {
					self.hide(true);
				};
			}
		}
	}, {
		key: '_updatePosition',
		value: function _updatePosition() {
			var offsetX = 0,
			    offsetY = 0,
			    offset = this._getOffset();

			switch (this.side) {
				case "top":
					offsetX = this._align(this.align, offset.left, this.target.offsetWidth, this.wrapper.offsetWidth);
					offsetY = offset.top - this.wrapper.offsetHeight;
					break;

				case "bottom":
					offsetX = this._align(this.align, offset.left, this.target.offsetWidth, this.wrapper.offsetWidth);
					offsetY = offset.bottom;
					break;

				case "left":
					offsetY = this._align(this.align, offset.top, this.target.offsetHeight, this.wrapper.offsetHeight);
					offsetX = offset.left - this.wrapper.offsetWidth;
					break;

				case "right":
					offsetY = this._align(this.align, offset.top, this.target.offsetHeight, this.wrapper.offsetHeight);
					offsetX = offset.right;
					break;
			}

			this.wrapper.style.top = offsetY + "px";
			this.wrapper.style.left = offsetX + "px";
		}
	}, {
		key: '_getOffset',
		value: function _getOffset() {
			var rect = this.target.getBoundingClientRect(),
			    body = document.body,
			    doc = document.documentElement;

			var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop,
			    scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;

			var clientTop = doc.clientTop || body.clientTop || 0,
			    clientLeft = doc.clientLeft || body.clientLeft || 0;

			var top = rect.top + scrollTop - clientTop,
			    left = rect.left + scrollLeft - clientLeft;

			return {
				top: Math.round(top),
				left: Math.round(left),
				bottom: Math.round(top + this.target.offsetHeight),
				right: Math.round(left + this.target.offsetWidth)
			};
		}
	}, {
		key: '_align',
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
		key: 'toggle',
		value: function toggle(fast) {
			this._updatePosition();
			this.active ? this.hide(fast) : this.show(fast);
		}
	}, {
		key: 'show',
		value: function show(fast) {
			var _this = this;

			this.active = true;

			clearTimeout(this.hideTimer);

			if (this.showDelay && !fast) this.showTimer = setTimeout(function () {
				return _this._show();
			}, this.showDelay);else this._show();
		}
	}, {
		key: '_show',
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
		key: 'hide',
		value: function hide(fast) {
			var _this2 = this;

			this.active = false;

			clearTimeout(this.showTimer);

			if (this.hideDelay && !fast) this.hideTimer = setTimeout(function () {
				return _this2._hide();
			}, this.hideDelay);else this._hide();
		}
	}, {
		key: '_hide',
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
		key: '_hideElements',
		value: function _hideElements() {
			if (!this.active) {
				this.wrapper.style.display = "none";
				this.target.classList.remove("active");

				if (this.onHide) this.onHide();
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			_api.API.remove(this.id);
			document.body.removeChild(this.wrapper);
			delete this;
		}
	}, {
		key: 'setSide',
		value: function setSide(side) {
			if (sides.indexOf(side) != -1) {
				this.wrapper.classList.remove(this.side);
				this.side = side;
				this.wrapper.classList.add(side);
			}
		}
	}, {
		key: 'setAlign',
		value: function setAlign(align) {
			if (aligns.indexOf(align) != -1) {
				this.wrapper.classList.remove(this.align);
				this.align = align;
				this.wrapper.classList.add(align);
			}
		}
	}]);

	return InfoPopup;
}();

/***/ }),
/* 3 */
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