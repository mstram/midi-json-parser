// tslint:disable-next-line:max-line-length
export const worker = `!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=27)}([function(t,e,n){var r=n(22)("wks"),o=n(23),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(3),o=n(11);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(4),o=n(40),i=n(41),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e,n){var r=n(22)("keys"),o=n(23);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return a});var r=n(31),o=(n.n(r),{INTERNAL_ERROR:-32603,INVALID_PARAMS:-32602,METHOD_NOT_FOUND:-32601}),i=Object(r.compile)({message:'The requested method called "\${method}" is not supported.',status:o.METHOD_NOT_FOUND}),u=Object(r.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o.INTERNAL_ERROR}),c=Object(r.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o.INTERNAL_ERROR}),a=Object(r.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:o.INVALID_PARAMS})},function(t,e,n){var r=n(1),o=n(9),i=n(16),u=n(2),c=function(t,e,n){var a,f,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,g=t&c.W,y=p?o:o[e]||(o[e]={}),m=y.prototype,b=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(a in n)(f=!l&&b&&void 0!==b[a])&&a in y||(s=f?b[a]:n[a],y[a]=p&&"function"!=typeof b[a]?n[a]:h&&f?i(s,r):g&&b[a]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((y.virtual||(y.virtual={}))[a]=s,t&c.R&&m&&!m[a]&&u(m,a,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(39);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(48),o=n(8);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(7),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(3).f,o=n(6),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(8);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(28),o=n(64);Object(r.a)(self,{parse:function(t){var e=t.arrayBuffer;return{result:Object(o.a)(e)}}})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(29),o=n(62),i=function(t,e){var n=Object(o.a)(i,e),u=Object(r.a)(t,n);return t.addEventListener("message",u),function(){return t.removeEventListener("message",u)}}},function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(30),o=n(14),i=this,u=function(t,e){return function(n){var u=n.data,c=u.id,a=u.method,f=u.params;return r.a(i,void 0,void 0,function(){var n,i,u,s,l,p,d,v,l,h,d,g,y,m,b,O;return r.b(this,function(r){switch(r.label){case 0:n=e[a],r.label=1;case 1:if(r.trys.push([1,6,,7]),void 0===n)throw Object(o.a)({method:a});if(void 0===(i=n(f)))throw Object(o.b)({method:a});if(null!==c)return[3,2];if(void 0!==i.result)throw Object(o.c)({method:a});return[3,5];case 2:return i instanceof Promise?[4,i]:[3,4];case 3:if(u=r.sent(),void 0===u.result)throw Object(o.c)({method:a});return s=u,l=s.result,p=s.transferables,d=void 0===p?[]:p,t.postMessage({id:c,result:l},d),[3,5];case 4:if(void 0===i.result)throw Object(o.c)({method:a});v=i,l=v.result,h=v.transferables,d=void 0===h?[]:h,t.postMessage({id:c,result:l},d),r.label=5;case 5:return[3,7];case 6:return g=r.sent(),y=g,m=y.message,b=y.status,O=void 0===b?-32603:b,t.postMessage({error:{code:O,message:m},id:c}),[3,7];case 7:return[2]}})})}}},function(t,e,n){"use strict";function r(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}a((r=r.apply(t,e||[])).next())})}function o(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(u=a.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){a.label=n[1];break}if(6===n[0]&&a.label<u[1]){a.label=u[1],u=n;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(n);break}u[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,u,c,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c}e.a=r,e.b=o;Object.setPrototypeOf||Array,Object.assign},function(t,e,n){!function(t,r){r(e,n(32),n(60),n(61))}(0,function(t,e,n,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(t,e){return void 0===e?t:e.reduce(function(t,e){if("capitalize"===e){return""+t.charAt(0).toUpperCase()+t.slice(1)}return"dashify"===e?n(t):"prependIndefiniteArticle"===e?r(t)+" "+t:t},t)},i=function(t){var e=t.name+t.modifiers.map(function(t){return"\\\\."+t+"\\\\(\\\\)"}).join("");return new RegExp("\\\\$\\\\{"+e+"}","g")},u=function(t,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,u=[],c=r.exec(t);null!==c;){var a={modifiers:[],name:c[1]};if(void 0!==c[3])for(var f=/\\.[^(]+\\(\\)/g,s=f.exec(c[2]);null!==s;)a.modifiers.push(s[0].slice(1,-2)),s=f.exec(c[2]);u.push(a),c=r.exec(t)}var l=u.reduce(function(t,r){return t.map(function(t){return"string"==typeof t?t.split(i(r)).reduce(function(t,i,u){return 0===u?[i]:r.name in n?[].concat(e(t),[o(n[r.name],r.modifiers),i]):[].concat(e(t),[function(t){return o(t[r.name],r.modifiers)},i])},[]):[t]}).reduce(function(t,n){return[].concat(e(t),e(n))},[])},[t]);return function(t){return l.reduce(function(n,r){return"string"==typeof r?[].concat(e(n),[r]):[].concat(e(n),[r(t)])},[]).join("")}},c=function(t){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],i=void 0===n&&(e instanceof Error||void 0!==e.code&&"Exception"===e.code.slice(-9)),u=i?{cause:e,missingParameters:{}}:{cause:n,missingParameters:e},c=u.cause,a=u.missingParameters,f=void 0===o?new Error:new Error(o(a));return null!==c&&(f.cause=c),void 0!==r&&(f.code=r(a)),void 0!==t.status&&(f.status=t.status),f}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===t.code?void 0:u(t.code,n),o=void 0===t.message?void 0:u(t.message,n);return e};t.compile=c,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,e,n){"use strict";e.__esModule=!0;var r=n(33),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},function(t,e,n){t.exports={default:n(34),__esModule:!0}},function(t,e,n){n(35),n(53),t.exports=n(9).Array.from},function(t,e,n){"use strict";var r=n(36)(!0);n(37)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(7),o=n(8);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(38),o=n(15),i=n(42),u=n(2),c=n(6),a=n(12),f=n(43),s=n(25),l=n(52),p=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,g,y,m){f(n,e,h);var b,O,x,w=function(t){if(!d&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",_="values"==g,U=!1,E=t.prototype,M=E[p]||E["@@iterator"]||g&&E[g],A=M||w(g),P=g?_?w("entries"):A:void 0,S="Array"==e?E.entries||M:M;if(S&&(x=l(S.call(new t)))!==Object.prototype&&x.next&&(s(x,j,!0),r||c(x,p)||u(x,p,v)),_&&M&&"values"!==M.name&&(U=!0,A=function(){return M.call(this)}),r&&!m||!d&&!U&&E[p]||u(E,p,A),a[e]=A,a[j]=v,g)if(b={values:_?A:w("values"),keys:y?A:w("keys"),entries:P},m)for(O in b)O in E||i(E,O,b[O]);else o(o.P+o.F*(d||U),e,b);return b}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(5)&&!n(17)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";var r=n(44),o=n(11),i=n(25),u={};n(2)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(45),i=n(24),u=n(13)("IE_PROTO"),c=function(){},a=function(){var t,e=n(18)("iframe"),r=i.length;for(e.style.display="none",n(51).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(3),o=n(4),i=n(46);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(47),o=n(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(6),o=n(19),i=n(49)(!1),u=n(13)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(19),o=n(21),i=n(50);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(7),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(6),o=n(26),i=n(13)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){"use strict";var r=n(16),o=n(15),i=n(26),u=n(54),c=n(55),a=n(21),f=n(56),s=n(57);o(o.S+o.F*!n(59)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,y=0,m=s(p);if(g&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==m||d==Array&&c(m))for(e=a(p.length),n=new d(e);e>y;y++)f(n,y,g?h(p[y],y):p[y]);else for(l=m.call(p),n=new d;!(o=l.next()).done;y++)f(n,y,g?u(l,h,[o.value,y],!0):o.value);return n.length=y,n}})},function(t,e,n){var r=n(4);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(12),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){"use strict";var r=n(3),o=n(11);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(58),o=n(0)("iterator"),i=n(12);t.exports=n(9).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(20),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");return t.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,function(t){return/[À-ž]/.test(t)?t:"-"}).replace(/^-+|-+$/g,"").replace(/-{2,}/g,function(t){return e&&e.condense?"-":t}).toLowerCase()}},function(t,e){var n=function(t){var e,n,r=/\\w+/.exec(t);if(!r)return"an";n=r[0];var o=n.toLowerCase(),i=["honest","hour","hono"];for(e in i)if(0==o.indexOf(i[e]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var u=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(e=0;e<u.length;e++)if(o.match(u[e]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==t&&void 0!==t.exports?t.exports=n:window.indefiniteArticle=n},function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(63),o=(n.n(r),n(14)),i=new Map,u=function(t,e){return Object.assign({},e,{connect:function(n){var o=n.port;o.start();var u=t(o,e),c=Object(r.generateUniqueNumber)(i);return i.set(c,function(){u(),o.close(),i.delete(c)}),{result:c}},disconnect:function(t){var e=t.portId,n=i.get(e);if(void 0===n)throw Object(o.d)({portId:e.toString()});return n(),{result:null}}})}},function(t,e,n){!function(t,n){n(e)}(0,function(t){"use strict";var e=new WeakMap,n=Number.MAX_SAFE_INTEGER||9007199254740991,r=function(t){var r=e.get(t),o=void 0===r||r>2147483648?0:r+1;if(t.size<1073741824){for(;t.has(o);)o=Math.floor(2147483648*Math.random());return e.set(t,o),o}if(t.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(o);)o=Math.floor(Math.random()*n);return e.set(t,o),o},o=function(t){var e=r(t);return t.add(e),e};t.addUniqueNumber=o,t.generateUniqueNumber=r,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(65),o=n(66),i=function(t){for(var e=new DataView(t),n=c(e),r=14,o=[],i=0,u=n.numberOfTracks;i<u;i+=1){var a=void 0,f=l(e,r);r=f.offset,a=f.track,o.push(a)}return{division:n.division,format:n.format,tracks:o}},u=function(t,e,n){var r=void 0,o=p(t,e),i=o.offset,u=o.value,c=t.getUint8(i);return r=240===c?s(t,i+1):255===c?a(t,i+1):f(c,t,i+1,n),r.event.delta=u,r},c=function(t){if("MThd"!==Object(o.a)(t,0,4))throw new Error('Unexpected characters "'+Object(o.a)(t,0,4)+'" found instead of "MThd"');if(6!==t.getUint32(4))throw new Error("The header has an unexpected length of "+t.getUint32(4)+" instead of 6");var e=t.getUint16(8),n=t.getUint16(10);return{division:t.getUint16(12),format:e,numberOfTracks:n}},a=function(t,e){var n=void 0,r=t.getUint8(e),i=p(t,e+1),u=i.offset,c=i.value;if(1===r)n={text:Object(o.a)(t,u,c)};else if(3===r)n={trackName:Object(o.a)(t,u,c)};else if(5===r)n={lyric:Object(o.a)(t,u,c)};else if(32===r)n={channelPrefix:t.getUint8(u)};else if(33===r)n={midiPort:t.getUint8(u)};else if(47===r)n={endOfTrack:!0};else if(81===r)n={setTempo:{microsecondsPerBeat:(t.getUint8(u)<<16)+(t.getUint8(u+1)<<8)+t.getUint8(u+2)}};else if(84===r){var a=void 0,f=t.getUint8(u);0==(96&f)?a=24:32==(96&f)?a=25:64==(96&f)?a=29:96==(96&f)&&(a=30),n={smpteOffset:{frame:t.getUint8(u+3),frameRate:a,hour:31&f,minutes:t.getUint8(u+1),seconds:t.getUint8(u+2),subFrame:t.getUint8(u+4)}}}else if(88===r)n={timeSignature:{denominator:Math.pow(2,t.getUint8(u+1)),metronome:t.getUint8(u+2),numerator:t.getUint8(u),thirtyseconds:t.getUint8(u+3)}};else{if(89!==r)throw new Error('Cannot parse a meta event with a type of "'+r.toString(16)+'"');n={keySignature:{key:t.getInt8(u),scale:t.getInt8(u+1)}}}return{event:n,offset:u+c}},f=function(t,e,n,r){var o=t>>4,i=0==(128&t)?r:null,u=void 0,c=0==(128&t)?n-1:n;if(8===o||null!==i&&"noteOff"in i)u={noteOff:{noteNumber:e.getUint8(c),velocity:e.getUint8(c+1)}},c+=2;else if(9===o||null!==i&&"noteOn"in i){var a=e.getUint8(c),f=e.getUint8(c+1);u=0===f?{noteOff:{noteNumber:a,velocity:f}}:{noteOn:{noteNumber:a,velocity:f}},c+=2}else if(11===o||null!==i&&"controlChange"in i)u={controlChange:{type:e.getUint8(c),value:e.getUint8(c+1)}},c+=2;else if(12===o||null!==i&&"programChange"in i)u={programChange:{programNumber:e.getUint8(c)}},c+=1;else{if(!(14===o||null!==i&&"pitchBend"in i))throw new Error('Cannot parse a midi event with a type of "'+o.toString(16)+'"');u={pitchBend:e.getUint8(c)|e.getUint8(c+1)<<7},c+=2}return u.channel=15&t,{event:u,offset:c}},s=function(t,e){var n=p(t,e),o=n.offset,i=n.value;return{event:{sysex:Object(r.a)(t,o,i)},offset:o+i}},l=function(t,e){if("MTrk"!==Object(o.a)(t,e,4))throw new Error('Unexpected characters "'+Object(o.a)(t,e,4)+'" found instead of "MTrk"');for(var n=[],r=t.getUint32(e+4)+e+8,i=null,c=e+8;c<r;){var a=u(t,c,i);i=a.event,c=a.offset,n.push(i)}return{offset:c,track:n}},p=function(t,e){for(var n=e,r=0;;){var o=t.getUint8(n);if(n+=1,!(o>127))return r+=o,{offset:n,value:r};r+=127&o,r<<=7}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.byteLength-(e-t.byteOffset),r=e+t.byteOffset,o=[],i=new Uint8Array(t.buffer,r,n),u=0;u<n;u+=1){var c=i[u].toString(16).toUpperCase();1===c.length&&(c=0+c),o[u]=c}return o.join("")}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.byteLength-(e-t.byteOffset),r=e+t.byteOffset,o=new Uint8Array(t.buffer,r,n);return String.fromCharCode.apply(null,o)}}]);`;
