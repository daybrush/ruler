/*
Copyright (c) Daybrush
name: @scena/ruler
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/ruler.git
version: 0.18.2
*/
'use strict';

var frameworkUtils = require('framework-utils');
var React = require('croact');
var ReactRuler = require('croact-ruler');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var PROPERTIES = ReactRuler.PROPERTIES;
var METHODS = ReactRuler.METHODS;

var InnerRuler =
/*#__PURE__*/
function (_super) {
  __extends(InnerRuler, _super);

  function InnerRuler(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    _this.state = _this.props;
    return _this;
  }

  var __proto = InnerRuler.prototype;

  __proto.render = function () {
    return React.createElement(ReactRuler, __assign({
      ref: frameworkUtils.ref(this, "ruler")
    }, this.state));
  };

  return InnerRuler;
}(React.Component);

/**
 * A Ruler component that can draw grids and scroll infinitely.
 * @sort 1
 * @implements Ruler.RulerInterface
 */

var Ruler =
/*#__PURE__*/
function () {
  /**
   * @param - container
   * @param {$ts:Partial<Ruler.RulerProps>} options - options
   */
  function Ruler(parentElement, options) {
    if (options === void 0) {
      options = {};
    }

    this.containerProvider = null;
    this.selfElement = null;
    this._warp = false;
    var selfElement;

    if (options.warpSelf) {
      delete options.warpSelf;
      this._warp = true;
      selfElement = parentElement;
    } else {
      selfElement = document.createElement("div");
      parentElement.appendChild(selfElement);
    }

    React.renderSelf(React.createElement(InnerRuler, __assign({
      ref: frameworkUtils.ref(this, "innerRuler")
    }, options)), selfElement);
  }

  var __proto = Ruler.prototype;

  __proto.scroll = function (scrollPos) {
    this.getRuler().scroll(scrollPos);
  };

  __proto.resize = function () {
    this.getRuler().resize();
  };

  __proto.getScrollPos = function () {
    return this.getRuler().getScrollPos();
  };
  /**
   * Remove Ruler
   */


  __proto.destroy = function () {
    var _a;

    var selfElement = this.selfElement;
    React.renderSelf(null, selfElement, this.containerProvider);

    if (!this._warp) {
      (_a = selfElement === null || selfElement === void 0 ? void 0 : selfElement.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(selfElement);
    }

    this.selfElement = null;
    this.innerRuler = null;
  };

  __proto.getRuler = function () {
    return this.innerRuler.ruler;
  };

  Ruler = __decorate([frameworkUtils.Properties(PROPERTIES, function (prototype, property) {
    Object.defineProperty(prototype, property, {
      get: function () {
        return this.getRuler().props[property];
      },
      set: function (value) {
        var _a;

        this.innerRuler.setState((_a = {}, _a[property] = value, _a));
      },
      enumerable: true,
      configurable: true
    });
  })], Ruler);
  return Ruler;
}();



var others = {
    __proto__: null,
    'default': Ruler,
    PROPERTIES: PROPERTIES,
    METHODS: METHODS
};

for (var name in others) {
  Ruler[name] = others[name];
}

module.exports = Ruler;
//# sourceMappingURL=ruler.cjs.js.map
