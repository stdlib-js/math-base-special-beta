// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var u="function"==typeof Symbol?Symbol.toStringTag:"";var i=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,i,f,o,a;if(null==r)return t.call(r);i=r[u],a=u,n=null!=(o=r)&&e.call(o,a);try{r[u]=void 0}catch(n){return t.call(r)}return f=t.call(r),n?r[u]=i:delete r[u],f}:function(r){return t.call(r)},f="function"==typeof Uint32Array;var o="function"==typeof Uint32Array?Uint32Array:null;var a,c="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,n,t;if("function"!=typeof o)return!1;try{n=new o(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===i(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?c:function(){throw new Error("not implemented")};var y=a,v="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var p,A="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,NaN]),t=n,r=(v&&t instanceof Float64Array||"[object Float64Array]"===i(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var w=p,b="function"==typeof Uint8Array;var U="function"==typeof Uint8Array?Uint8Array:null;var m,h="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,256,257]),t=n,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===i(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var N=m,I="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var d,F="function"==typeof Uint16Array?Uint16Array:void 0;d=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===i(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var S,H={uint16:d,uint8:N};(S=new H.uint16(1))[0]=4660;var O=52===new H.uint8(S.buffer)[0],g=!0===O?1:0,E=new w(1),j=new y(E.buffer);function T(r){return E[0]=r,j[g]}var G=!0===O?1:0,L=new w(1),M=new y(L.buffer);function W(r,n){return L[0]=r,M[G]=n>>>0,L[0]}var P=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY;var Y=.6931471803691238,_=1.9082149292705877e-10;var q=Math.sqrt;function x(r){return Math.abs(r)}var k=Math.floor,z=Math.ceil;function B(r){return r<0?z(r):k(r)}var C,D;function J(r){return r===P||r===V}!0===O?(C=1,D=0):(C=0,D=1);var K,Q,R={HIGH:C,LOW:D},X=new w(1),Z=new y(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n){return X[0]=n,r[0]=Z[$],r[1]=Z[rr],r}function tr(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}!0===O?(K=1,Q=0):(K=0,Q=1);var er={HIGH:K,LOW:Q},ur=new w(1),ir=new y(ur.buffer),fr=er.HIGH,or=er.LOW;function ar(r,n){return ir[fr]=r,ir[or]=n,ur[0]}var cr=[0,0];function yr(r,n){var t,e;return tr(cr,r),t=cr[0],t&=2147483647,e=T(n),ar(t|=e&=2147483648,cr[1])}function vr(n,t){return r(t)||J(t)?(n[0]=t,n[1]=0,n):0!==t&&x(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var lr=[0,0],pr=[0,0];function Ar(n,t){var e,u;return 0===t||0===n||r(n)||J(n)?n:(function(r,n){1===arguments.length?vr([0,0],r):vr(r,n)}(lr,n),t+=lr[1],t+=function(r){var n=T(r);return(n=(2146435072&n)>>>20)-1023|0}(n=lr[0]),t<-1074?yr(0,n):t>1023?n<0?V:P:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,tr(pr,n),e=pr[0],e&=2148532223,u*ar(e|=t+1023<<20,pr[1])))}function wr(n){var t;return r(n)||n===P?n:n===V?0:n>709.782712893384?P:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<3.725290298461914e-9?1+n:function(r,n,t){var e,u,i,f;return Ar(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(n-.6931471803691238*(t=B(n<0?1.4426950408889634*n-.5:1.4426950408889634*n+.5)),1.9082149292705877e-10*t,t)}function br(r){return k(r)===r}function Ur(r){return br(r/2)}function mr(r){return Ur(r>0?r-1:r+1)}var hr=!0===O?0:1,Nr=new w(1),Ir=new y(Nr.buffer);function sr(r,n){return Nr[0]=r,Ir[hr]=n>>>0,Nr[0]}function dr(r){return 0|r}var Fr=[1,1.5],Sr=[0,.5849624872207642],Hr=[0,1.350039202129749e-8];var Or=1e300,gr=1e-300,Er=[0,0],jr=[0,0];function Tr(n,t){var e,u,i,f,o,a,c,y,v,l,p,A,w,b;if(r(n)||r(t))return NaN;if(tr(Er,t),o=Er[0],0===Er[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return q(n);if(-.5===t)return 1/q(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(J(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:x(r)<1==(n===P)?0:P}(n,t)}if(tr(Er,n),f=Er[0],0===Er[1]){if(0===f)return function(r,n){return n===V?P:n===P?0:n>0?mr(n)?r:0:mr(n)?yr(P,r):P}(n,t);if(1===n)return 1;if(-1===n&&mr(t))return-1;if(J(n))return n===V?Tr(-0,-t):t<0?0:P}if(n<0&&!1===br(t))return(n-n)/(n-n);if(i=x(n),e=2147483647&f|0,u=2147483647&o|0,c=o>>>31|0,a=(a=f>>>31|0)&&mr(t)?-1:1,u>1105199104){if(u>1139802112)return function(r,n){return(2147483647&T(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?a*Or*Or:a*gr*gr;if(e>1072693248)return 0===c?a*Or*Or:a*gr*gr;p=function(r,n){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=sr(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r}(jr,i)}else p=function(r,n,t){var e,u,i,f,o,a,c,y,v,l,p,A,w,b,U,m,h,N,I,s,d;return N=0,t<1048576&&(N-=53,t=T(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(I=1048575&t|0),I<=235662?s=0:I<767610?s=1:(s=0,N+=1,t-=1048576),f=sr(u=(m=(n=W(n,t))-(c=Fr[s]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=W(0,e+=s<<18),U=(i=u*u)*i*(0===(d=i)?.5999999999999946:.5999999999999946+d*(.4285714285785502+d*(.33333332981837743+d*(.272728123808534+d*(.23066074577556175+.20697501780033842*d))))),a=sr(a=3+(i=f*f)+(U+=(o=h*(m-f*a-f*(n-(a-c))))*(f+u)),0),w=(p=-7.028461650952758e-9*(v=sr(v=(m=f*a)+(h=o*a+(U-(a-3-i))*u),0))+.9617966939259756*(h-(v-m))+Hr[s])-((A=sr(A=(l=.9617967009544373*v)+p+(y=Sr[s])+(b=N),0))-b-y-l),r[0]=A,r[1]=w,r}(jr,i,e);if(l=(t-(y=sr(t,0)))*p[0]+t*p[1],v=y*p[0],tr(Er,A=l+v),w=dr(Er[0]),b=dr(Er[1]),w>=1083179008){if(0!=(w-1083179008|b))return a*Or*Or;if(l+8008566259537294e-32>A-v)return a*Or*Or}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|b))return a*gr*gr;if(l<=A-v)return a*gr*gr}return A=function(r,n,t){var e,u,i,f,o,a,c,y,v,l,p;return l=((v=2147483647&r|0)>>20)-1023|0,y=0,v>1071644672&&(e=((y=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-l>>>0,r<0&&(y=-y),n-=i=W(0,e)),r=dr(r=T(c=1-((c=(f=.6931471824645996*(i=sr(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-f))+c*a)-c))),(r+=y<<20>>>0)>>20<=0?Ar(c,y):W(c,r)}(w,v,l),a*A}function Gr(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var Lr=10.900511;function Mr(n,t){var e,u,i,f,o,a,c;return r(n)||r(t)||n<0||t<0?NaN:1===t?1/n:1===n?1/t:(c=n+t)<2220446049250313e-31?(o=c/n,o/=t):c===n&&t<2220446049250313e-31?1/t:c===t&&n<2220446049250313e-31?1/n:(n<t&&(a=t,t=n,n=a),u=n+Lr-.5,i=t+Lr-.5,f=c+Lr-.5,o=Gr(n)*(Gr(t)/Gr(c)),x(t*(e=n-.5-t))<100*f&&n>100?o*=wr(e*function(n){var t,e,u,i,f,o,a,c,y,v;if(n<-1||r(n))return NaN;if(-1===n)return V;if(n===P)return n;if(0===n)return n;if(v=1,(u=n<0?-n:n)<.41421356237309503){if(u<1.862645149230957e-9)return u<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(v=0,i=n,e=1)}return 0!==v&&(u<9007199254740992?(f=(v=((e=T(y=1+n))>>20)-1023)>0?1-(y-n):n-(y-1),f/=y):(v=((e=T(y=n))>>20)-1023,f=0),(e&=1048575)<434334?y=W(y,1072693248|e):(v+=1,y=W(y,1071644672|e),e=1048576-e>>2),i=y-1),t=.5*i*i,0===e?0===i?v*Y+(f+=v*_):v*Y-((c=t*(1-.6666666666666666*i))-(v*_+f)-i):(c=(a=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===v?i-(t-o*(t+c)):v*Y-(t-(o*(t+c)+(v*_+f))-i))}(-t/f)):o*=Tr(u/f,e),o*=Tr(f>1e10?u/f*(i/f):u*i/(f*f),t),o*=q(2.718281828459045/i))}export{Mr as default};
//# sourceMappingURL=mod.js.map
