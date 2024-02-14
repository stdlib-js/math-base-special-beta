// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=e(),n=Object.prototype.toString,i=Object.prototype.hasOwnProperty;function o(r,e){return null!=r&&i.call(r,e)}var a,u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return n.call(r);t=r[c],e=o(r,c);try{r[c]=void 0}catch(e){return n.call(r)}return i=n.call(r),e?r[c]=t:delete r[c],i}:function(r){return n.call(r)},l="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,t;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(l&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?p:function(){throw new Error("not implemented")};var y,g=a,d=e(),v=Object.prototype.toString,b="function"==typeof Symbol?Symbol:void 0,h="function"==typeof b?b.toStringTag:"",w=d&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return v.call(r);t=r[h],e=o(r,h);try{r[h]=void 0}catch(e){return v.call(r)}return n=v.call(r),e?r[h]=t:delete r[h],n}:function(r){return v.call(r)},m="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,e,t;if("function"!=typeof S)return!1;try{e=new S([1,3.14,-3.14,NaN]),t=e,r=(m&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var A,_=y,T=e(),E=Object.prototype.toString,N="function"==typeof Symbol?Symbol:void 0,U="function"==typeof N?N.toStringTag:"",F=T&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return E.call(r);t=r[U],e=o(r,U);try{r[U]=void 0}catch(e){return E.call(r)}return n=E.call(r),e?r[U]=t:delete r[U],n}:function(r){return E.call(r)},j="function"==typeof Uint8Array,O="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,e,t;if("function"!=typeof O)return!1;try{e=new O(e=[1,3.14,-3.14,256,257]),t=e,r=(j&&t instanceof Uint8Array||"[object Uint8Array]"===F(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var k,V=A,P=e(),$=Object.prototype.toString,G="function"==typeof Symbol?Symbol:void 0,H="function"==typeof G?G.toStringTag:"",W=P&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return $.call(r);t=r[H],e=o(r,H);try{r[H]=void 0}catch(e){return $.call(r)}return n=$.call(r),e?r[H]=t:delete r[H],n}:function(r){return $.call(r)},C="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,R="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,e,t;if("function"!=typeof L)return!1;try{e=new L(e=[1,3.14,-3.14,65536,65537]),t=e,r=(C&&t instanceof Uint16Array||"[object Uint16Array]"===W(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?R:function(){throw new Error("not implemented")};var Y,M={uint16:k,uint8:V};(Y=new M.uint16(1))[0]=4660;var Z=52===new M.uint8(Y.buffer)[0],X=!0===Z?1:0,q=new _(1),z=new g(q.buffer);function B(r){return q[0]=r,z[X]}var D=!0===Z?1:0,J=new _(1),K=new g(J.buffer);function Q(r,e){return J[0]=r,K[D]=e>>>0,J[0]}var rr=Number.POSITIVE_INFINITY,er=Number.NEGATIVE_INFINITY,tr=1023,nr=.6931471803691238,ir=1.9082149292705877e-10,or=Math.sqrt;function ar(r){return Math.abs(r)}var ur=Math.floor,cr=Math.ceil;function fr(r){return r<0?cr(r):ur(r)}var lr=Number.POSITIVE_INFINITY,sr=Number.POSITIVE_INFINITY,pr=Number.POSITIVE_INFINITY;function yr(r){return r===pr||r===er}var gr=2147483647,dr="function"==typeof Object.defineProperty?Object.defineProperty:null,vr=Object.defineProperty;function br(r){return"number"==typeof r}function hr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function wr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+hr(i):hr(i)+r,n&&(r="-"+r)),r}var mr=String.prototype.toLowerCase,Sr=String.prototype.toUpperCase;function Ir(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!br(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=wr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=wr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Sr.call(r.specifier)?Sr.call(t):mr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ar(r){return"string"==typeof r}var _r=Math.abs,Tr=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,Nr=String.prototype.replace,Ur=/e\+(\d)$/,Fr=/e-(\d)$/,jr=/^(\d+)$/,Or=/^(\d+)e/,xr=/\.0$/,kr=/\.0*e/,Vr=/(\..*[^0])0*e/;function Pr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!br(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":_r(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Nr.call(t,Vr,"$1e"),t=Nr.call(t,kr,"e"),t=Nr.call(t,xr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Nr.call(t,Ur,"e+0$1"),t=Nr.call(t,Fr,"e-0$1"),r.alternate&&(t=Nr.call(t,jr,"$1."),t=Nr.call(t,Or,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Er.call(r.specifier)?Er.call(t):Tr.call(t)}function $r(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Gr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+$r(n):$r(n)+r}var Hr=String.fromCharCode,Wr=isNaN,Cr=Array.isArray;function Lr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Rr(r){var e,t,n,i,o,a,u,c,f;if(!Cr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Ar(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Lr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Wr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Wr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Ir(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Wr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Wr(o)?String(n.arg):Hr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Pr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=wr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Gr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Yr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Mr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Zr(r){var e,t,n,i;for(t=[],i=0,n=Yr.exec(r);n;)(e=r.slice(i,Yr.lastIndex-n[0].length)).length&&t.push(e),t.push(Mr(n)),i=Yr.lastIndex,n=Yr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Xr(r){return"string"==typeof r}function qr(r){var e,t;if(!Xr(r))throw new TypeError(qr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Zr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Rr.apply(null,e)}var zr,Br=Object.prototype,Dr=Br.toString,Jr=Br.__defineGetter__,Kr=Br.__defineSetter__,Qr=Br.__lookupGetter__,re=Br.__lookupSetter__;zr=function(){try{return dr({},"x",{}),!0}catch(r){return!1}}()?vr:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Dr.call(r))throw new TypeError(qr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Dr.call(t))throw new TypeError(qr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Qr.call(r,e)||re.call(r,e)?(n=r.__proto__,r.__proto__=Br,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Jr&&Jr.call(r,e,t.get),a&&Kr&&Kr.call(r,e,t.set),r};var ee,te,ne=zr;!0===Z?(ee=1,te=0):(ee=0,te=1);var ie,oe,ae={HIGH:ee,LOW:te},ue=new _(1),ce=new g(ue.buffer),fe=ae.HIGH,le=ae.LOW;function se(r,e,t,n){return ue[0]=r,e[n]=ce[fe],e[n+t]=ce[le],e}function pe(r){return se(r,[0,0],1,0)}ne(pe,"assign",{configurable:!1,enumerable:!1,writable:!1,value:se}),!0===Z?(ie=1,oe=0):(ie=0,oe=1);var ye={HIGH:ie,LOW:oe},ge=new _(1),de=new g(ge.buffer),ve=ye.HIGH,be=ye.LOW;function he(r,e){return de[ve]=r,de[be]=e,ge[0]}var we=[0,0];function me(r,e){var t,n;return pe.assign(r,we,1,0),t=we[0],t&=gr,n=B(e),he(t|=n&=2147483648,we[1])}function Se(e,t,n,i){return r(e)||yr(e)?(t[i]=e,t[i+n]=0,t):0!==e&&ar(e)<22250738585072014e-324?(t[i]=4503599627370496*e,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}!function(r,e,t){ne(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}((function(r){return Se(r,[0,0],1,0)}),"assign",Se);var Ie=[0,0],Ae=[0,0];function _e(e,t){var n,i;return 0===t||0===e||r(e)||yr(e)?e:(Se(e,Ie,1,0),t+=Ie[1],t+=function(r){var e=B(r);return(e=(2146435072&e)>>>20)-tr|0}(e=Ie[0]),t<-1074?me(0,e):t>1023?e<0?er:sr:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,pe.assign(e,Ae,1,0),n=Ae[0],n&=2148532223,i*he(n|=t+tr<<20,Ae[1])))}var Te=1.4426950408889634,Ee=1/(1<<28);function Ne(e){var t;return r(e)||e===lr?e:e===er?0:e>709.782712893384?lr:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<Ee?1+e:function(r,e,t){var n,i,o,a;return _e(1-(e-(n=r-e)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(e-.6931471803691238*(t=fr(e<0?Te*e-.5:Te*e+.5)),1.9082149292705877e-10*t,t)}function Ue(r){return ur(r)===r}function Fe(r){return Ue(r/2)}function je(r){return Fe(r>0?r-1:r+1)}var Oe=!0===Z?0:1,xe=new _(1),ke=new g(xe.buffer);function Ve(r,e){return xe[0]=r,ke[Oe]=e>>>0,xe[0]}function Pe(r){return 0|r}var $e=Number.POSITIVE_INFINITY,Ge=1048576,He=[1,1.5],We=[0,.5849624872207642],Ce=[0,1.350039202129749e-8],Le=1048575,Re=1048576,Ye=1083179008,Me=1e300,Ze=1e-300,Xe=[0,0],qe=[0,0];function ze(e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,v;if(r(e)||r(t))return NaN;if(pe.assign(t,Xe,1,0),u=Xe[0],0===Xe[1]){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return or(e);if(-.5===t)return 1/or(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return(e*=e)*e;if(yr(t))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:ar(r)<1==(e===$e)?0:$e}(e,t)}if(pe.assign(e,Xe,1,0),a=Xe[0],0===Xe[1]){if(0===a)return function(r,e){return e===er?$e:e===$e?0:e>0?je(e)?r:0:je(e)?me($e,r):$e}(e,t);if(1===e)return 1;if(-1===e&&je(t))return-1;if(yr(e))return e===er?ze(-0,-t):t<0?0:$e}if(e<0&&!1===Ue(t))return(e-e)/(e-e);if(o=ar(e),n=a&gr|0,i=u&gr|0,f=u>>>31|0,c=(c=a>>>31|0)&&je(t)?-1:1,i>1105199104){if(i>1139802112)return function(r,e){return(B(r)&gr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,t);if(n<1072693247)return 1===f?c*Me*Me:c*Ze*Ze;if(n>1072693248)return 0===f?c*Me*Me:c*Ze*Ze;y=function(r,e){var t,n,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Ve(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=t,r}(qe,o)}else y=function(r,e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,v,b,h,w,m,S,I,A;return m=0,t<Ge&&(m-=53,t=B(e*=9007199254740992)),m+=(t>>20)-tr|0,t=1072693248|(S=1048575&t|0),S<=235662?I=0:S<767610?I=1:(I=0,m+=1,t-=Ge),a=Ve(i=(h=(e=Q(e,t))-(f=He[I]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=Q(0,n+=I<<18),b=(o=i*i)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),c=Ve(c=3+(o=a*a)+(b+=(u=w*(h-a*c-a*(e-(c-f))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=Ve(s=(h=a*c)+(w=u*c+(b-(c-3-o))*i),0))+.9617966939259756*(w-(s-h))+Ce[I])-((g=Ve(g=(p=.9617967009544373*s)+y+(l=We[I])+(v=m),0))-v-l-p),r[0]=g,r[1]=d,r}(qe,o,n);if(g=(p=(t-(l=Ve(t,0)))*y[0]+t*y[1])+(s=l*y[0]),pe.assign(g,Xe,1,0),d=Pe(Xe[0]),v=Pe(Xe[1]),d>=Ye){if(0!=(d-Ye|v))return c*Me*Me;if(p+8008566259537294e-32>g-s)return c*Me*Me}else if((d&gr)>=1083231232){if(0!=(d-3230714880|v))return c*Ze*Ze;if(p<=g-s)return c*Ze*Ze}return g=function(r,e,t){var n,i,o,a,u,c,f,l,s,p;return s=((l=r&gr|0)>>20)-tr|0,f=0,l>1071644672&&(i=Q(0,((f=r+(Re>>s+1)>>>0)&~(Le>>(s=((f&gr)>>20)-tr|0)))>>>0),f=(f&Le|Re)>>20-s>>>0,r<0&&(f=-f),e-=i),r=Pe(r=B(c=1-((c=(o=.6931471824645996*(i=Ve(i=t+e,0)))+(a=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?_e(c,f):Q(c,r)}(d,s,p),c*g}var Be=2220446049250313e-31;function De(r){var e,t;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/t)}var Je=10.900511;return function(e,t){var n,i,o,a,u,c,f;return r(e)||r(t)||e<0||t<0?NaN:1===t?1/e:1===e?1/t:(f=e+t)<Be?(u=f/e,u/=t):f===e&&t<Be?1/t:f===t&&e<Be?1/e:(e<t&&(c=t,t=e,e=c),i=e+Je-.5,o=t+Je-.5,a=f+Je-.5,u=De(e)*(De(t)/De(f)),ar(t*(n=e-.5-t))<100*a&&e>100?u*=Ne(n*function(e){var t,n,i,o,a,u,c,f,l,s;if(e<-1||r(e))return NaN;if(-1===e)return er;if(e===rr)return e;if(0===e)return e;if(s=1,(i=e<0?-e:e)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(s=0,o=e,n=1)}return 0!==s&&(i<9007199254740992?(a=(s=((n=B(l=1+e))>>20)-tr)>0?1-(l-e):e-(l-1),a/=l):(s=((n=B(l=e))>>20)-tr,a=0),(n&=1048575)<434334?l=Q(l,1072693248|n):(s+=1,l=Q(l,1071644672|n),n=1048576-n>>2),o=l-1),t=.5*o*o,0===n?0===o?s*nr+(a+=s*ir):s*nr-((f=t*(1-.6666666666666666*o))-(s*ir+a)-o):(f=(c=(u=o/(2+o))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===s?o-(t-u*(t+f)):s*nr-(t-(u*(t+f)+(s*ir+a))-o))}(-t/a)):u*=ze(i/a,n),u*=ze(a>1e10?i/a*(o/a):i*o/(a*a),t),u*=or(2.718281828459045/o))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).beta=e();
//# sourceMappingURL=index.js.map
