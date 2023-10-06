// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.1.1-esm/index.mjs";function a(s){var t,e;return 0===s?1/0:((s<0?-s:s)<=1?(t=709811.662581658+s*(679979.8474157227+s*(293136.7857211597+s*(74887.54032914672+s*(12555.290582413863+s*(1443.4299244417066+s*(115.24194596137347+s*(6.309239205732627+s*(.22668404630224365+s*(.004826466289237662+4624429436045379e-20*s))))))))),e=0+s*(362880+s*(1026576+s*(1172700+s*(723680+s*(269325+s*(63273+s*(9450+s*(870+s*(45+1*s)))))))))):(t=4624429436045379e-20+(s=1/s)*(.004826466289237662+s*(.22668404630224365+s*(6.309239205732627+s*(115.24194596137347+s*(1443.4299244417066+s*(12555.290582413863+s*(74887.54032914672+s*(293136.7857211597+s*(679979.8474157227+709811.662581658*s))))))))),e=1+s*(45+s*(870+s*(9450+s*(63273+s*(269325+s*(723680+s*(1172700+s*(1026576+s*(362880+0*s)))))))))),t/e)}var p=10.900511;function l(l,o){var j,h,v,c,b,f,x;return s(l)||s(o)||l<0||o<0?NaN:1===o?1/l:1===l?1/o:(x=l+o)<d?(b=x/l,b/=o):x===l&&o<d?1/o:x===o&&l<d?1/l:(l<o&&(f=o,o=l,l=f),h=l+p-.5,v=o+p-.5,c=x+p-.5,b=a(l)*(a(o)/a(x)),i(o*(j=l-.5-o))<100*c&&l>100?b*=m(j*t(-o/c)):b*=n(h/c,j),b*=n(c>1e10?h/c*(v/c):h*v/(c*c),o),b*=e(r/v))}export{l as default};
//# sourceMappingURL=index.mjs.map
