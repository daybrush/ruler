/*
Copyright (c) 2019 Daybrush
name: @scena/ruler
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/ruler.git
version: 0.2.0
*/
'use strict';

var frameworkUtils = require('framework-utils');
var preact = require('preact');
var compat = require('preact/compat');
var PreactRuler = require('preact-ruler');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var PROPERTIES = ["type", "width", "height", "unit", "zoom", "style", "backgroundColor", "lineColor", "textColor"];

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
    var _a = this.state,
        parentElement = _a.parentElement,
        state = __rest(_a, ["parentElement"]);

    return compat.createPortal(preact.h(PreactRuler, __assign({
      ref: frameworkUtils.ref(this, "preactRuler")
    }, state)), parentElement);
  };

  return InnerRuler;
}(preact.Component);

var Ruler =
/*#__PURE__*/
function () {
  function Ruler(parentElement, options) {
    if (options === void 0) {
      options = {};
    }

    this.tempElement = document.createElement("div");
    preact.render(preact.h(InnerRuler, __assign({
      ref: frameworkUtils.ref(this, "innerRuler")
    }, options, {
      parentElement: parentElement
    })), this.tempElement);
  }

  var __proto = Ruler.prototype;

  __proto.scroll = function (scrollPos) {
    this.getRuler().scroll(scrollPos);
  };

  __proto.resize = function () {
    this.getRuler().resize();
  };

  __proto.destroy = function () {
    preact.render("", this.tempElement);
    this.tempElement = null;
    this.innerRuler = null;
  };

  __proto.getRuler = function () {
    return this.innerRuler.preactRuler;
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

Ruler.PROPERTIES = PROPERTIES;

module.exports = Ruler;
//# sourceMappingURL=ruler.cjs.js.map
