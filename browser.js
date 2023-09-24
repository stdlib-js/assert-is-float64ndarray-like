// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(t){var e,n,f;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,f=parseInt(n,10),!isFinite(f)){if(!r(n))throw new Error("invalid integer. Value: "+n);f=0}return f<0&&("u"===t.specifier||10!==e)&&(f=4294967295+f+1),f<0?(n=(-f).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=f.toString(e),f||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(t){return"string"==typeof t}var s=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,h=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,_=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":s(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,b,"e"),n=p.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,h,"e+0$1"),n=p.call(n,y,"e-0$1"),t.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===l.call(t.specifier)?l.call(n):c.call(n)}function v(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function O(t,e,r){var n=e-t.length;return n<0?t:t=r?t+v(n):v(n)+t}var A=String.fromCharCode,E=isNaN,j=Array.isArray;function I(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function x(t){var e,r,n,o,a,s,c,l,p;if(!j(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(s="",c=1,l=0;l<t.length;l++)if(u(n=t[l]))s+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function N(t){var e,r,n,i;for(r=[],i=0,n=U.exec(t);n;)(e=t.slice(i,U.lastIndex-n[0].length)).length&&r.push(e),r.push(S(n)),i=U.lastIndex,n=U.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function T(t){return"string"==typeof t}function R(t){var e,r,n;if(!T(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=N(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return x.apply(null,r)}var B,L=Object.prototype,F=L.toString,V=L.__defineGetter__,C=L.__defineSetter__,M=L.__lookupGetter__,P=L.__lookupSetter__;B=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(M.call(t,e)||P.call(t,e)?(n=t.__proto__,t.__proto__=L,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(t,e,r.get),a&&C&&C.call(t,e,r.set),t};var k=B;function G(t,e,r){k(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function D(t){return"boolean"==typeof t}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return Y&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString,W=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof X?X.toStringTag:"",H=$()?function(t){var e,r,n,i,o;if(null==t)return J.call(t);r=t[Z],o=Z,e=null!=(i=t)&&W.call(i,o);try{t[Z]=void 0}catch(e){return J.call(t)}return n=J.call(t),e?t[Z]=r:delete t[Z],n}:function(t){return J.call(t)},z=Boolean,q=Boolean.prototype.toString,K=$();function Q(t){return"object"==typeof t&&(t instanceof z||(K?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===H(t)))}function tt(t){return D(t)||Q(t)}function et(){return new Function("return this;")()}G(tt,"isPrimitive",D),G(tt,"isObject",Q);var rt="object"==typeof self?self:null,nt="object"==typeof window?window:null,it="object"==typeof globalThis?globalThis:null;function ot(t){if(arguments.length){if(!D(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return et()}if(it)return it;if(rt)return rt;if(nt)return nt;throw new Error("unexpected error. Unable to resolve global object.")}var at=ot();function ft(t,e,r){k(t,e,{configurable:!1,enumerable:!1,get:r})}var ut={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function st(t){return Math.abs(t)}function ct(t,e){return e&&(2===t||3===t)}function lt(t,e){return e&&(1===t||3===t)}function pt(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function ht(t){return t.re}function yt(t){return t.im}function gt(t){return"string"==typeof t}G(pt,"assign",(function(t,e,r,n){var i,o,a,f,u;for(i=t.length,o=r,a=r,u=0;u<i;u++){if(0===t[u])return n[0]=r,n[1]=r,n;(f=e[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var dt=String.prototype.valueOf,_t=$();function bt(t){return"object"==typeof t&&(t instanceof String||(_t?function(t){try{return dt.call(t),!0}catch(t){return!1}}(t):"[object String]"===H(t)))}function mt(t){return gt(t)||bt(t)}G(mt,"isPrimitive",gt),G(mt,"isObject",bt);var wt=/[-\/\\^$*+?.()|[\]{}]/g,vt=/./,Ot=ot(),At=Ot.document&&Ot.document.childNodes,Et=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;G(jt,"REGEXP",It);var xt=Array.isArray?Array.isArray:function(t){return"[object Array]"===H(t)};function Ut(t){return null!==t&&"object"==typeof t}function St(t){var e,r,n,i;if(("Object"===(r=H(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return Ut(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}G(Ut,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!xt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Ut));var Nt="function"==typeof vt||"object"==typeof Et||"function"==typeof At?function(t){return St(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?St(t).toLowerCase():e},Tt=RegExp.prototype.exec,Rt=$();function Bt(t){return"object"==typeof t&&(t instanceof RegExp||(Rt?function(t){try{return Tt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===H(t)))}function Lt(t,e,r){if(!gt(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));if(gt(e))e=new RegExp(function(t){var e,r;if(!gt(t))throw new TypeError(R("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(wt,"\\$&"):(e=(e=t.substring(1,r)).replace(wt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!Bt(e))throw new TypeError(R("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!gt(r)&&"function"!==Nt(r))throw new TypeError(R("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Ft,Vt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"},Ct="function"==typeof Uint8Array,Mt="function"==typeof Uint8Array?Uint8Array:null,Pt="function"==typeof Uint8Array?Uint8Array:void 0;Ft=function(){var t,e,r;if("function"!=typeof Mt)return!1;try{e=new Mt(e=[1,3.14,-3.14,256,257]),r=e,t=(Ct&&r instanceof Uint8Array||"[object Uint8Array]"===H(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Pt:function(){throw new Error("not implemented")};var kt,Gt=Ft,Dt="function"==typeof Uint16Array,Yt="function"==typeof Uint16Array?Uint16Array:null,$t="function"==typeof Uint16Array?Uint16Array:void 0;kt=function(){var t,e,r;if("function"!=typeof Yt)return!1;try{e=new Yt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Dt&&r instanceof Uint16Array||"[object Uint16Array]"===H(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?$t:function(){throw new Error("not implemented")};var Jt,Wt={uint16:kt,uint8:Gt};(Jt=new Wt.uint16(1))[0]=4660;var Xt=52===new Wt.uint8(Jt.buffer)[0],Zt="function"==typeof ArrayBuffer,Ht="function"==typeof Float64Array;function zt(t){return Ht&&t instanceof Float64Array||"[object Float64Array]"===H(t)}var qt,Kt="function"==typeof Float64Array?Float64Array:null,Qt="function"==typeof Float64Array?Float64Array:void 0;qt=function(){var t,e;if("function"!=typeof Kt)return!1;try{t=zt(e=new Kt([1,3.14,-3.14,NaN]))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Qt:function(){throw new Error("not implemented")};var te,ee=qt,re="function"==typeof ArrayBuffer?ArrayBuffer:null,ne="function"==typeof ArrayBuffer?ArrayBuffer:void 0;te=function(){var t,e,r,n;if("function"!=typeof re)return!1;try{r=new re(16),n=r,(t=(Zt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===H(n))&&"function"==typeof re.isView)&&((e=new ee(r))[0]=-3.14,e[1]=NaN,t=t&&re.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?ne:function(){throw new Error("not implemented")};var ie,oe=te,ae="function"==typeof DataView,fe="function"==typeof DataView?DataView:null,ue="function"==typeof DataView?DataView:void 0;ie=function(){var t,e,r,n;if("function"!=typeof fe)return!1;try{r=new oe(24),e=new fe(r,8),n=e,(t=(ae&&n instanceof DataView||"[object DataView]"===H(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?ue:function(){throw new Error("not implemented")};var se=ie,ce="function"==typeof BigInt?BigInt:void 0,le={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function pe(){var t;return 0===arguments.length?le.all.slice():(t=le[arguments[0]])?t.slice():[]}function he(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ye(t,e,r){k(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function ge(t){return Object.keys(Object(t))}var de,_e=void 0!==Object.keys;function be(t){return"[object Arguments]"===H(t)}de=function(){return be(arguments)}();var me=de,we=Object.prototype.hasOwnProperty;function ve(t){return"number"==typeof t}var Oe=Number,Ae=Oe.prototype.toString,Ee=$();function je(t){return"object"==typeof t&&(t instanceof Oe||(Ee?function(t){try{return Ae.call(t),!0}catch(t){return!1}}(t):"[object Number]"===H(t)))}function Ie(t){return ve(t)||je(t)}function xe(t){return t!=t}function Ue(t){return ve(t)&&xe(t)}function Se(t){return je(t)&&xe(t.valueOf())}function Ne(t){return Ue(t)||Se(t)}G(Ie,"isPrimitive",ve),G(Ie,"isObject",je),G(Ne,"isPrimitive",Ue),G(Ne,"isObject",Se);var Te=Number.POSITIVE_INFINITY,Re=Oe.NEGATIVE_INFINITY,Be=Math.floor;function Le(t){return t<Te&&t>Re&&Be(e=t)===e;var e}function Fe(t){return ve(t)&&Le(t)}function Ve(t){return je(t)&&Le(t.valueOf())}function Ce(t){return Fe(t)||Ve(t)}G(Ce,"isPrimitive",Fe),G(Ce,"isObject",Ve);var Me=Object.prototype.propertyIsEnumerable,Pe=!Me.call("beep","0");function ke(t,e){var r;return null!=t&&(!(r=Me.call(t,e))&&Pe&&mt(t)?!Ue(e=+e)&&Fe(e)&&e>=0&&e<t.length:r)}var Ge=Array.isArray?Array.isArray:function(t){return"[object Array]"===H(t)},De=Math.floor,Ye=me?be:function(t){return null!==t&&"object"==typeof t&&!Ge(t)&&"number"==typeof t.length&&(e=t.length,De(e)===e)&&t.length>=0&&t.length<=4294967295&&function(t,e){return null!=t&&we.call(t,e)}(t,"callee")&&!ke(t,"callee");var e},$e=Array.prototype.slice,Je=Object.prototype.hasOwnProperty;function We(t,e){return null!=t&&Je.call(t,e)}var Xe=ke((function(){}),"prototype"),Ze=!ke({toString:null},"toString"),He=Math.floor;function ze(t){return He(t)===t}function qe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ze(t.length)&&t.length>=0&&t.length<=9007199254740991}var Ke=Oe.NEGATIVE_INFINITY;function Qe(t){return t<Te&&t>Ke&&ze(t)}function tr(t){return ve(t)&&Qe(t)}function er(t){return je(t)&&Qe(t.valueOf())}function rr(t){return tr(t)||er(t)}function nr(t,e,r){var n,i;if(!qe(t)&&!gt(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!tr(r))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Ne(e)){for(;i<n;i++)if(Ne(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}G(rr,"isPrimitive",tr),G(rr,"isObject",er);var ir=/./,or=ot(),ar=or.document&&or.document.childNodes,fr=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;function cr(t){var e,r,n,i;if(("Object"===(r=H(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return Ut(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}G(ur,"REGEXP",sr);var lr="function"==typeof ir||"object"==typeof fr||"function"==typeof ar?function(t){return cr(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?cr(t).toLowerCase():e};function pr(t){return t.constructor&&t.constructor.prototype===t}var hr,yr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],gr="undefined"==typeof window?void 0:window,dr=function(){var t;if("undefined"===lr(gr))return!1;for(t in gr)try{-1===nr(yr,t)&&We(gr,t)&&null!==gr[t]&&"object"===lr(gr[t])&&pr(gr[t])}catch(t){return!0}return!1}(),_r="undefined"!=typeof window,br=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];hr=_e?function(){return 2!==(ge(arguments)||"").length}(1,2)?function(t){return Ye(t)?ge($e.call(t)):ge(t)}:ge:function(t){var e,r,n,i,o,a,f;if(i=[],Ye(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!We(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(0==(n="function"==typeof t)&&!Ut(t))return i;r=Xe&&n}for(o in t)r&&"prototype"===o||!We(t,o)||i.push(String(o));if(Ze)for(e=function(t){if(!1===_r&&!dr)return pr(t);try{return pr(t)}catch(t){return!1}}(t),f=0;f<br.length;f++)a=br[f],e&&"constructor"===a||!We(t,a)||i.push(String(a));return i};var mr=hr;G(pe,"enum",he),function(t,e){var r,n,i;for(r=mr(e),i=0;i<r.length;i++)ye(t,n=r[i],e[n])}(pe,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var wr=["row-major","column-major"];function vr(){return{"row-major":1,"column-major":2}}G((function(){return wr.slice()}),"enum",vr);var Or=["throw","clamp","wrap"];function Ar(){return{throw:1,clamp:2,wrap:3}}G((function(){return Or.slice()}),"enum",Ar);var Er={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},jr={"row-major":1,"column-major":2},Ir={throw:1,clamp:2,wrap:3},xr=Math.floor,Ur=new Gt(8),Sr=new se(Ur.buffer);function Nr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<Ur.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=xr(t/4294967296),Xt?(Sr.setUint32(0,o,Xt),Sr.setUint32(4,i,Xt)):(Sr.setUint32(0,i,Xt),Sr.setUint32(4,o,Xt)),a=0;a<Ur.length;a++)e[n]=Ur[a],n+=r;return e}G((function(t){var e,r,n,i;return e=new Gt(8),0===t||(i=(4294967295&t)>>>0,n=xr(t/4294967296),r=new se(e.buffer),Xt?(r.setUint32(0,i,Xt),r.setUint32(4,n,Xt)):(r.setUint32(0,n,Xt),r.setUint32(4,i,Xt))),e}),"assign",Nr);var Tr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Rr={"row-major":1,"column-major":2},Br={throw:1,clamp:2,wrap:3};function Lr(t,e,r,n,i,o){var a,f,u,s,c;if(!(this instanceof Lr))return new Lr(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=function(t){return ut[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=z(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=pt(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),u=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=st(t[0]),a=1;a<r;a++){if(o=st(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:lt(u,a),COLUMN_MAJOR_CONTIGUOUS:ct(u,a),READONLY:!1},this.__meta_dataview__=null,this}return G(Lr,"name","ndarray"),ft(Lr.prototype,"byteLength",(function(){return this._byteLength})),ft(Lr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),ft(Lr.prototype,"data",(function(){return this._buffer})),ft(Lr.prototype,"dtype",(function(){return this._dtype})),ft(Lr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),ft(Lr.prototype,"length",(function(){return this._length})),ft(Lr.prototype,"ndims",(function(){return this._ndims})),ft(Lr.prototype,"offset",(function(){return this._offset})),ft(Lr.prototype,"order",(function(){return this._order})),ft(Lr.prototype,"shape",(function(){return this._shape.slice()})),ft(Lr.prototype,"strides",(function(){return this._strides.slice()})),G(Lr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),G(Lr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),G(Lr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),G(Lr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),G(Lr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=ht(i=this.iget(o))+", "+yt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=ht(i=this.iget(o))+", "+yt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=ht(i=this.iget(this._length-1-o))+", "+yt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Lt(Vt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),G(Lr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(ht(r),yt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),G(Lr.prototype,"__array_meta_dataview__","function"==typeof at.BigInt&&"function"==typeof BigInt&&"bigint"==typeof at.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h;if(u=this._mode||"throw",a=this._submode||[u],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new se(new oe(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,Xt?1:0),s+=1,f.setInt16(s,Er[n],Xt),s+=2,f.setBigInt64(s,ce(l),Xt),c=8*l,s+=8,h=0;h<l;h++)f.setBigInt64(s,ce(i[h]),Xt),f.setBigInt64(s+c,ce(o[h]*t),Xt),s+=8;for(s+=c,f.setBigInt64(s,ce(this._offset*t),Xt),s+=8,f.setInt8(s,jr[this._order]),s+=1,f.setInt8(s,Ir[u]),s+=1,f.setBigInt64(s,ce(p),Xt),s+=8,h=0;h<p;h++)f.setInt8(s,Ir[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(s,e,Xt),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h,y;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(p=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new se(new oe(n)),e=new Gt(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,Xt?1:0),c+=1,u.setInt16(c,Tr[i],Xt),Nr(p,e,1,c+=2),l=8*p,c+=8,y=0;y<p;y++)Nr(o[y],e,1,c),Nr(a[y]*t,e,1,c+l),c+=8;for(c+=l,Nr(this._offset*t,e,1,c),c+=8,u.setInt8(c,Rr[this._order]),c+=1,u.setInt8(c,Br[s]),Nr(h,e,1,c+=1),c+=8,y=0;y<h;y++)u.setInt8(c,Br[f[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(c,r,Xt),this.__meta_dataview__=u,u}),function(t){return function(t){return t instanceof Lr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&zt(t.data)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isFloat64ndarrayLike=e();
//# sourceMappingURL=browser.js.map
