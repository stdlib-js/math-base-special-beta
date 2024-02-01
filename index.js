// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"",u=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,a,u,f;if(null==r)return t.call(r);n=r[o],f=o,e=null!=(u=r)&&i.call(u,f);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=n:delete r[o],a}:function(r){return t.call(r)},f="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var l,p=e,y="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),n=e,r=(y&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,v=l,w="function"==typeof Uint8Array,b="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),n=e,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A,_=h,E="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;A=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,r=(E&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,x={uint16:A,uint8:_};(S=new x.uint16(1))[0]=4660;var k=52===new x.uint8(S.buffer)[0],F=!0===k?1:0,j=new v(1),N=new p(j.buffer);function T(r){return j[0]=r,N[F]}var O=!0===k?1:0,V=new v(1),$=new p(V.buffer);function G(r,e){return V[0]=r,$[O]=e>>>0,V[0]}var H=Number.POSITIVE_INFINITY,W=Number.NEGATIVE_INFINITY,C=1023,L=.6931471803691238,P=1.9082149292705877e-10,R=Math.sqrt;function M(r){return Math.abs(r)}var Z=Math.floor,X=Math.ceil;function Y(r){return r<0?X(r):Z(r)}function q(r){return r===H||r===W}var z=2147483647,B="function"==typeof Object.defineProperty?Object.defineProperty:null,D=Object.defineProperty;function J(r){return"number"==typeof r}function K(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Q(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+K(i):K(i)+r,t&&(r="-"+r)),r}var rr=String.prototype.toLowerCase,er=String.prototype.toUpperCase;function nr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!J(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Q(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Q(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===er.call(r.specifier)?er.call(n):rr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function tr(r){return"string"==typeof r}var ir=Math.abs,ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase,ur=String.prototype.replace,fr=/e\+(\d)$/,cr=/e-(\d)$/,sr=/^(\d+)$/,lr=/^(\d+)e/,pr=/\.0$/,yr=/\.0*e/,gr=/(\..*[^0])0*e/;function dr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!J(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":ir(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=ur.call(n,gr,"$1e"),n=ur.call(n,yr,"e"),n=ur.call(n,pr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=ur.call(n,fr,"e+0$1"),n=ur.call(n,cr,"e-0$1"),r.alternate&&(n=ur.call(n,sr,"$1."),n=ur.call(n,lr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===or.call(r.specifier)?or.call(n):ar.call(n)}function hr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function vr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+hr(t):hr(t)+r}var wr=String.fromCharCode,br=isNaN,mr=Array.isArray;function Ar(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _r(r){var e,n,t,i,a,o,u,f,c;if(!mr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(tr(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Ar(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,br(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,br(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=nr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!br(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=br(a)?String(t.arg):wr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=dr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Q(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=vr(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Er=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ur(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ir(r){var e,n,t,i;for(n=[],i=0,t=Er.exec(r);t;)(e=r.slice(i,Er.lastIndex-t[0].length)).length&&n.push(e),n.push(Ur(t)),i=Er.lastIndex,t=Er.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Sr(r){return"string"==typeof r}function xr(r){var e,n,t;if(!Sr(r))throw new TypeError(xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ir(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return _r.apply(null,n)}var kr,Fr,jr=Object.prototype,Nr=jr.toString,Tr=jr.__defineGetter__,Or=jr.__defineSetter__,Vr=jr.__lookupGetter__,$r=jr.__lookupSetter__,Gr=function(){try{return B({},"x",{}),!0}catch(r){return!1}}()?D:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Nr.call(r))throw new TypeError(xr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Nr.call(n))throw new TypeError(xr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Vr.call(r,e)||$r.call(r,e)?(t=r.__proto__,r.__proto__=jr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Tr&&Tr.call(r,e,n.get),o&&Or&&Or.call(r,e,n.set),r};function Hr(r,e,n){Gr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(kr=1,Fr=0):(kr=0,Fr=1);var Wr,Cr,Lr={HIGH:kr,LOW:Fr},Pr=new v(1),Rr=new p(Pr.buffer),Mr=Lr.HIGH,Zr=Lr.LOW;function Xr(r,e,n,t){return Pr[0]=r,e[t]=Rr[Mr],e[t+n]=Rr[Zr],e}function Yr(r){return Xr(r,[0,0],1,0)}Hr(Yr,"assign",Xr),!0===k?(Wr=1,Cr=0):(Wr=0,Cr=1);var qr={HIGH:Wr,LOW:Cr},zr=new v(1),Br=new p(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,e){return Br[Dr]=r,Br[Jr]=e,zr[0]}var Qr=[0,0];function re(r,e){var n,t;return Yr.assign(r,Qr,1,0),n=Qr[0],n&=z,t=T(e),Kr(n|=t&=2147483648,Qr[1])}function ee(e,n,t,i){return r(e)||q(e)?(n[i]=e,n[i+t]=0,n):0!==e&&M(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Hr((function(r){return ee(r,[0,0],1,0)}),"assign",ee);var ne=[0,0],te=[0,0];function ie(e,n){var t,i;return 0===n||0===e||r(e)||q(e)?e:(ee(e,ne,1,0),n+=ne[1],n+=function(r){var e=T(r);return(e=(2146435072&e)>>>20)-C|0}(e=ne[0]),n<-1074?re(0,e):n>1023?e<0?W:H:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,Yr.assign(e,te,1,0),t=te[0],t&=2148532223,i*Kr(t|=n+C<<20,te[1])))}var ae=1.4426950408889634,oe=1/(1<<28);function ue(e){var n;return r(e)||e===H?e:e===W?0:e>709.782712893384?H:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<oe?1+e:function(r,e,n){var t,i,a,o;return ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-.6931471803691238*(n=Y(e<0?ae*e-.5:ae*e+.5)),1.9082149292705877e-10*n,n)}function fe(r){return Z(r)===r}function ce(r){return fe(r/2)}function se(r){return ce(r>0?r-1:r+1)}var le=!0===k?0:1,pe=new v(1),ye=new p(pe.buffer);function ge(r,e){return pe[0]=r,ye[le]=e>>>0,pe[0]}function de(r){return 0|r}var he=1048576,ve=[1,1.5],we=[0,.5849624872207642],be=[0,1.350039202129749e-8],me=1048575,Ae=1048576,_e=1083179008,Ee=1e300,Ue=1e-300,Ie=[0,0],Se=[0,0];function xe(e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,h;if(r(e)||r(n))return NaN;if(Yr.assign(n,Ie,1,0),u=Ie[0],0===Ie[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return R(e);if(-.5===n)return 1/R(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(q(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:M(r)<1==(e===H)?0:H}(e,n)}if(Yr.assign(e,Ie,1,0),o=Ie[0],0===Ie[1]){if(0===o)return function(r,e){return e===W?H:e===H?0:e>0?se(e)?r:0:se(e)?re(H,r):H}(e,n);if(1===e)return 1;if(-1===e&&se(n))return-1;if(q(e))return e===W?xe(-0,-n):n<0?0:H}if(e<0&&!1===fe(n))return(e-e)/(e-e);if(a=M(e),t=o&z|0,i=u&z|0,c=u>>>31|0,f=(f=o>>>31|0)&&se(n)?-1:1,i>1105199104){if(i>1139802112)return function(r,e){return(T(r)&z)<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,n);if(t<1072693247)return 1===c?f*Ee*Ee:f*Ue*Ue;if(t>1072693248)return 0===c?f*Ee*Ee:f*Ue*Ue;y=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ge(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Se,a)}else y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<he&&(m-=53,n=T(e*=9007199254740992)),m+=(n>>20)-C|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=he),o=ge(i=(w=(e=G(e,n))-(c=ve[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=G(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=ge(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=ge(l=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+be[_])-((g=ge(g=(p=.9617967009544373*l)+y+(s=we[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(Se,a,t);if(g=(p=(n-(s=ge(n,0)))*y[0]+n*y[1])+(l=s*y[0]),Yr.assign(g,Ie,1,0),d=de(Ie[0]),h=de(Ie[1]),d>=_e){if(0!=(d-_e|h))return f*Ee*Ee;if(p+8008566259537294e-32>g-l)return f*Ee*Ee}else if((d&z)>=1083231232){if(0!=(d-3230714880|h))return f*Ue*Ue;if(p<=g-l)return f*Ue*Ue}return g=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&z|0)>>20)-C|0,c=0,s>1071644672&&(i=G(0,((c=r+(Ae>>l+1)>>>0)&~(me>>(l=((c&z)>>20)-C|0)))>>>0),c=(c&me|Ae)>>20-l>>>0,r<0&&(c=-c),e-=i),r=de(r=T(f=1-((f=(a=.6931471824645996*(i=ge(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?ie(f,c):G(f,r)}(d,l,p),f*g}var ke=2220446049250313e-31;function Fe(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var je=10.900511;return function(e,n){var t,i,a,o,u,f,c;return r(e)||r(n)||e<0||n<0?NaN:1===n?1/e:1===e?1/n:(c=e+n)<ke?(u=c/e,u/=n):c===e&&n<ke?1/n:c===n&&e<ke?1/e:(e<n&&(f=n,n=e,e=f),i=e+je-.5,a=n+je-.5,o=c+je-.5,u=Fe(e)*(Fe(n)/Fe(c)),M(n*(t=e-.5-n))<100*o&&e>100?u*=ue(t*function(e){var n,t,i,a,o,u,f,c,s,l;if(e<-1||r(e))return NaN;if(-1===e)return W;if(e===H)return e;if(0===e)return e;if(l=1,(i=e<0?-e:e)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(l=0,a=e,t=1)}return 0!==l&&(i<9007199254740992?(o=(l=((t=T(s=1+e))>>20)-C)>0?1-(s-e):e-(s-1),o/=s):(l=((t=T(s=e))>>20)-C,o=0),(t&=1048575)<434334?s=G(s,1072693248|t):(l+=1,s=G(s,1071644672|t),t=1048576-t>>2),a=s-1),n=.5*a*a,0===t?0===a?l*L+(o+=l*P):l*L-((c=n*(1-.6666666666666666*a))-(l*P+o)-a):(c=(f=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?a-(n-u*(n+c)):l*L-(n-(u*(n+c)+(l*P+o))-a))}(-n/o)):u*=xe(i/o,t),u*=xe(o>1e10?i/o*(a/o):i*a/(o*o),n),u*=R(2.718281828459045/a))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).beta=e();
//# sourceMappingURL=index.js.map
