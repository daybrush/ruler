/*
Copyright (c) Daybrush
name: @scena/ruler
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/ruler.git
version: 0.18.5
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Ruler = factory());
}(this, (function () { 'use strict';

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

    /*
    Copyright (c) 2019 Daybrush
    name: framework-utils
    license: MIT
    author: Daybrush
    repository: git+https://github.com/daybrush/framework-utils.git
    version: 1.1.0
    */
    /* react */

    function ref(target, name) {
      return function (e) {
        e && (target[name] = e);
      };
    }
    /* Class Decorator */

    function Properties(properties, action) {
      return function (component) {
        var prototype = component.prototype;
        properties.forEach(function (property) {
          action(prototype, property);
        });
      };
    }

    /*
    Copyright (c) 2018 Daybrush
    @name: @daybrush/utils
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/utils
    @version 1.11.0
    */
    /**
    * get string "function"
    * @memberof Consts
    * @example
    import {FUNCTION} from "@daybrush/utils";

    console.log(FUNCTION); // "function"
    */
    var FUNCTION = "function";
    /**
    * get string "object"
    * @memberof Consts
    * @example
    import {OBJECT} from "@daybrush/utils";

    console.log(OBJECT); // "object"
    */
    var OBJECT = "object";
    /**
    * get string "string"
    * @memberof Consts
    * @example
    import {STRING} from "@daybrush/utils";

    console.log(STRING); // "string"
    */
    var STRING = "string";
    /**
    * get string "number"
    * @memberof Consts
    * @example
    import {NUMBER} from "@daybrush/utils";

    console.log(NUMBER); // "number"
    */
    var NUMBER = "number";
    /**
    * get string "undefined"
    * @memberof Consts
    * @example
    import {UNDEFINED} from "@daybrush/utils";

    console.log(UNDEFINED); // "undefined"
    */
    var UNDEFINED = "undefined";
    var DEFAULT_UNIT_PRESETS = {
      "cm": function (pos) {
        return pos * 96 / 2.54;
      },
      "mm": function (pos) {
        return pos * 96 / 254;
      },
      "in": function (pos) {
        return pos * 96;
      },
      "pt": function (pos) {
        return pos * 96 / 72;
      },
      "pc": function (pos) {
        return pos * 96 / 6;
      },
      "%": function (pos, size) {
        return pos * size / 100;
      },
      "vw": function (pos, size) {
        if (size === void 0) {
          size = window.innerWidth;
        }
        return pos / 100 * size;
      },
      "vh": function (pos, size) {
        if (size === void 0) {
          size = window.innerHeight;
        }
        return pos / 100 * size;
      },
      "vmax": function (pos, size) {
        if (size === void 0) {
          size = Math.max(window.innerWidth, window.innerHeight);
        }
        return pos / 100 * size;
      },
      "vmin": function (pos, size) {
        if (size === void 0) {
          size = Math.min(window.innerWidth, window.innerHeight);
        }
        return pos / 100 * size;
      }
    };
    /**
    * Check the type that the value is undefined.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {boolean} true if the type is correct, false otherwise
    * @example
    import {isUndefined} from "@daybrush/utils";

    console.log(isUndefined(undefined)); // true
    console.log(isUndefined("")); // false
    console.log(isUndefined(1)); // false
    console.log(isUndefined(null)); // false
    */
    function isUndefined(value) {
      return typeof value === UNDEFINED;
    }
    /**
    * Check the type that the value is object.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isObject} from "@daybrush/utils";

    console.log(isObject({})); // true
    console.log(isObject(undefined)); // false
    console.log(isObject("")); // false
    console.log(isObject(null)); // false
    */
    function isObject(value) {
      return value && typeof value === OBJECT;
    }
    /**
    * Check the type that the value is isArray.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isArray} from "@daybrush/utils";

    console.log(isArray([])); // true
    console.log(isArray({})); // false
    console.log(isArray(undefined)); // false
    console.log(isArray(null)); // false
    */
    function isArray(value) {
      return Array.isArray(value);
    }
    /**
    * Check the type that the value is string.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isString} from "@daybrush/utils";

    console.log(isString("1234")); // true
    console.log(isString(undefined)); // false
    console.log(isString(1)); // false
    console.log(isString(null)); // false
    */
    function isString(value) {
      return typeof value === STRING;
    }
    function isNumber(value) {
      return typeof value === NUMBER;
    }
    /**
    * Check the type that the value is function.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isFunction} from "@daybrush/utils";

    console.log(isFunction(function a() {})); // true
    console.log(isFunction(() => {})); // true
    console.log(isFunction("1234")); // false
    console.log(isFunction(1)); // false
    console.log(isFunction(null)); // false
    */
    function isFunction(value) {
      return typeof value === FUNCTION;
    }
    /**
    * divide text by number and unit.
    * @memberof Utils
    * @param {string} text - text to divide
    * @return {} divided texts
    * @example
    import {splitUnit} from "@daybrush/utils";

    console.log(splitUnit("10px"));
    // {prefix: "", value: 10, unit: "px"}
    console.log(splitUnit("-10px"));
    // {prefix: "", value: -10, unit: "px"}
    console.log(splitUnit("a10%"));
    // {prefix: "a", value: 10, unit: "%"}
    */
    function splitUnit(text) {
      var matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);
      if (!matches) {
        return {
          prefix: "",
          unit: "",
          value: NaN
        };
      }
      var prefix = matches[1];
      var value = matches[2];
      var unit = matches[3];
      return {
        prefix: prefix,
        unit: unit,
        value: parseFloat(value)
      };
    }
    /**
    * transform a camelized string into a lowercased string.
    * @memberof Utils
    * @param {string} text - a camel-cased string
    * @param {string} [separator="-"] - a separator
    * @return {string}  a lowercased string
    * @example
    import {decamelize} from "@daybrush/utils";

    console.log(decamelize("transformOrigin")); // transform-origin
    console.log(decamelize("abcdEfg", "_")); // abcd_efg
    */
    function decamelize(str, separator) {
      if (separator === void 0) {
        separator = "-";
      }
      return str.replace(/([a-z])([A-Z])/g, function (all, letter, letter2) {
        return "" + letter + separator + letter2.toLowerCase();
      });
    }
    /**
    * Returns the index of the first element in the array that satisfies the provided testing function.
    * @function
    * @memberof CrossBrowser
    * @param - The array `findIndex` was called upon.
    * @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
    * @param - Returns defaultIndex if not found by the function.
    * @example
    import { findIndex } from "@daybrush/utils";

    findIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
    */
    function findIndex(arr, callback, defaultIndex) {
      if (defaultIndex === void 0) {
        defaultIndex = -1;
      }
      var length = arr.length;
      for (var i = 0; i < length; ++i) {
        if (callback(arr[i], i, arr)) {
          return i;
        }
      }
      return defaultIndex;
    }
    /**
    * Returns the reverse direction index of the first element in the array that satisfies the provided testing function.
    * @function
    * @memberof CrossBrowser
    * @param - The array `findLastIndex` was called upon.
    * @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
    * @param - Returns defaultIndex if not found by the function.
    * @example
    import { findLastIndex } from "@daybrush/utils";

    findLastIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
    */
    function findLastIndex(arr, callback, defaultIndex) {
      if (defaultIndex === void 0) {
        defaultIndex = -1;
      }
      var length = arr.length;
      for (var i = length - 1; i >= 0; --i) {
        if (callback(arr[i], i, arr)) {
          return i;
        }
      }
      return defaultIndex;
    }
    /**
    * Returns the value of the reverse direction element in the array that satisfies the provided testing function.
    * @function
    * @memberof CrossBrowser
    * @param - The array `findLast` was called upon.
    * @param - A function to execute on each value in the array,
    * @param - Returns defalutValue if not found by the function.
    * @example
    import { find } from "@daybrush/utils";

    find([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // {a: 2}
    */
    function findLast(arr, callback, defalutValue) {
      var index = findLastIndex(arr, callback);
      return index > -1 ? arr[index] : defalutValue;
    }
    /**
    * Returns the value of the first element in the array that satisfies the provided testing function.
    * @function
    * @memberof CrossBrowser
    * @param - The array `find` was called upon.
    * @param - A function to execute on each value in the array,
    * @param - Returns defalutValue if not found by the function.
    * @example
    import { find } from "@daybrush/utils";

    find([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // {a: 2}
    */
    function find(arr, callback, defalutValue) {
      var index = findIndex(arr, callback);
      return index > -1 ? arr[index] : defalutValue;
    }
    /**
    * @function
    * @memberof Utils
    */
    function getKeys(obj) {
      return Object.keys(obj);
    }
    /**
    * @function
    * @memberof Utils
    */
    function getValues(obj) {
      var keys = getKeys(obj);
      return keys.map(function (key) {
        return obj[key];
      });
    }
    /**
    * convert unit size to px size
    * @function
    * @memberof Utils
    */
    function convertUnitSize(pos, size) {
      var _a = splitUnit(pos),
        value = _a.value,
        unit = _a.unit;
      if (isObject(size)) {
        var sizeFunction = size[unit];
        if (sizeFunction) {
          if (isFunction(sizeFunction)) {
            return sizeFunction(value);
          } else if (DEFAULT_UNIT_PRESETS[unit]) {
            return DEFAULT_UNIT_PRESETS[unit](value, sizeFunction);
          }
        }
      } else if (unit === "%") {
        return value * size / 100;
      }
      if (DEFAULT_UNIT_PRESETS[unit]) {
        return DEFAULT_UNIT_PRESETS[unit](value);
      }
      return value;
    }
    /**
    * @function
    * @memberof Utils
    */
    function flat(arr) {
      return arr.reduce(function (prev, cur) {
        return prev.concat(cur);
      }, []);
    }
    /**
    * Sets up a function that will be called whenever the specified event is delivered to the target
    * @memberof DOM
    * @param - event target
    * @param - A case-sensitive string representing the event type to listen for.
    * @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
    * @param - An options object that specifies characteristics about the event listener.
    * @example
    import {addEvent} from "@daybrush/utils";

    addEvent(el, "click", e => {
      console.log(e);
    });
    */
    function addEvent(el, type, listener, options) {
      el.addEventListener(type, listener, options);
    }
    /**
    * removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
    * @memberof DOM
    * @param - event target
    * @param - A case-sensitive string representing the event type to listen for.
    * @param - The EventListener function of the event handler to remove from the event target.
    * @param - An options object that specifies characteristics about the event listener.
    * @example
    import {addEvent, removeEvent} from "@daybrush/utils";
    const listener = e => {
      console.log(e);
    };
    addEvent(el, "click", listener);
    removeEvent(el, "click", listener);
    */
    function removeEvent(el, type, listener, options) {
      el.removeEventListener(type, listener, options);
    }

    /*
    Copyright (c) 2019-present NAVER Corp.
    name: @egjs/list-differ
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-list-differ
    version: 1.0.0
    */
    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var PolyMap =
    /*#__PURE__*/
    function () {
      function PolyMap() {
        this.keys = [];
        this.values = [];
      }

      var __proto = PolyMap.prototype;

      __proto.get = function (key) {
        return this.values[this.keys.indexOf(key)];
      };

      __proto.set = function (key, value) {
        var keys = this.keys;
        var values = this.values;
        var prevIndex = keys.indexOf(key);
        var index = prevIndex === -1 ? keys.length : prevIndex;
        keys[index] = key;
        values[index] = value;
      };

      return PolyMap;
    }();

    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var HashMap =
    /*#__PURE__*/
    function () {
      function HashMap() {
        this.object = {};
      }

      var __proto = HashMap.prototype;

      __proto.get = function (key) {
        return this.object[key];
      };

      __proto.set = function (key, value) {
        this.object[key] = value;
      };

      return HashMap;
    }();

    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var SUPPORT_MAP = typeof Map === "function";

    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var Link =
    /*#__PURE__*/
    function () {
      function Link() {}

      var __proto = Link.prototype;

      __proto.connect = function (prevLink, nextLink) {
        this.prev = prevLink;
        this.next = nextLink;
        prevLink && (prevLink.next = this);
        nextLink && (nextLink.prev = this);
      };

      __proto.disconnect = function () {
        // In double linked list, diconnect the interconnected relationship.
        var prevLink = this.prev;
        var nextLink = this.next;
        prevLink && (prevLink.next = nextLink);
        nextLink && (nextLink.prev = prevLink);
      };

      __proto.getIndex = function () {
        var link = this;
        var index = -1;

        while (link) {
          link = link.prev;
          ++index;
        }

        return index;
      };

      return Link;
    }();

    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */

    function orderChanged(changed, fixed) {
      // It is roughly in the order of these examples.
      // 4, 6, 0, 2, 1, 3, 5, 7
      var fromLinks = []; // 0, 1, 2, 3, 4, 5, 6, 7

      var toLinks = [];
      changed.forEach(function (_a) {
        var from = _a[0],
            to = _a[1];
        var link = new Link();
        fromLinks[from] = link;
        toLinks[to] = link;
      }); // `fromLinks` are connected to each other by double linked list.

      fromLinks.forEach(function (link, i) {
        link.connect(fromLinks[i - 1]);
      });
      return changed.filter(function (_, i) {
        return !fixed[i];
      }).map(function (_a, i) {
        var from = _a[0],
            to = _a[1];

        if (from === to) {
          return [0, 0];
        }

        var fromLink = fromLinks[from];
        var toLink = toLinks[to - 1];
        var fromIndex = fromLink.getIndex(); // Disconnect the link connected to `fromLink`.

        fromLink.disconnect(); // Connect `fromLink` to the right of `toLink`.

        if (!toLink) {
          fromLink.connect(undefined, fromLinks[0]);
        } else {
          fromLink.connect(toLink, toLink.next);
        }

        var toIndex = fromLink.getIndex();
        return [fromIndex, toIndex];
      });
    }

    var Result =
    /*#__PURE__*/
    function () {
      function Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed) {
        this.prevList = prevList;
        this.list = list;
        this.added = added;
        this.removed = removed;
        this.changed = changed;
        this.maintained = maintained;
        this.changedBeforeAdded = changedBeforeAdded;
        this.fixed = fixed;
      }

      var __proto = Result.prototype;
      Object.defineProperty(__proto, "ordered", {
        get: function () {
          if (!this.cacheOrdered) {
            this.caculateOrdered();
          }

          return this.cacheOrdered;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "pureChanged", {
        get: function () {
          if (!this.cachePureChanged) {
            this.caculateOrdered();
          }

          return this.cachePureChanged;
        },
        enumerable: true,
        configurable: true
      });

      __proto.caculateOrdered = function () {
        var ordered = orderChanged(this.changedBeforeAdded, this.fixed);
        var changed = this.changed;
        var pureChanged = [];
        this.cacheOrdered = ordered.filter(function (_a, i) {
          var from = _a[0],
              to = _a[1];
          var _b = changed[i],
              fromBefore = _b[0],
              toBefore = _b[1];

          if (from !== to) {
            pureChanged.push([fromBefore, toBefore]);
            return true;
          }
        });
        this.cachePureChanged = pureChanged;
      };

      return Result;
    }();

    /**
     *
     * @memberof eg.ListDiffer
     * @static
     * @function
     * @param - Previous List <ko> 이전 목록 </ko>
     * @param - List to Update <ko> 업데이트 할 목록 </ko>
     * @param - This callback function returns the key of the item. <ko> 아이템의 키를 반환하는 콜백 함수입니다.</ko>
     * @return - Returns the diff between `prevList` and `list` <ko> `prevList`와 `list`의 다른 점을 반환한다.</ko>
     * @example
     * import { diff } from "@egjs/list-differ";
     * // script => eg.ListDiffer.diff
     * const result = diff([0, 1, 2, 3, 4, 5], [7, 8, 0, 4, 3, 6, 2, 1], e => e);
     * // List before update
     * // [1, 2, 3, 4, 5]
     * console.log(result.prevList);
     * // Updated list
     * // [4, 3, 6, 2, 1]
     * console.log(result.list);
     * // Index array of values added to `list`
     * // [0, 1, 5]
     * console.log(result.added);
     * // Index array of values removed in `prevList`
     * // [5]
     * console.log(result.removed);
     * // An array of index pairs of `prevList` and `list` with different indexes from `prevList` and `list`
     * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
     * console.log(result.changed);
     * // The subset of `changed` and an array of index pairs that moved data directly. Indicate an array of absolute index pairs of `ordered`.(Formatted by: Array<[index of prevList, index of list]>)
     * // [[4, 3], [3, 4], [2, 6]]
     * console.log(result.pureChanged);
     * // An array of index pairs to be `ordered` that can synchronize `list` before adding data. (Formatted by: Array<[prevIndex, nextIndex]>)
     * // [[4, 1], [4, 2], [4, 3]]
     * console.log(result.ordered);
     * // An array of index pairs of `prevList` and `list` that have not been added/removed so data is preserved
     * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
     * console.log(result.maintained);
     */

    function diff(prevList, list, findKeyCallback) {
      var mapClass = SUPPORT_MAP ? Map : findKeyCallback ? HashMap : PolyMap;

      var callback = findKeyCallback || function (e) {
        return e;
      };

      var added = [];
      var removed = [];
      var maintained = [];
      var prevKeys = prevList.map(callback);
      var keys = list.map(callback);
      var prevKeyMap = new mapClass();
      var keyMap = new mapClass();
      var changedBeforeAdded = [];
      var fixed = [];
      var removedMap = {};
      var changed = [];
      var addedCount = 0;
      var removedCount = 0; // Add prevKeys and keys to the hashmap.

      prevKeys.forEach(function (key, prevListIndex) {
        prevKeyMap.set(key, prevListIndex);
      });
      keys.forEach(function (key, listIndex) {
        keyMap.set(key, listIndex);
      }); // Compare `prevKeys` and `keys` and add them to `removed` if they are not in `keys`.

      prevKeys.forEach(function (key, prevListIndex) {
        var listIndex = keyMap.get(key); // In prevList, but not in list, it is removed.

        if (typeof listIndex === "undefined") {
          ++removedCount;
          removed.push(prevListIndex);
        } else {
          removedMap[listIndex] = removedCount;
        }
      }); // Compare `prevKeys` and `keys` and add them to `added` if they are not in `prevKeys`.

      keys.forEach(function (key, listIndex) {
        var prevListIndex = prevKeyMap.get(key); // In list, but not in prevList, it is added.

        if (typeof prevListIndex === "undefined") {
          added.push(listIndex);
          ++addedCount;
        } else {
          maintained.push([prevListIndex, listIndex]);
          removedCount = removedMap[listIndex] || 0;
          changedBeforeAdded.push([prevListIndex - removedCount, listIndex - addedCount]);
          fixed.push(listIndex === prevListIndex);

          if (prevListIndex !== listIndex) {
            changed.push([prevListIndex, listIndex]);
          }
        }
      }); // Sort by ascending order of 'to(list's index).

      removed.reverse();
      return new Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed);
    }

    /*
    Copyright (c) Daybrush
    name: croact
    license: MIT
    author: Daybrush
    repository: git+https://github.com/daybrush/croact.git
    version: 1.0.3
    */

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

    var extendStatics$1 = function(d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$1 = function() {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
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

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    function fillKeys(keys) {
      var index = 0;
      return keys.map(function (key) {
        return key == null ? "$compat".concat(++index) : "".concat(key);
      });
    }
    function flat$1(arr) {
      var arr2 = [];
      arr.forEach(function (el) {
        arr2 = arr2.concat(isArray(el) ? flat$1(el) : el);
      });
      return arr2;
    }
    function fillProps(props, defaultProps) {
      if (!defaultProps) {
        return props;
      }
      for (var name_1 in defaultProps) {
        if (isUndefined(props[name_1])) {
          props[name_1] = defaultProps[name_1];
        }
      }
      return props;
    }
    function isDiff(a, b) {
      if (a === b) {
        return false;
      }
      for (var i in a) {
        if (!(i in b)) {
          return true;
        }
      }
      for (var i in b) {
        if (a[i] !== b[i]) {
          return true;
        }
      }
      return false;
    }
    function getAttributes(props) {
      var className = props.className,
        otherProps = __rest(props, ["className"]);
      if (className != null) {
        otherProps.class = className;
      }
      delete otherProps.style;
      delete otherProps.children;
      return otherProps;
    }
    function splitProps(props) {
      var attributes = {};
      var events = {};
      for (var name_2 in props) {
        if (name_2.indexOf("on") === 0) {
          events[name_2] = props[name_2];
        } else {
          attributes[name_2] = props[name_2];
        }
      }
      return [attributes, events];
    }
    function findContainerNode(provider) {
      if (!provider) {
        return null;
      }
      var base = provider.b;
      if (base instanceof Node) {
        return base;
      }
      return findContainerNode(provider.c);
    }
    function removeNode(node) {
      var parentNode = node.parentNode;
      if (parentNode) {
        parentNode.removeChild(node);
      }
    }
    function executeHooks(hooks) {
      hooks.forEach(function (hook) {
        hook();
      });
    }
    function renderFunctionComponent() {
      return this.constructor(this.props, this.context);
    }
    var Provider = /*#__PURE__*/function () {
      function Provider(
      /**
       * Type
       */
      t,
      /**
       * Depth
       */
      d,
      /**
       * Key
       */
      k,
      /**
       * index
       */
      i,
      /**
       * Container
       */
      c,
      /**
       * Ref
       */
      ref,
      /**
       * Props
       */
      ps) {
        if (ps === void 0) {
          ps = {};
        }
        this.t = t;
        this.d = d;
        this.k = k;
        this.i = i;
        this.c = c;
        this.ref = ref;
        this.ps = ps;
        this.typ = "prov";
        /**
         * providers
         */
        this._ps = [];
        /**
         * Contexts
         */
        this._cs = {};
        /**
         * Whether to hydrate
         */
        this._hyd = null;
        /**
         * is self render
         */
        this._sel = false;
      }
      var __proto = Provider.prototype;
      __proto.s = function () {
        return true;
      };
      /**
       * Update
       */
      __proto.u = function (hooks, contexts, nextElement, nextState, isForceUpdate) {
        var self = this;
        var currentDepth = self.d;
        var scheduledContexts = getValues(contexts).filter(function (context) {
          return context.$_req;
        });
        var scheduledSubs = flat$1(scheduledContexts.map(function (context) {
          return context.$_subs;
        }));
        var isContextUpdate = find(scheduledSubs, function (provider) {
          return provider.d === currentDepth;
        });
        if (self.b && !isString(nextElement) && !isForceUpdate && !self.s(nextElement.props, nextState) && !isContextUpdate) {
          var nextChildSubs = scheduledSubs.reduce(function (childs, sub) {
            var depth = sub.d;
            if (childs[0]) {
              if (childs[0].d === depth) {
                childs.push(sub);
              }
            } else if (depth > currentDepth) {
              childs.push(sub);
            }
            return childs;
          }, []);
          nextChildSubs.forEach(function (child) {
            // provider.container!,
            // [provider],
            // [provider.original],
            // hooks,
            // provider._cs,
            // { ...self.state, ...self.$_state },
            // isForceUpdate,
            renderProviders(child, child._ps, [child.o], hooks, contexts, true);
          });
          return false;
        }
        self.o = nextElement;
        self.ss(nextState);
        // render
        var prevProps = self.ps;
        if (!isString(nextElement)) {
          self.ps = nextElement.props;
          self.ref = nextElement.ref;
        }
        setCurrentInstance(this);
        self.r(hooks, contexts, self.b ? prevProps : {}, nextState);
        return true;
      };
      __proto.md = function () {
        this.rr();
      };
      __proto.ss = function () {
        return;
      };
      __proto.ud = function () {
        this.rr();
      };
      /**
       * register refs
       */
      __proto.rr = function () {
        var self = this;
        var ref = self.ref;
        var fr = self.fr;
        ref && ref(fr ? fr.current : self.b);
      };
      return Provider;
    }();
    function setCurrentInstance(provider) {
      Object.__CROACT_CURRENT_INSTNACE__ = provider;
      return provider;
    }

    var Component = /*#__PURE__*/function () {
      function Component(props, context) {
        if (props === void 0) {
          props = {};
        }
        this.props = props;
        this.context = context;
        this.state = {};
        this.$_timer = 0;
        this.$_state = {};
        this.$_subs = [];
        this.$_cs = {};
      }
      var __proto = Component.prototype;
      __proto.render = function () {
        return null;
      };
      __proto.shouldComponentUpdate = function (props, state) {
        return this.props !== props || this.state !== state;
      };
      __proto.setState = function (state, callback, isForceUpdate) {
        var self = this;
        if (!self.$_timer) {
          self.$_state = {};
        }
        clearTimeout(self.$_timer);
        self.$_timer = 0;
        self.$_state = __assign$1(__assign$1({}, self.$_state), state);
        if (!isForceUpdate) {
          self.$_timer = window.setTimeout(function () {
            self.$_timer = 0;
            self.$_setState(callback, isForceUpdate);
          });
        } else {
          self.$_setState(callback, isForceUpdate);
        }
        return;
      };
      __proto.forceUpdate = function (callback) {
        this.setState({}, callback, true);
      };
      __proto.componentDidMount = function () {};
      __proto.componentDidUpdate = function (prevProps, prevState) {};
      __proto.componentWillUnmount = function () {};
      __proto.$_setState = function (callback, isForceUpdate) {
        var hooks = [];
        var provider = this.$_p;
        var isUpdate = renderProviders(provider.c, [provider], [provider.o], hooks, provider._cs, __assign$1(__assign$1({}, this.state), this.$_state), isForceUpdate);
        if (isUpdate) {
          if (callback) {
            hooks.push(callback);
          }
          executeHooks(hooks);
          setCurrentInstance(null);
        }
      };
      return Component;
    }();
    var PureComponent = /*#__PURE__*/function (_super) {
      __extends$1(PureComponent, _super);
      function PureComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      var __proto = PureComponent.prototype;
      __proto.shouldComponentUpdate = function (props, state) {
        return isDiff(this.props, props) || isDiff(this.state, state);
      };
      return PureComponent;
    }(Component);

    function createRef(defaultValue) {
      var refCallback = function (e) {
        refCallback.current = e;
      };
      refCallback.current = defaultValue;
      return refCallback;
    }

    function createComponent(type, props, contextValue, self) {
      var _a;
      var base;
      if ((_a = type === null || type === void 0 ? void 0 : type.prototype) === null || _a === void 0 ? void 0 : _a.render) {
        base = new type(props, contextValue);
      } else {
        base = new Component(props, contextValue);
        base.constructor = type;
        if (type._fr) {
          self.fr = createRef();
          base.render = function () {
            return this.constructor(this.props, self.fr);
          };
        } else {
          base.render = renderFunctionComponent;
        }
      }
      base.$_p = self;
      return base;
    }
    var ComponentProvider = /*#__PURE__*/function (_super) {
      __extends$1(ComponentProvider, _super);
      function ComponentProvider(type, depth, key, index, container, ref, props) {
        if (props === void 0) {
          props = {};
        }
        var _this = _super.call(this, type, depth, key, index, container, ref, fillProps(props, type.defaultProps)) || this;
        _this.typ = "comp";
        /**
         * Update shift effects
         */
        _this._usefs = [];
        /**
         * Update effects
         */
        _this._uefs = [];
        /**
         * Destroy effects
         */
        _this._defs = [];
        return _this;
      }
      var __proto = ComponentProvider.prototype;
      __proto.s = function (nextProps, nextState) {
        var base = this.b;
        return base.shouldComponentUpdate(fillProps(nextProps, this.t.defaultProps), nextState || base.state) !== false;
      };
      __proto.r = function (hooks, contexts, prevProps) {
        var _a, _b;
        var self = this;
        var type = self.t;
        self.ps = fillProps(self.ps, self.t.defaultProps);
        var props = self.ps;
        var isMount = !self.b;
        var contextType = type.contextType;
        var base = self.b;
        var contextValue = contextType === null || contextType === void 0 ? void 0 : contextType.get(self);
        self._cs = contexts;
        if (isMount) {
          base = createComponent(type, props, contextValue, self);
          self.b = base;
        } else {
          base.props = props;
          base.context = contextValue;
        }
        var prevState = base.state;
        self._usefs = [];
        self._uefs = [];
        var template = base.render();
        if (((_b = (_a = template === null || template === void 0 ? void 0 : template.props) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) === 0) {
          template.props.children = self.ps.children;
        }
        var nextContexts = __assign$1(__assign$1({}, contexts), base.$_cs);
        renderProviders(self, self._ps, template ? [template] : [], hooks, nextContexts);
        if (isMount) {
          self._uefs.push(function () {
            contextType === null || contextType === void 0 ? void 0 : contextType.register(self);
            base.componentDidMount();
          });
        } else {
          self._uefs.push(function () {
            base.componentDidUpdate(prevProps, prevState);
          });
        }
        hooks.push(function () {
          self._usefs.forEach(function (ef) {
            ef();
          });
          if (isMount) {
            self.md();
          } else {
            self.ud();
          }
          self._defs = self._uefs.map(function (ef) {
            return ef();
          });
        });
      };
      __proto.ss = function (nextState) {
        var base = this.b;
        if (!base || !nextState) {
          return;
        }
        base.state = nextState;
      };
      __proto.un = function () {
        var _a;
        var self = this;
        self._ps.forEach(function (provider) {
          provider.un();
        });
        var type = self.t;
        (_a = type.contextType) === null || _a === void 0 ? void 0 : _a.unregister(self);
        clearTimeout(self.b.$_timer);
        self._defs.forEach(function (def) {
          def && def();
        });
        self.b.componentWillUnmount();
      };
      return ComponentProvider;
    }(Provider);

    function diffAttributes(attrs1, attrs2, el) {
      var _a = diffObject(getAttributes(attrs1), getAttributes(attrs2)),
        added = _a.added,
        removed = _a.removed,
        changed = _a.changed;
      for (var name_1 in added) {
        el.setAttribute(name_1, added[name_1]);
      }
      for (var name_2 in changed) {
        el.setAttribute(name_2, changed[name_2][1]);
      }
      for (var name_3 in removed) {
        el.removeAttribute(name_3);
      }
    }
    function diffEvents(events1, events2, provier) {
      var _a = diffObject(events1, events2),
        added = _a.added,
        removed = _a.removed;
      for (var name_4 in removed) {
        provier.e(name_4, true);
      }
      for (var name_5 in added) {
        provier.e(name_5);
      }
    }
    function diffObject(a, b) {
      var keys1 = getKeys(a);
      var keys2 = getKeys(b);
      var result = diff(keys1, keys2, function (key) {
        return key;
      });
      var added = {};
      var removed = {};
      var changed = {};
      result.added.forEach(function (index) {
        var name = keys2[index];
        added[name] = b[name];
      });
      result.removed.forEach(function (index) {
        var name = keys1[index];
        removed[name] = a[name];
      });
      result.maintained.forEach(function (_a) {
        var index = _a[0];
        var name = keys1[index];
        var values = [a[name], b[name]];
        if (a[name] !== b[name]) {
          changed[name] = values;
        }
      });
      return {
        added: added,
        removed: removed,
        changed: changed
      };
    }
    function diffStyle(style1, style2, el) {
      var style = el.style;
      var _a = diffObject(style1, style2),
        added = _a.added,
        removed = _a.removed,
        changed = _a.changed;
      for (var beforeName in added) {
        var name_6 = decamelize(beforeName, "-");
        style.setProperty(name_6, added[beforeName]);
      }
      for (var beforeName in changed) {
        var name_7 = decamelize(beforeName, "-");
        style.setProperty(name_7, changed[beforeName][1]);
      }
      for (var beforeName in removed) {
        var name_8 = decamelize(beforeName, "-");
        style.removeProperty(name_8);
      }
    }
    function getNativeEventName(name) {
      return name.replace(/^on/g, "").toLowerCase();
    }
    var ElementProvider = /*#__PURE__*/function (_super) {
      __extends$1(ElementProvider, _super);
      function ElementProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typ = "elem";
        /**
         * Events
         */
        _this._es = {};
        /**
         * is svg
         */
        _this._svg = false;
        return _this;
      }
      var __proto = ElementProvider.prototype;
      __proto.e = function (name, isRemove) {
        var self = this;
        var events = self._es;
        var base = self.b;
        var eventName = getNativeEventName(name);
        if (isRemove) {
          removeEvent(base, eventName, events[name]);
          delete events[name];
        } else {
          events[name] = function (e) {
            var _a, _b;
            (_b = (_a = self.ps)[name]) === null || _b === void 0 ? void 0 : _b.call(_a, e);
          };
          addEvent(base, eventName, events[name]);
        }
      };
      __proto.s = function (nextProps) {
        return isDiff(this.ps, nextProps);
      };
      __proto.r = function (hooks, contextValues, prevProps) {
        var _a;
        var self = this;
        var isMount = !self.b;
        var nextProps = self.ps;
        if (isMount) {
          var isSVG = false;
          if (self._svg || self.t === "svg") {
            isSVG = true;
          } else {
            var containerNode = findContainerNode(self.c);
            isSVG = containerNode && containerNode.ownerSVGElement;
          }
          self._svg = isSVG;
          var element = (_a = self._hyd) === null || _a === void 0 ? void 0 : _a.splice(0, 1)[0];
          var type = self.t;
          if (element) {
            self._hyd = [].slice.call(element.children || []);
          } else {
            if (isSVG) {
              element = document.createElementNS("http://www.w3.org/2000/svg", type);
            } else {
              element = document.createElement(type);
            }
          }
          self.b = element;
        }
        renderProviders(self, self._ps, nextProps.children, hooks, contextValues);
        var base = self.b;
        var _b = splitProps(prevProps),
          prevAttributes = _b[0],
          prevEvents = _b[1];
        var _c = splitProps(nextProps),
          nextAttributes = _c[0],
          nextEvents = _c[1];
        diffAttributes(prevAttributes, nextAttributes, base);
        diffEvents(prevEvents, nextEvents, self);
        diffStyle(prevProps.style || {}, nextProps.style || {}, base);
        hooks.push(function () {
          if (isMount) {
            self.md();
          } else {
            self.ud();
          }
        });
        return true;
      };
      __proto.un = function () {
        var self = this;
        var events = self._es;
        var base = self.b;
        for (var name_9 in events) {
          removeEvent(base, name_9, events[name_9]);
        }
        self._ps.forEach(function (provider) {
          provider.un();
        });
        self._es = {};
        if (!self._sel) {
          removeNode(base);
        }
      };
      return ElementProvider;
    }(Provider);

    function findDOMNode(comp) {
      if (!comp || comp instanceof Node) {
        return comp;
      }
      var providers = comp.$_p._ps;
      if (!providers.length) {
        return null;
      }
      return findDOMNode(providers[0].b);
    }
    function findNodeProvider(provider) {
      if (!provider) {
        return;
      }
      if (provider.b && provider.b instanceof Node) {
        return provider;
      }
      var providers = provider._ps;
      if (!providers.length) {
        return null;
      }
      return findNodeProvider(providers[0]);
    }
    function createElement(type, props) {
      var children = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
      }
      var _a = props || {},
        key = _a.key,
        ref = _a.ref,
        otherProps = __rest(_a, ["key", "ref"]);
      return {
        type: type,
        key: key,
        ref: ref,
        props: __assign$1(__assign$1({}, otherProps), {
          children: flat(children).filter(function (child) {
            return child != null && child !== false;
          })
        })
      };
    }

    var ContainerProvider = /*#__PURE__*/function (_super) {
      __extends$1(ContainerProvider, _super);
      function ContainerProvider(base, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        var _this = _super.call(this, "container", depth, "container", 0, null) || this;
        _this.typ = "container";
        _this.b = base;
        return _this;
      }
      var __proto = ContainerProvider.prototype;
      __proto.r = function () {
        return true;
      };
      __proto.un = function () {
        return;
      };
      return ContainerProvider;
    }(Provider);
    var TextProvider = /*#__PURE__*/function (_super) {
      __extends$1(TextProvider, _super);
      function TextProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typ = "text";
        return _this;
      }
      var __proto = TextProvider.prototype;
      __proto.r = function (hooks) {
        var _a;
        var self = this;
        var isMount = !self.b;
        if (isMount) {
          var b = (_a = self._hyd) === null || _a === void 0 ? void 0 : _a.splice(0, 1)[0];
          self.b = b || document.createTextNode(self.t.replace("text_", ""));
        }
        hooks.push(function () {
          if (isMount) {
            self.md();
          } else {
            self.ud();
          }
        });
        return true;
      };
      __proto.un = function () {
        removeNode(this.b);
      };
      return TextProvider;
    }(Provider);
    function diffProviders(containerProvider, providers, children) {
      var childrenKeys = children.map(function (p) {
        return isString(p) ? null : p.key;
      });
      var keys1 = fillKeys(providers.map(function (p) {
        return p.k;
      }));
      var keys2 = fillKeys(childrenKeys);
      var result = diff(keys1, keys2, function (key) {
        return key;
      });
      result.removed.forEach(function (index) {
        providers.splice(index, 1)[0].un();
      });
      result.ordered.forEach(function (_a) {
        var from = _a[0],
          to = _a[1];
        var childrenProvider = providers.splice(from, 1)[0];
        providers.splice(to, 0, childrenProvider);
        var el = findDOMNode(childrenProvider.b);
        var next = findDOMNode(providers[to + 1] && providers[to + 1].b);
        if (el) {
          el.parentNode.insertBefore(el, next);
        }
      });
      result.added.forEach(function (index) {
        providers.splice(index, 0, createProvider(children[index], childrenKeys[index], index, containerProvider));
      });
      var changed = result.maintained.filter(function (_a) {
        _a[0];
          var to = _a[1];
        var el = children[to];
        var childProvider = providers[to];
        var type = isString(el) ? "text_".concat(el) : el.type;
        if (type !== childProvider.t) {
          childProvider.un();
          providers.splice(to, 1, createProvider(el, childrenKeys[to], to, containerProvider));
          return true;
        }
        childProvider.i = to;
        return false;
      });
      return __spreadArray(__spreadArray([], result.added, true), changed.map(function (_a) {
        _a[0];
          var to = _a[1];
        return to;
      }), true);
    }

    function getNextSibiling(provider, childProvider) {
      var childProviders = provider._ps;
      var length = childProviders.length;
      for (var i = childProvider.i + 1; i < length; ++i) {
        var el = findDOMNode(childProviders[i].b);
        if (el) {
          return el;
        }
      }
      return null;
    }
    function createProvider(el, key, index, containerProvider) {
      var depth = containerProvider.d + 1;
      if (isString(el) || isNumber(el)) {
        return new TextProvider("text_".concat(el), depth, key, index, containerProvider, null, {});
      }
      var type = el.type;
      var providerClass = typeof type === "string" ? ElementProvider : ComponentProvider;
      return new providerClass(type, depth, key, index, containerProvider, el.ref, el.props);
    }
    function renderProviders(containerProvider, providers, children, updatedHooks, nextContexts, nextState, isForceUpdate) {
      var result = diffProviders(containerProvider, providers, children);
      var hyd = containerProvider._hyd;
      var updated = providers.filter(function (childProvider, i) {
        childProvider._hyd = hyd;
        return childProvider.u(updatedHooks, nextContexts, children[i], nextState, isForceUpdate);
      });
      if (containerProvider.typ === "container" && containerProvider._sel) {
        providers.forEach(function (provider) {
          var nodeProvider = findNodeProvider(provider);
          if (nodeProvider) {
            nodeProvider._sel = true;
          }
        });
      }
      containerProvider._hyd = null;
      var containerNode = findContainerNode(containerProvider);
      if (containerNode) {
        result.reverse().forEach(function (index) {
          var childProvider = providers[index];
          var el = findDOMNode(childProvider.b);
          if (!el) {
            return;
          }
          if (containerNode !== el && !el.parentNode) {
            var nextElement = getNextSibiling(containerProvider, childProvider);
            containerNode.insertBefore(el, nextElement);
          }
        });
      }
      return updated.length > 0;
    }
    function renderProvider(element, container, provider, contexts) {
      if (provider === void 0) {
        provider = container.__CROACT__;
      }
      if (contexts === void 0) {
        contexts = {};
      }
      var isProvider = !!provider;
      if (!provider) {
        provider = new ContainerProvider(container);
      }
      var hooks = [];
      renderProviders(provider, provider._ps, element ? [element] : [], hooks, contexts, undefined, undefined);
      executeHooks(hooks);
      setCurrentInstance(null);
      if (!isProvider) {
        container.__CROACT__ = provider;
      }
      return provider;
    }
    function renderSelf(element, self, containerProvider) {
      if (!containerProvider && element) {
        containerProvider = new ContainerProvider(self.parentElement);
        containerProvider._hyd = [self];
        containerProvider._sel = true;
      }
      renderProvider(element, self, containerProvider);
      return containerProvider;
    }

    /*
    Copyright (c) 2019 Daybrush
    name: @scena/react-ruler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/ruler/blob/master/packages/react-ruler
    version: 0.17.1
    */
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

    var extendStatics$2 = function (d, b) {
      extendStatics$2 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };

      return extendStatics$2(d, b);
    };

    function __extends$2(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics$2(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var Ruler = /*#__PURE__*/function (_super) {
      __extends$2(Ruler, _super);

      function Ruler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          scrollPos: 0
        };
        _this.width = 0;
        _this.height = 0;
        _this._zoom = 0;
        _this._rulerScale = 0;
        _this._observer = null;

        _this._checkResize = function () {
          _this.resize();
        };

        return _this;
      }

      var __proto = Ruler.prototype;

      __proto.render = function () {
        var props = this.props;
        this._zoom = props.zoom;
        return createElement("canvas", {
          ref: ref(this, "canvasElement"),
          style: this.props.style
        });
      };

      __proto.componentDidMount = function () {
        var props = this.props;
        this.state.scrollPos = props.defaultScrollPos || 0;
        var canvas = this.canvasElement;
        var context = canvas.getContext("2d", {
          alpha: false
        });
        this.canvasContext = context;

        if (props.useResizeObserver) {
          this._observer = new ResizeObserver(this._checkResize);

          this._observer.observe(canvas, {
            box: "border-box"
          });
        } else {
          this.resize();
        }
      };

      __proto.componentDidUpdate = function () {
        this.resize();
      };

      __proto.componentWillUnmount = function () {
        var _a;

        this.state.scrollPos = 0;
        (_a = this._observer) === null || _a === void 0 ? void 0 : _a.disconnect();
      };
      /**
       * Gets the scroll position of the ruler.
       */


      __proto.getScrollPos = function () {
        return this.state.scrollPos;
      };
      /**
       * @method Ruler#scroll
       * @param scrollPos
       */


      __proto.scroll = function (scrollPos, nextZoom) {
        this.draw(scrollPos, nextZoom);
      };
      /**
       * @method Ruler#resize
       */


      __proto.resize = function (nextZoom) {
        var canvas = this.canvasElement;
        var _a = this.props,
            width = _a.width,
            height = _a.height,
            scrollPos = _a.scrollPos;

        var rulerScale = this._getRulerScale();

        this.width = width || canvas.offsetWidth;
        this.height = height || canvas.offsetHeight;
        canvas.width = this.width * rulerScale;
        canvas.height = this.height * rulerScale;
        this.draw(scrollPos, nextZoom);
      };

      __proto.draw = function (scrollPos, nextZoom) {
        if (scrollPos === void 0) {
          scrollPos = this.state.scrollPos;
        }

        if (nextZoom === void 0) {
          nextZoom = this._zoom;
        }

        this._zoom = nextZoom;
        var props = this.props;
        var _a = props,
            unit = _a.unit,
            type = _a.type,
            backgroundColor = _a.backgroundColor,
            lineColor = _a.lineColor,
            textColor = _a.textColor,
            textBackgroundColor = _a.textBackgroundColor,
            direction = _a.direction,
            _b = _a.negativeRuler,
            negativeRuler = _b === void 0 ? true : _b,
            _c = _a.segment,
            segment = _c === void 0 ? 10 : _c,
            textFormat = _a.textFormat,
            _d = _a.range,
            range = _d === void 0 ? [-Infinity, Infinity] : _d,
            rangeBackgroundColor = _a.rangeBackgroundColor,
            selectedRanges = _a.selectedRanges,
            selectedBackgroundColor = _a.selectedBackgroundColor,
            _e = _a.lineWidth,
            lineWidth = _e === void 0 ? 1 : _e,
            selectedRangesText = _a.selectedRangesText,
            _f = _a.selectedRangesTextColor,
            selectedRangesTextColor = _f === void 0 ? "#44aaff" : _f,
            _g = _a.selectedRangesTextOffset,
            selectedRangesTextOffset = _g === void 0 ? [0, 0] : _g;

        var rulerScale = this._getRulerScale();

        var width = this.width;
        var height = this.height;
        var state = this.state;
        state.scrollPos = scrollPos;
        var context = this.canvasContext;
        var isHorizontal = type === "horizontal";
        var isNegative = negativeRuler !== false;
        var font = props.font || "10px sans-serif";
        var textAlign = props.textAlign || "left";
        var textOffset = props.textOffset || [0, 0];
        var containerSize = isHorizontal ? height : width;
        var mainLineSize = convertUnitSize("".concat(props.mainLineSize || "100%"), containerSize);
        var longLineSize = convertUnitSize("".concat(props.longLineSize || 10), containerSize);
        var shortLineSize = convertUnitSize("".concat(props.shortLineSize || 7), containerSize);
        var lineOffset = props.lineOffset || [0, 0];

        if (backgroundColor === "transparent") {
          // Clear existing paths & text
          context.clearRect(0, 0, width * rulerScale, height * rulerScale);
        } else {
          // Draw the background
          context.rect(0, 0, width * rulerScale, height * rulerScale);
          context.fillStyle = backgroundColor;
          context.fill();
        }

        context.save();
        context.scale(rulerScale, rulerScale);
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.font = font;
        context.fillStyle = textColor;
        context.textAlign = textAlign;

        switch (direction) {
          case "start":
            context.textBaseline = "top";
            break;

          case "center":
            context.textBaseline = "middle";
            break;

          case "end":
            context.textBaseline = "bottom";
            break;
        }

        context.translate(0.5, 0);
        context.beginPath();
        var size = isHorizontal ? width : height;
        var zoomUnit = nextZoom * unit;
        var minRange = Math.floor(scrollPos * nextZoom / zoomUnit);
        var maxRange = Math.ceil((scrollPos * nextZoom + size) / zoomUnit);
        var length = maxRange - minRange;
        var alignOffset = Math.max(["left", "center", "right"].indexOf(textAlign) - 1, -1);
        var barSize = isHorizontal ? height : width;
        var values = [];

        for (var i = 0; i <= length; ++i) {
          var value = (i + minRange) * unit;
          var text = "".concat(value);

          if (textFormat) {
            text = textFormat(value);
          }

          var textSize = context.measureText(text).width;
          values.push({
            color: textColor,
            offset: textOffset,
            backgroundColor: textBackgroundColor,
            value: value,
            text: text,
            textSize: textSize
          });
        } // Draw Selected Range Background


        if (selectedBackgroundColor !== "transparent" && (selectedRanges === null || selectedRanges === void 0 ? void 0 : selectedRanges.length)) {
          selectedRanges.forEach(function (selectedRange) {
            var rangeStart = Math.max(selectedRange[0], range[0], negativeRuler ? -Infinity : 0);
            var rangeEnd = Math.min(selectedRange[1], range[1]);
            var rangeX = (rangeStart - scrollPos) * nextZoom;
            var rangeWidth = (rangeEnd - rangeStart) * nextZoom;

            if (selectedRangesText) {
              selectedRange.forEach(function (value) {
                var text = "".concat(value);

                if (textFormat) {
                  text = textFormat(value);
                }

                var textSize = context.measureText(text).width;
                var startPos = value * nextZoom;
                var endPos = startPos + textSize;
                findLast(values, function (_a, index) {
                  var prevValue = _a.value,
                      prevTextSize = _a.textSize;
                  var prevStartPos = prevValue * nextZoom;
                  var prevEndPos = prevStartPos + prevTextSize;

                  if (prevStartPos <= endPos && startPos <= prevEndPos) {
                    values.splice(index, 1);
                  }
                });
                values.push({
                  value: value,
                  color: selectedRangesTextColor,
                  offset: selectedRangesTextOffset,
                  text: text,
                  textSize: textSize
                });
              });
            }

            if (rangeWidth <= 0) {
              return;
            }

            context.save();
            context.fillStyle = selectedBackgroundColor;

            if (isHorizontal) {
              context.fillRect(rangeX, 0, rangeWidth, barSize);
            } else {
              context.fillRect(0, rangeX, barSize, rangeWidth);
            }

            context.restore();
          });
        } // Draw Range Background


        if (rangeBackgroundColor !== "transparent" && range[0] !== -Infinity && range[1] !== Infinity) {
          var rangeStart = (range[0] - scrollPos) * nextZoom;
          var rangeEnd = (range[1] - range[0]) * nextZoom;
          context.save();
          context.fillStyle = rangeBackgroundColor;

          if (isHorizontal) {
            context.fillRect(rangeStart, 0, rangeEnd, barSize);
          } else {
            context.fillRect(0, rangeStart, barSize, rangeEnd);
          }

          context.restore();
        } // Render Segments First


        for (var i = 0; i <= length; ++i) {
          var value = i + minRange;

          if (!isNegative && value < 0) {
            continue;
          }

          var startValue = value * unit;
          var startPos = (startValue - scrollPos) * nextZoom;

          for (var j = 0; j < segment; ++j) {
            var pos = startPos + j / segment * zoomUnit;
            var value_1 = startValue + j / segment * unit;

            if (pos < 0 || pos >= size || value_1 < range[0] || value_1 > range[1]) {
              continue;
            }

            var lineSize = j === 0 ? mainLineSize : j % 2 === 0 ? longLineSize : shortLineSize;
            var origin = 0;

            switch (direction) {
              case "start":
                origin = 0;
                break;

              case "center":
                origin = barSize / 2 - lineSize / 2;
                break;

              case "end":
                origin = barSize - lineSize;
                break;
            }

            var _h = isHorizontal ? [pos + lineOffset[0], origin + lineOffset[1]] : [origin + lineOffset[0], pos + lineOffset[1]],
                x1 = _h[0],
                y1 = _h[1];

            var _j = isHorizontal ? [x1, y1 + lineSize] : [x1 + lineSize, y1],
                x2 = _j[0],
                y2 = _j[1];

            context.moveTo(x1 + lineOffset[0], y1 + lineOffset[1]);
            context.lineTo(x2 + lineOffset[0], y2 + lineOffset[1]);
          }
        }

        context.stroke(); // Render Labels

        values.forEach(function (_a) {
          var value = _a.value,
              offset = _a.offset,
              backgroundColor = _a.backgroundColor,
              color = _a.color,
              text = _a.text,
              textSize = _a.textSize;

          if (!isNegative && value < 0) {
            return;
          }

          var startPos = (value - scrollPos) * nextZoom;

          if (startPos < -zoomUnit || startPos >= size + unit * nextZoom || value < range[0] || value > range[1]) {
            return;
          }

          var origin = 0;

          switch (direction) {
            case "start":
              origin = 17;
              break;

            case "center":
              origin = barSize / 2;
              break;

            case "end":
              origin = barSize - 17;
              break;
          }

          var _b = isHorizontal ? [startPos + alignOffset * -3, origin] : [origin, startPos + alignOffset * 3],
              startX = _b[0],
              startY = _b[1];

          if (backgroundColor) {
            var backgroundOffset = 0;

            switch (textAlign) {
              case "left":
                backgroundOffset = 0;
                break;

              case "center":
                backgroundOffset = -textSize / 2;
                break;

              case "right":
                backgroundOffset = -textSize;
                break;
            }

            context.save();
            context.fillStyle = backgroundColor;

            if (isHorizontal) {
              context.fillRect(startX + offset[0] + backgroundOffset, 0, textSize, mainLineSize);
            } else {
              context.translate(0, startY + offset[1]);
              context.rotate(-Math.PI / 2);
              context.fillRect(backgroundOffset, 0, textSize, mainLineSize);
            }

            context.restore();
          }

          context.save();
          context.fillStyle = color;

          if (isHorizontal) {
            context.fillText(text, startX + offset[0], startY + offset[1]);
          } else {
            context.translate(startX + offset[0], startY + offset[1]);
            context.rotate(-Math.PI / 2);
            context.fillText(text, 0, 0);
          }

          context.restore();
        });
        context.restore();
      };

      __proto._getRulerScale = function () {
        var defaultPixelScale = this.props.defaultPixelScale || 2;

        if (!this._rulerScale) {
          var isHighDensity = window.devicePixelRatio > 1;

          if (!isHighDensity && window.matchMedia) {
            var mq = window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)');
            isHighDensity = mq && mq.matches;
          }

          this._rulerScale = isHighDensity ? 3 : defaultPixelScale;
        }

        return this._rulerScale;
      };

      Ruler.defaultProps = {
        type: "horizontal",
        zoom: 1,
        width: 0,
        height: 0,
        unit: 50,
        negativeRuler: true,
        mainLineSize: "100%",
        longLineSize: 10,
        shortLineSize: 7,
        segment: 10,
        direction: "end",
        style: {
          width: "100%",
          height: "100%"
        },
        backgroundColor: "#333333",
        font: "10px sans-serif",
        textColor: "#ffffff",
        textBackgroundColor: 'transparent',
        lineColor: "#777777",
        range: [-Infinity, Infinity],
        rangeBackgroundColor: 'transparent',
        lineWidth: 1,
        selectedBackgroundColor: "#555555",
        defaultScrollPos: 0
      };
      return Ruler;
    }(PureComponent);

    var PROPERTIES = ["type", "width", "height", "unit", "zoom", "direction", "textAlign", "font", "segment", "mainLineSize", "longLineSize", "shortLineSize", "lineOffset", "textOffset", "negativeRuler", "range", "scrollPos", "defaultScrollPos", "style", "backgroundColor", "rangeBackgroundColor", "lineColor", "textColor", "textBackgroundColor", "textFormat", "warpSelf", "selectedBackgroundColor", "selectedRanges", "defaultPixelScale", "useResizeObserver", "selectedRangesText", "selectedRangesTextColor", "selectedRangesTextOffset"];
    var METHODS = ["scroll", "resize", "getScrollPos"];

    var PROPERTIES$1 = PROPERTIES;
    var METHODS$1 = METHODS;

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
        return createElement(Ruler, __assign({
          ref: ref(this, "ruler")
        }, this.state));
      };

      return InnerRuler;
    }(Component);

    /**
     * A Ruler component that can draw grids and scroll infinitely.
     * @sort 1
     * @implements Ruler.RulerInterface
     */

    var Ruler$1 =
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
          selfElement = document.createElement("canvas");
          parentElement.appendChild(selfElement);
        }

        renderSelf(createElement(InnerRuler, __assign({
          ref: ref(this, "innerRuler")
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
        renderSelf(null, selfElement, this.containerProvider);

        if (!this._warp) {
          (_a = selfElement === null || selfElement === void 0 ? void 0 : selfElement.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(selfElement);
        }

        this.selfElement = null;
        this.innerRuler = null;
      };

      __proto.getRuler = function () {
        return this.innerRuler.ruler;
      };

      Ruler = __decorate([Properties(PROPERTIES$1, function (prototype, property) {
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
        'default': Ruler$1,
        PROPERTIES: PROPERTIES$1,
        METHODS: METHODS$1
    };

    for (var name in others) {
      Ruler$1[name] = others[name];
    }

    return Ruler$1;

})));
//# sourceMappingURL=ruler.js.map
