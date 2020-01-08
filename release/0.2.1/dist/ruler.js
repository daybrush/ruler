/*
Copyright (c) 2019 Daybrush
name: @scena/ruler
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/ruler.git
version: 0.2.1
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Ruler = factory());
}(this, (function () { 'use strict';

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

    /*
    Copyright (c) 2019 Daybrush
    name: framework-utils
    license: MIT
    author: Daybrush
    repository: git+https://github.com/daybrush/framework-utils.git
    version: 0.3.0
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

    var n,u,t,i,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var t,i=arguments,o={};for(t in l)"key"!==t&&"ref"!==t&&(o[t]=l[t]);if(arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(i[t]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===o[t]&&(o[t]=n.defaultProps[t]);return v(n,o,l&&l.key,l&&l.ref)}function v(l,u,t,i){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function y(n){return n.children}function d(n,l){this.props=n,this.context=l;}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(k);}function k(){var n,l,t,i,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(t=[],i=T(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,t,null==r?m(o):r),$(t,o),i!=r&&w(o)));}function _(n,l,u,t,i,o,r,c,s){var h,v,p,y,d,w,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null;}if(y=T(n,u,p=p||f,t,i,o,r,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(v,u.__c||y,u)),null!=y){if(null==w&&(w=y),null!=u.__d)y=u.__d,u.__d=null;else if(o==p||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(d=c,v=0;(d=d.nextSibling)&&v<_;v+=2)if(d==y)break n;n.insertBefore(y,c);}"option"==l.type&&(n.value="");}c=y.nextSibling,"function"==typeof l.type&&(l.__d=y);}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h]);}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)b(n[t],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,t,i){var o;for(o in u)o in l||P(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],t);}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function P(n,l,u,t,i){var o,r,f,e,c;if(i?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(r in t)u&&r in u||C(o,r,"");if(u)for(f in u)t&&u[f]===t[f]||C(o,f,u[f]);}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u));}function N(l){this.l[l.type](n.event?n.event(l):l);}function T(l,u,t,i,o,r,f,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new d(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=i,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(k,h.__s))),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=t.__e,u.__k=t.__k,h.__h.length&&f.push(h),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w);});}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==y&&null==a.key?a.props.children:a),null!=h.getChildContext&&(i=s(s({},i),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,t,i,o,r,f,e,c),h.base=u.__e,h.__h.length&&f.push(h),g&&(h.__E=h.__=null),h.__e=null;}else u.__e=j(t.__e,u,t,i,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){n.__e(l,u,t);}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j(n,l,u,t,i,o,r,c){var s,a,h,v,p,y=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null;}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),y!==d&&n.data!=d&&(n.data=d);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(y=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(y===f)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""));}x(n,d,y,i,c),l.__k=l.props.children,v||_(n,l,u,t,"foreignObject"!==l.type&&i,o,r,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked));}return n}function z(l,u,t){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,t);}}function A(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&(i.current&&i.current!==l.__e||z(i,null,u)),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(l){n.__e(l,u);}i.base=i.__P=null;}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&A(i[r],u,t);null!=o&&a(o);}function D(n,l,u){return this.constructor(n,u)}function E(l,u,t){var i,r,c;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=h(y,null,[l]),c=[],T(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:e.slice.call(u.childNodes),c,t||f,i),$(c,l);}function H(n,l){E(n,l,o);}n={__e:function(n,l){for(var u,t;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(t=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(t=!0,u.componentDidCatch(n)),t)return g(u.__E=u)}catch(l){n=l;}throw n}},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this));},d.prototype.render=y,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0;

    var PROPERTIES = ["type", "width", "height", "unit", "zoom", "style", "backgroundColor", "lineColor", "textColor"];

    var u$1,r$1,i$1=[],o$1=n.__r,f$1=n.diffed,c$1=n.__c,e$1=n.unmount;function _$1(){i$1.some(function(n){n.__P&&(n.__H.u.forEach(g$1),n.__H.u.forEach(q),n.__H.u=[]);}),i$1=[];}function g$1(n){n.m&&n.m();}function q(n){var t=n.i();"function"==typeof t&&(n.m=t);}n.__r=function(n){o$1&&o$1(n),(u$1=n.__c).__H&&(u$1.__H.u.forEach(g$1),u$1.__H.u.forEach(q),u$1.__H.u=[]);},n.diffed=function(t){f$1&&f$1(t);var u=t.__c;if(u){var o=u.__H;o&&o.u.length&&(1!==i$1.push(u)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u));})(_$1));}},n.__c=function(n,t){t.some(function(n){n.__h.forEach(g$1),n.__h=n.__h.filter(function(n){return !n.i||q(n)});}),c$1&&c$1(n,t);},n.unmount=function(n){e$1&&e$1(n);var t=n.__c;if(t){var u=t.__H;u&&u.t.forEach(function(n){return n.m&&n.m()});}};

    function E$1(n,t){for(var e in t)n[e]=t[e];return n}function w$1(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}var C$1=function(n){var t,e;function r(t){var e;return (e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return w$1(this.props,n)||w$1(this.state,t)},r}(d);var A$1=n.vnode;n.vnode=function(n){n.type&&n.type.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),A$1&&A$1(n);};var N$1=n.__e;function R(n){return n&&((n=E$1({},n)).__c=null,n.__k=n.__k&&n.__k.map(R)),n}function M(n){this.__u=0,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.o&&t.o(n)}function j$1(){this.u=null,this.i=null;}n.__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.l)return r.l(n,t.__c);N$1(n,t,e);},(M.prototype=new d).l=function(n,t){var e=this,r=U(e.__v),o=!1,u=function(){o||(o=!0,r?r(i):i());};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c();};var i=function(){--e.__u||(e.__v.__k[0]=e.state.o,e.setState({o:e.__b=null}));};e.__u++||e.setState({o:e.__b=e.__v.__k[0]}),n.then(u,u);},M.prototype.render=function(n,t){return this.__b&&(this.__v.__k[0]=R(this.__b),this.__b=null),[h(d,null,t.o?null:n.children),t.o&&n.fallback]};var z$1=function(n,t,e){if(++e[1]===e[0]&&n.i.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.i.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(j$1.prototype=new d).o=function(n){var t=this,e=U(t.__v),r=t.i.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),z$1(t,n,r)):o();};e?e(u):u();}},j$1.prototype.render=function(n){this.u=null,this.i=new Map;var t=b(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.i.set(t[e],this.u=[1,0,this.u]);return n.children},j$1.prototype.componentDidUpdate=j$1.prototype.componentDidMount=function(){var n=this;n.i.forEach(function(t,e){z$1(n,e,t);});};var L=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function P$1(n){var t=this,e=n.container,r=h(L,{context:t.context},n.vnode);return t.s&&t.s!==e&&(t.h.parentNode&&t.s.removeChild(t.h),A(t.v),t.p=!1),n.vnode?t.p?(e.__k=t.__k,E(r,e),t.__k=e.__k):(t.h=document.createTextNode(""),H("",e),e.appendChild(t.h),t.p=!0,t.s=e,E(r,e,t.h),t.__k=this.h.__k):t.p&&(t.h.parentNode&&t.s.removeChild(t.h),A(t.v)),t.v=r,t.componentWillUnmount=function(){t.h.parentNode&&t.s.removeChild(t.h),A(t.v);},null}function W(n,t){return h(P$1,{vnode:n,container:t})}var D$1=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;d.prototype.isReactComponent={};var T$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;var H$1=n.event;function I(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}n.event=function(n){return H$1&&(n=H$1(n)),n.persist=function(){},n.nativeEvent=n};var $$1={configurable:!0,get:function(){return this.class}},q$1=n.vnode;n.vnode=function(n){n.$$typeof=T$1;var t=n.type,e=n.props;if("function"!=typeof t){var r,o,u;for(u in e.defaultValue&&(e.value||0===e.value||(e.value=e.defaultValue),delete e.defaultValue),Array.isArray(e.value)&&e.multiple&&"select"===t&&(b(e.children).forEach(function(n){-1!=e.value.indexOf(n.props.value)&&(n.props.selected=!0);}),delete e.value),e)if(r=D$1.test(u))break;if(r)for(u in o=n.props={},e)o[D$1.test(u)?u.replace(/([A-Z0-9])/,"-$1").toLowerCase():u]=e[u];}(e.class||e.className)&&($$1.enumerable="className"in e,e.className&&(e.class=e.className),Object.defineProperty(e,"className",$$1)),function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange]);}}}(),"function"==typeof t&&!t.m&&t.prototype&&(I(t.prototype,"componentWillMount"),I(t.prototype,"componentWillReceiveProps"),I(t.prototype,"componentWillUpdate"),t.m=!0),q$1&&q$1(n);};

    /*
    Copyright (c) 2019 Daybrush
    name: preact-ruler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/ruler/blob/master/packages/preact-ruler
    version: 0.2.1
    */

    /*
    Copyright (c) 2019 Daybrush
    name: @scena/react-ruler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/ruler/blob/master/packages/react-ruler
    version: 0.2.1
    */

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
    var extendStatics$1 = function (d, b) {
      extendStatics$1 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
      extendStatics$1(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var Ruler =
    /*#__PURE__*/
    function (_super) {
      __extends$1(Ruler, _super);

      function Ruler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          scrollPos: 0
        };
        _this.width = 0;
        _this.height = 0;
        return _this;
      }

      var __proto = Ruler.prototype;

      __proto.render = function () {
        return h("canvas", {
          ref: ref(this, "canvasElement"),
          style: this.props.style
        });
      };

      __proto.componentDidMount = function () {
        var canvas = this.canvasElement;
        var context = canvas.getContext("2d");
        this.canvasContext = context;
        this.resize();
      };

      __proto.componentDidUpdate = function () {
        this.resize();
      };

      __proto.scroll = function (scrollPos) {
        this.draw(scrollPos);
      };

      __proto.resize = function () {
        var canvas = this.canvasElement;
        var _a = this.props,
            width = _a.width,
            height = _a.height;
        this.width = width || canvas.offsetWidth;
        this.height = height || canvas.offsetHeight;
        canvas.width = this.width * 2;
        canvas.height = this.height * 2;
        this.draw();
      };

      __proto.draw = function (scrollPos) {
        if (scrollPos === void 0) {
          scrollPos = this.state.scrollPos;
        }

        var _a = this.props,
            unit = _a.unit,
            zoom = _a.zoom,
            type = _a.type,
            backgroundColor = _a.backgroundColor,
            lineColor = _a.lineColor,
            textColor = _a.textColor;
        var width = this.width;
        var height = this.height;
        var state = this.state;
        state.scrollPos = scrollPos;
        var context = this.canvasContext;
        var isHorizontal = type === "horizontal";
        context.rect(0, 0, width * 2, height * 2);
        context.fillStyle = backgroundColor;
        context.fill();
        context.save();
        context.scale(2, 2);
        context.strokeStyle = lineColor;
        context.lineWidth = 1;
        context.font = "10px sans-serif";
        context.fillStyle = textColor;
        context.translate(0.5, 0);
        context.beginPath();
        var size = isHorizontal ? width : height;
        var zoomUnit = zoom * unit;
        var minRange = Math.floor(scrollPos * zoom / zoomUnit);
        var maxRange = Math.ceil((scrollPos * zoom + size) / zoomUnit);
        var length = maxRange - minRange;

        for (var i = 0; i < length; ++i) {
          var startPos = ((i + minRange) * unit - scrollPos) * zoom;

          if (startPos >= -zoomUnit && startPos < size) {
            var startX = isHorizontal ? startPos + 3 : width - 18;
            var startY = isHorizontal ? height - 18 : startPos - 4;

            if (isHorizontal) {
              context.fillText("" + (i + minRange) * unit, startX, startY);
            } else {
              context.save();
              context.translate(startX, startY);
              context.rotate(-Math.PI / 2);
              context.fillText("" + (i + minRange) * unit, 0, 0);
              context.restore();
            }
          }

          for (var j = 0; j < 10; ++j) {
            var pos = startPos + j / 10 * zoomUnit;

            if (pos < 0 || pos >= size) {
              continue;
            }

            var lineSize = j === 0 ? isHorizontal ? height : width : j % 2 === 0 ? 10 : 7;
            var x1 = isHorizontal ? pos : width - lineSize;
            var x2 = isHorizontal ? pos : width;
            var y1 = isHorizontal ? height - lineSize : pos;
            var y2 = isHorizontal ? height : pos;
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
          }
        }

        context.stroke();
        context.restore();
      };

      Ruler.defaultProps = {
        type: "horizontal",
        zoom: 1,
        width: 0,
        height: 0,
        unit: 50,
        style: {
          width: "100%",
          height: "100%"
        },
        backgroundColor: "#333333",
        textColor: "#ffffff",
        lineColor: "#777777"
      };
      return Ruler;
    }(C$1);

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

        return W(h(Ruler, __assign({
          ref: ref(this, "preactRuler")
        }, state)), parentElement);
      };

      return InnerRuler;
    }(d);

    var Ruler$1 =
    /*#__PURE__*/
    function () {
      function Ruler(parentElement, options) {
        if (options === void 0) {
          options = {};
        }

        this.tempElement = document.createElement("div");
        E(h(InnerRuler, __assign({
          ref: ref(this, "innerRuler")
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
        E("", this.tempElement);
        this.tempElement = null;
        this.innerRuler = null;
      };

      __proto.getRuler = function () {
        return this.innerRuler.preactRuler;
      };

      Ruler = __decorate([Properties(PROPERTIES, function (prototype, property) {
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

    Ruler$1.PROPERTIES = PROPERTIES;

    return Ruler$1;

})));
//# sourceMappingURL=ruler.js.map
