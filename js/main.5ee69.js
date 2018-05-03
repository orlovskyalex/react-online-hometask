(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(33)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _stylesM = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class SectionHeading extends _react.Component {
  render() {
    const {
      number,
      name
    } = this.props;
    return _react.default.createElement("div", {
      className: _stylesM.default.sectionHeading
    }, _react.default.createElement("h1", null, _react.default.createElement("span", {
      className: _stylesM.default.sectionNumber
    }, number), _react.default.createElement("span", {
      className: _stylesM.default.sectionName
    }, name)));
  }

}

exports.default = SectionHeading;
SectionHeading.propTypes = {
  name: _propTypes.default.string.isRequired,
  number: _propTypes.default.string.isRequired
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"degree":"styles-m__degree---_IhWv","eduspace":"styles-m__eduspace---3A6TR","period":"styles-m__period---203eh"};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _stylesM = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Eduspace extends _react.Component {
  render() {
    const {
      degree,
      eduspace,
      period
    } = this.props;
    return _react.default.createElement("div", {
      className: _stylesM.default.eduspace
    }, _react.default.createElement("div", {
      className: _stylesM.default.period
    }, period), _react.default.createElement("div", {
      className: _stylesM.default.eduspace
    }, eduspace), _react.default.createElement("div", {
      className: _stylesM.default.degree
    }, degree));
  }

}

exports.default = Eduspace;
Eduspace.propTypes = {
  degree: _propTypes.default.string.isRequired,
  eduspace: _propTypes.default.string.isRequired,
  period: _propTypes.default.string.isRequired
};

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = [{"id":"123","degree":"Бакалавр наук по экономике","eduspace":"Уортонская школа бизнеса при Пенсильванском университете","period":"09.1992 — 06.1995"},{"id":"456","degree":"Бакалавр естественных наук","eduspace":"Колледж искусств и науки при Пенсильванском университете","period":"09.1992 — 06.1995"}];

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"copyright":"styles-m__copyright---1qXNn","education":"styles-m__education---4m1so"};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(12));

var _education = _interopRequireDefault(__webpack_require__(10));

var _SectionHeading = _interopRequireDefault(__webpack_require__(2));

var _Eduspace = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Skillset extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.education
    }, _react.default.createElement(_SectionHeading.default, {
      name: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435",
      number: "04."
    }), _education.default.length && _education.default.map(({
      id,
      degree,
      eduspace,
      period
    }) => _react.default.createElement(_Eduspace.default, {
      degree: degree,
      eduspace: eduspace,
      key: id,
      period: period
    })), _react.default.createElement("div", {
      className: _stylesM.default.copyright
    }, "2018 \xA9 \u0418\u043B\u043E\u043D \u041C\u0430\u0441\u043A"));
  }

}

exports.default = Skillset;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"action":"styles-m__action---wlZs7","address":"styles-m__address---Z4BS0","contact":"styles-m__contact---3ZUNN"};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _stylesM = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Contact extends _react.Component {
  render() {
    const {
      action,
      address
    } = this.props;
    return _react.default.createElement("div", {
      className: _stylesM.default.contact
    }, _react.default.createElement("div", {
      className: _stylesM.default.action
    }, action), _react.default.createElement("div", {
      className: _stylesM.default.address
    }, address));
  }

}

exports.default = Contact;
Contact.propTypes = {
  action: _propTypes.default.string.isRequired,
  address: _propTypes.default.string.isRequired
};

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = [{"id":"123","action":"Написать","address":"elonmusk@teslamotors.com"},{"id":"456","action":"Набрать","address":"650-681-5000"},{"id":"789","action":"Встретиться","address":"Лос-Анджелес, США"}];

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"contacts":"styles-m__contacts---2VIMP"};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(19));

var _SectionHeading = _interopRequireDefault(__webpack_require__(2));

var _contacts = _interopRequireDefault(__webpack_require__(17));

var _Contact = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Contacts extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.contacts
    }, _react.default.createElement(_SectionHeading.default, {
      name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      number: "03."
    }), _contacts.default.length && _contacts.default.map(({
      id,
      action,
      address
    }) => _react.default.createElement(_Contact.default, {
      action: action,
      address: address,
      key: id
    })));
  }

}

exports.default = Contacts;

/***/ }),
/* 21 */
/***/ (function(module) {

module.exports = [{"id":"123","company":"SolarCity","location":"Сан-Матео, США","period":"06.2006 — настоящее время","position":"Председатель совета директоров"},{"id":"456","company":"Tesla Motors","location":"Пало-Алто, США","period":"02.2004 — настоящее время","position":"Директор и продуктовый архитектор "},{"id":"789","company":"SpaceX","location":"Хоторн, США","period":"06.2002 — настоящее время","position":"Директор и ведущий дизайнер"},{"id":"987","company":"X.com и PayPal","location":"Сан-Хосе, США","period":"03.1999 — 10.2002","position":"Директор"},{"id":"654","company":"Zip2","location":"Калифорния, США","period":"01.1995 — 02.1999","position":"Сооснователь"}];

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"company":"styles-m__company---1dMtg","leftColumn":"styles-m__leftColumn---1Za2e","location":"styles-m__location---1s-z6","period":"styles-m__period---cMzqD","position":"styles-m__position---11iB-","rightColumn":"styles-m__rightColumn---3ayWl","workplace":"styles-m__workplace---vKP8k"};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _stylesM = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Workplace extends _react.Component {
  render() {
    const {
      company,
      location,
      period,
      position
    } = this.props;
    return _react.default.createElement("div", {
      className: _stylesM.default.workplace
    }, _react.default.createElement("div", {
      className: _stylesM.default.leftColumn
    }, _react.default.createElement("div", {
      className: _stylesM.default.period
    }, period), _react.default.createElement("div", {
      className: _stylesM.default.position
    }, position)), _react.default.createElement("div", {
      className: _stylesM.default.rightColumn
    }, _react.default.createElement("div", {
      className: _stylesM.default.location
    }, location), _react.default.createElement("div", {
      className: _stylesM.default.company
    }, company)));
  }

}

exports.default = Workplace;
Workplace.propTypes = {
  company: _propTypes.default.string.isRequired,
  location: _propTypes.default.string.isRequired,
  period: _propTypes.default.string.isRequired,
  position: _propTypes.default.string.isRequired
};

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"experience":"styles-m__experience---21szJ"};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(26));

var _SectionHeading = _interopRequireDefault(__webpack_require__(2));

var _Workplace = _interopRequireDefault(__webpack_require__(24));

var _experience = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Experience extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.experience
    }, _react.default.createElement(_SectionHeading.default, {
      name: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",
      number: "02."
    }), _experience.default.length && _experience.default.map(({
      id,
      company,
      location,
      period,
      position
    }) => _react.default.createElement(_Workplace.default, {
      company: company,
      key: id,
      location: location,
      period: period,
      position: position
    })));
  }

}

exports.default = Experience;

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sectionHeading":"styles-m__sectionHeading---3yhM2","sectionName":"styles-m__sectionName---2w8x5","sectionNumber":"styles-m__sectionNumber---2m1v3"};

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"inactive":"styles-m__inactive---3krkT","skill":"styles-m__skill---10vgm"};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(4);
var ReactPropTypesSecret = __webpack_require__(32);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _stylesM = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Skill extends _react.Component {
  render() {
    const {
      title,
      points
    } = this.props;
    return _react.default.createElement("div", {
      className: _stylesM.default.skill
    }, _react.default.createElement("span", null, title), _react.default.createElement("ul", null, [...Array(10)].map((point, index) => _react.default.createElement("li", {
      className: index > points ? _stylesM.default.inactive : null,
      key: Math.random()
    }))));
  }

}

exports.default = Skill;
Skill.propTypes = {
  points: _propTypes.default.number.isRequired,
  title: _propTypes.default.string.isRequired
};

/***/ }),
/* 35 */
/***/ (function(module) {

module.exports = [{"id":"123","points":7,"title":"Химия"},{"id":"456","points":9,"title":"Физика"},{"id":"789","points":2,"title":"Ядерная инженерия"},{"id":"987","points":9,"title":"Метафизика"},{"id":"654","points":8,"title":"Астронавтика"}];

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"skillset":"styles-m__skillset---3bj_l"};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(37));

var _skillset = _interopRequireDefault(__webpack_require__(35));

var _Skill = _interopRequireDefault(__webpack_require__(34));

var _SectionHeading = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Skillset extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.skillset
    }, _react.default.createElement(_SectionHeading.default, {
      name: "\u041D\u0430\u0431\u043E\u0440 \u0441\u043A\u0438\u043B\u043E\u0432",
      number: "01."
    }), _skillset.default.length && _skillset.default.map(({
      id,
      points,
      title
    }) => _react.default.createElement(_Skill.default, {
      key: id,
      points: points,
      title: title
    })));
  }

}

exports.default = Skillset;

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bottomRow":"styles-m__bottomRow---bbmov","content":"styles-m__content---1JsXE","topRow":"styles-m__topRow---3qtrY"};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(40));

var _Skillset = _interopRequireDefault(__webpack_require__(38));

var _Experience = _interopRequireDefault(__webpack_require__(27));

var _Contacts = _interopRequireDefault(__webpack_require__(20));

var _Education = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Core
// Instruments
// Components
class Content extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.content
    }, _react.default.createElement("div", null, _react.default.createElement("div", {
      className: _stylesM.default.topRow
    }, _react.default.createElement(_Skillset.default, null), _react.default.createElement(_Experience.default, null)), _react.default.createElement("div", {
      className: _stylesM.default.bottomRow
    }, _react.default.createElement(_Contacts.default, null), _react.default.createElement(_Education.default, null))));
  }

}

exports.default = Content;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "/react-online-hometask/images/elon-musk.9a173.png";

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"styles-m__header---JRNbs"};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(44));

var _elonMusk = _interopRequireDefault(__webpack_require__(42));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Core
// Instruments
class Header extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.header
    }, _react.default.createElement("div", null, _react.default.createElement("h1", null, "\u0418\u043B\u043E\u043D \u041C\u0430\u0441\u043A"), _react.default.createElement("span", null, "\u041F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C, \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043B\u044C, \u0438\u043D\u0436\u0435\u043D\u0435\u0440, \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440"), _react.default.createElement("p", null, "\u0421\u0442\u0440\u0435\u043C\u043B\u044E\u0441\u044C \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0442\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0437\u0430 \u0441\u0447\u0451\u0442 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0438 \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u044F \xAB\u0440\u0438\u0441\u043A\u0430 \u0438\u0441\u0447\u0435\u0437\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430\xBB, \u0441\u0434\u0435\u043B\u0430\u0432 \u0436\u0438\u0437\u043D\u044C \u043C\u043D\u043E\u0433\u043E\u043F\u043B\u0430\u043D\u0435\u0442\u043D\u043E\u0439 \u0438 \u0441\u043E\u0437\u0434\u0430\u0432 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0443\u044E \u043A\u043E\u043B\u043E\u043D\u0438\u044E \u043D\u0430 \u041C\u0430\u0440\u0441\u0435.")), _react.default.createElement("img", {
      src: _elonMusk.default
    }));
  }

}

exports.default = Header;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(0)),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(46);
} else {}


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactHotLoader = __webpack_require__(47);

var _Header = _interopRequireDefault(__webpack_require__(45));

var _Content = _interopRequireDefault(__webpack_require__(41));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Cv = (_dec = (0, _reactHotLoader.hot)(module), _dec(_class = class Cv extends _react.Component {
  render() {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Header.default, null), _react.default.createElement(_Content.default, null));
  }

}) || _class);
exports.default = Cv;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)(module)))

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(52);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(53);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(59));

__webpack_require__(51);

var _Cv = _interopRequireDefault(__webpack_require__(49));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Core
// Theme
// App
_reactDom.default.render(_react.default.createElement(_Cv.default, null), document.getElementById('app'));

/***/ })
],[[61,0,2,1]]]);
//# sourceMappingURL=main.5ee69.js.map