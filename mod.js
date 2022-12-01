// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol.toStringTag:"";var o=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,o,u,a,f;if(null==r)return t.call(r);o=r[i],f=i,n=null!=(a=r)&&e.call(a,f);try{r[i]=void 0}catch(n){return t.call(r)}return u=t.call(r),n?r[i]=o:delete r[i],u}:function(r){return t.call(r)},u="function"==typeof Uint32Array;var a="function"==typeof Uint32Array?Uint32Array:null;var f,c="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,n,t;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l=f,y="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var p,b="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(y&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var s=p,w="function"==typeof Uint8Array;var A="function"==typeof Uint8Array?Uint8Array:null;var _,m="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,256,257]),t=n,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var d=_,U="function"==typeof Uint16Array;var g="function"==typeof Uint16Array?Uint16Array:null;var h,j="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,65536,65537]),t=n,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var N,I={uint16:h,uint8:d};(N=new I.uint16(1))[0]=4660;var O=52===new I.uint8(N.buffer)[0],S=!0===O?1:0,E=new s(1),F=new l(E.buffer);function H(r){return E[0]=r,F[S]}var T=!0===O?1:0,G=new s(1),P=new l(G.buffer);function L(r,n){return G[0]=r,P[T]=n>>>0,G[0]}var M=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY;var W=.6931471803691238,k=1.9082149292705877e-10;var x=Math.sqrt;function Y(r){return Math.abs(r)}var q=Math.floor,C=Math.ceil;function z(r){return r<0?C(r):q(r)}function B(r){return r===M||r===V}var D="function"==typeof Object.defineProperty?Object.defineProperty:null;var J=Object.defineProperty,K=Object.prototype,Q=K.toString,R=K.__defineGetter__,X=K.__defineSetter__,Z=K.__lookupGetter__,$=K.__lookupSetter__;var rr,nr,tr=function(){try{return D({},"x",{}),!0}catch(r){return!1}}()?J:function(r,n,t){var e,i,o,u;if("object"!=typeof r||null===r||"[object Array]"===Q.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===Q.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(Z.call(r,n)||$.call(r,n)?(e=r.__proto__,r.__proto__=K,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,n,t.get),u&&X&&X.call(r,n,t.set),r};function er(r,n,t){tr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===O?(rr=1,nr=0):(rr=0,nr=1);var ir,or,ur={HIGH:rr,LOW:nr},ar=new s(1),fr=new l(ar.buffer),cr=ur.HIGH,lr=ur.LOW;function yr(r,n,t,e){return ar[0]=r,n[e]=fr[cr],n[e+t]=fr[lr],n}function vr(r){return yr(r,[0,0],1,0)}er(vr,"assign",yr),!0===O?(ir=1,or=0):(ir=0,or=1);var pr={HIGH:ir,LOW:or},br=new s(1),sr=new l(br.buffer),wr=pr.HIGH,Ar=pr.LOW;function _r(r,n){return sr[wr]=r,sr[Ar]=n,br[0]}var mr=[0,0];function dr(r,n){var t,e;return vr.assign(r,mr,1,0),t=mr[0],t&=2147483647,e=H(n),_r(t|=e&=2147483648,mr[1])}function Ur(n,t,e,i){return r(n)||B(n)?(t[i]=n,t[i+e]=0,t):0!==n&&Y(n)<22250738585072014e-324?(t[i]=4503599627370496*n,t[i+e]=-52,t):(t[i]=n,t[i+e]=0,t)}er((function(r){return Ur(r,[0,0],1,0)}),"assign",Ur);var gr=[0,0],hr=[0,0];function jr(n,t){var e,i;return 0===t||0===n||r(n)||B(n)?n:(Ur(n,gr,1,0),t+=gr[1],t+=function(r){var n=H(r);return(n=(2146435072&n)>>>20)-1023|0}(n=gr[0]),t<-1074?dr(0,n):t>1023?n<0?V:M:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,vr.assign(n,hr,1,0),e=hr[0],e&=2148532223,i*_r(e|=t+1023<<20,hr[1])))}function Nr(n){var t;return r(n)||n===M?n:n===V?0:n>709.782712893384?M:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<3.725290298461914e-9?1+n:function(r,n,t){var e,i,o,u;return jr(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(n-.6931471803691238*(t=z(n<0?1.4426950408889634*n-.5:1.4426950408889634*n+.5)),1.9082149292705877e-10*t,t)}function Ir(r){return q(r)===r}function Or(r){return Ir(r/2)}function Sr(r){return Or(r>0?r-1:r+1)}var Er=!0===O?0:1,Fr=new s(1),Hr=new l(Fr.buffer);function Tr(r,n){return Fr[0]=r,Hr[Er]=n>>>0,Fr[0]}function Gr(r){return 0|r}var Pr=[1,1.5],Lr=[0,.5849624872207642],Mr=[0,1.350039202129749e-8];var Vr=1e300,Wr=1e-300,kr=[0,0],xr=[0,0];function Yr(n,t){var e,i,o,u,a,f,c,l,y,v,p,b,s,w;if(r(n)||r(t))return NaN;if(vr.assign(t,kr,1,0),a=kr[0],0===kr[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return x(n);if(-.5===t)return 1/x(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(B(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Y(r)<1==(n===M)?0:M}(n,t)}if(vr.assign(n,kr,1,0),u=kr[0],0===kr[1]){if(0===u)return function(r,n){return n===V?M:n===M?0:n>0?Sr(n)?r:0:Sr(n)?dr(M,r):M}(n,t);if(1===n)return 1;if(-1===n&&Sr(t))return-1;if(B(n))return n===V?Yr(-0,-t):t<0?0:M}if(n<0&&!1===Ir(t))return(n-n)/(n-n);if(o=Y(n),e=2147483647&u|0,i=2147483647&a|0,c=a>>>31|0,f=(f=u>>>31|0)&&Sr(t)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(2147483647&H(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?f*Vr*Vr:f*Wr*Wr;if(e>1072693248)return 0===c?f*Vr*Vr:f*Wr*Wr;p=function(r,n){var t,e,i,o,u,a;return t=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Tr(e=(o=1.4426950216293335*i)+u,0))-o),r[0]=e,r[1]=t,r}(xr,o)}else p=function(r,n,t){var e,i,o,u,a,f,c,l,y,v,p,b,s,w,A,_,m,d,U,g,h;return d=0,t<1048576&&(d-=53,t=H(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?g=0:U<767610?g=1:(g=0,d+=1,t-=1048576),u=Tr(i=(_=(n=L(n,t))-(c=Pr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=L(0,e+=g<<18),A=(o=i*i)*o*(0===(h=o)?.5999999999999946:.5999999999999946+h*(.4285714285785502+h*(.33333332981837743+h*(.272728123808534+h*(.23066074577556175+.20697501780033842*h))))),f=Tr(f=3+(o=u*u)+(A+=(a=m*(_-u*f-u*(n-(f-c))))*(u+i)),0),s=(p=-7.028461650952758e-9*(y=Tr(y=(_=u*f)+(m=a*f+(A-(f-3-o))*i),0))+.9617966939259756*(m-(y-_))+Mr[g])-((b=Tr(b=(v=.9617967009544373*y)+p+(l=Lr[g])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(xr,o,e);if(b=(v=(t-(l=Tr(t,0)))*p[0]+t*p[1])+(y=l*p[0]),vr.assign(b,kr,1,0),s=Gr(kr[0]),w=Gr(kr[1]),s>=1083179008){if(0!=(s-1083179008|w))return f*Vr*Vr;if(v+8008566259537294e-32>b-y)return f*Vr*Vr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|w))return f*Wr*Wr;if(v<=b-y)return f*Wr*Wr}return b=function(r,n,t){var e,i,o,u,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=o=L(0,e)),r=Gr(r=H(c=1-((c=(u=.6931471824645996*(o=Tr(o=t+n,0)))+(a=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(i=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=a-(c-u))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?jr(c,l):L(c,r)}(s,y,v),f*b}function qr(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var Cr=10.900511;function zr(n,t){var e,i,o,u,a,f,c;return r(n)||r(t)||n<0||t<0?NaN:1===t?1/n:1===n?1/t:(c=n+t)<2220446049250313e-31?(a=c/n,a/=t):c===n&&t<2220446049250313e-31?1/t:c===t&&n<2220446049250313e-31?1/n:(n<t&&(f=t,t=n,n=f),i=n+Cr-.5,o=t+Cr-.5,u=c+Cr-.5,a=qr(n)*(qr(t)/qr(c)),Y(t*(e=n-.5-t))<100*u&&n>100?a*=Nr(e*function(n){var t,e,i,o,u,a,f,c,l,y;if(n<-1||r(n))return NaN;if(-1===n)return V;if(n===M)return n;if(0===n)return n;if(y=1,(i=n<0?-n:n)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,o=n,e=1)}return 0!==y&&(i<9007199254740992?(u=(y=((e=H(l=1+n))>>20)-1023)>0?1-(l-n):n-(l-1),u/=l):(y=((e=H(l=n))>>20)-1023,u=0),(e&=1048575)<434334?l=L(l,1072693248|e):(y+=1,l=L(l,1071644672|e),e=1048576-e>>2),o=l-1),t=.5*o*o,0===e?0===o?y*W+(u+=y*k):y*W-((c=t*(1-.6666666666666666*o))-(y*k+u)-o):(c=(f=(a=o/(2+o))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?o-(t-a*(t+c)):y*W-(t-(a*(t+c)+(y*k+u))-o))}(-t/u)):a*=Yr(i/u,e),a*=Yr(u>1e10?i/u*(o/u):i*o/(u*u),t),a*=x(2.718281828459045/o))}export{zr as default};
//# sourceMappingURL=mod.js.map
