// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,N=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,v,y,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,N(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),c+=t.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}function R(r){return Math.abs(r)}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var M=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return M.call(r);n=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return M.call(r)}return t=M.call(r),e?r[z]=n:delete r[z],t}:function(r){return M.call(r)},B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null;var J,K="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,n;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(B&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Float64Array;var er="function"==typeof Float64Array?Float64Array:null;var nr,tr="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),n=e,r=(rr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null;var ur,cr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),n=e,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,sr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null;var pr,vr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var yr,gr={uint16:pr,uint8:fr};(yr=new gr.uint16(1))[0]=4660;var dr=52===new gr.uint8(yr.buffer)[0],hr=!0===dr?1:0,wr=new ir(1),br=new Q(wr.buffer);function mr(r){return wr[0]=r,br[hr]}function Ar(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Nr=-.16666666666666632,_r=.00833333333332249,Er=-.0001984126982985795,Ur=27557313707070068e-22,Ir=-2.5050760253406863e-8,Sr=1.58969099521155e-10;function kr(r,e){var n,t,i;return n=_r+(i=r*r)*(Er+i*Ur)+i*(i*i)*(Ir+i*Sr),t=i*r,0===e?r+t*(Nr+i*n):r-(i*(.5*e-t*n)-e-t*Nr)}var xr,Fr,jr=2147483647,Tr=2146435072,Or=1048575,Vr=!0===dr?0:1,$r=new ir(1),Gr=new Q($r.buffer);!0===dr?(xr=1,Fr=0):(xr=0,Fr=1);var Hr={HIGH:xr,LOW:Fr},Wr=new ir(1),Cr=new Q(Wr.buffer),Lr=Hr.HIGH,Pr=Hr.LOW;function Rr(r,e){return Cr[Lr]=r,Cr[Pr]=e,Wr[0]}var Zr,Mr,Xr=Math.floor,Yr=1023,zr=1023,qr=-1023,Br=-1074,Dr=2147483648;!0===dr?(Zr=1,Mr=0):(Zr=0,Mr=1);var Jr={HIGH:Zr,LOW:Mr},Kr=new ir(1),Qr=new Q(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function ne(r,e,n,t){return Kr[0]=r,e[t]=Qr[re],e[t+n]=Qr[ee],e}function te(r){return ne(r,[0,0],1,0)}H(te,"assign",ne);var ie=[0,0];var ae=22250738585072014e-324,oe=4503599627370496;function ue(r,e,n,t){return W(r)||P(r)?(e[t]=r,e[t+n]=0,e):0!==r&&R(r)<ae?(e[t]=r*oe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var ce=2220446049250313e-31,fe=2148532223,se=[0,0],le=[0,0];function pe(r,e){var n,t,i,a,o,u;return 0===e||0===r||W(r)||P(r)?r:(ue(r,se,1,0),r=se[0],e+=se[1],e+=function(r){var e=mr(r);return(e=(e&Tr)>>>20)-Yr|0}(r),e<Br?(i=0,a=r,te.assign(i,ie,1,0),o=ie[0],o&=jr,u=mr(a),Rr(o|=u&=Dr,ie[1])):e>zr?r<0?L:C:(e<=qr?(e+=52,t=ce):t=1,te.assign(r,le,1,0),n=le[0],n&=fe,t*Rr(n|=e+Yr<<20,le[1])))}function ve(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ye=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ge=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],de=16777216,he=5.960464477539063e-8,we=ve(20),be=ve(20),me=ve(20),Ae=ve(20);function Ne(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=he*h|0,Ae[v]=h-de*s|0,h=t[d-1]+s,d-=1;if(h=pe(h,i),h-=8*Xr(.125*h),h-=g=0|h,l=0,i>0?(g+=v=Ae[n-1]>>24-i,Ae[n-1]-=v<<24-i,l=Ae[n-1]>>23-i):0===i?l=Ae[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=Ae[v],0===f?0!==d&&(f=1,Ae[v]=16777216-d):Ae[v]=16777215-d;if(i>0)switch(i){case 1:Ae[n-1]&=8388607;break;case 2:Ae[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=pe(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=Ae[v];if(0===d){for(y=1;0===Ae[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=ye[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return Ne(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===Ae[n];)n-=1,i-=24;else(h=pe(h,-i))>=de?(s=he*h|0,Ae[n]=h-de*s|0,i+=24,Ae[n+=1]=s):Ae[n]=0|h;for(s=pe(1,i),v=n;v>=0;v--)t[v]=s*Ae[v],s*=he;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=ge[y]*t[v+y];me[n-v]=s}for(s=0,v=n;v>=0;v--)s+=me[v];for(e[0]=0===l?s:-s,s=me[0]-s,v=1;v<=n;v++)s+=me[v];return e[1]=0===l?s:-s,7&g}function _e(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)we[c]=f<0?0:ye[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*we[o+(c-f)];be[c]=i}return 4,Ne(r,e,4,be,u,4,a,o,we)}var Ee=Math.round,Ue=.6366197723675814,Ie=1.5707963267341256,Se=6077100506506192e-26,ke=6077100506303966e-26,xe=20222662487959506e-37,Fe=20222662487111665e-37,je=84784276603689e-45,Te=2047;function Oe(r,e,n){var t,i,a,o,u;return a=r-(t=Ee(r*Ue))*Ie,o=t*Se,u=e>>20|0,n[0]=a-o,u-(mr(n[0])>>20&Te)>16&&(o=t*xe-((i=a)-(a=i-(o=t*ke))-o),n[0]=a-o,u-(mr(n[0])>>20&Te)>49&&(o=t*je-((i=a)-(a=i-(o=t*Fe))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ve=0,$e=16777216,Ge=1.5707963267341256,He=6077100506506192e-26,We=2*He,Ce=3*He,Le=4*He,Pe=598523,Re=1072243195,Ze=1073928572,Me=1074752122,Xe=1074977148,Ye=1075183036,ze=1075388923,qe=1075594811,Be=1094263291,De=[0,0,0],Je=[0,0];function Ke(r,e){var n,t,i,a,o,u,c;if((i=mr(r)&jr|0)<=Re)return e[0]=r,e[1]=0,0;if(i<=Me)return(i&Or)===Pe?Oe(r,i,e):i<=Ze?r>0?(c=r-Ge,e[0]=c-He,e[1]=c-e[0]-He,1):(c=r+Ge,e[0]=c+He,e[1]=c-e[0]+He,-1):r>0?(c=r-2*Ge,e[0]=c-We,e[1]=c-e[0]-We,2):(c=r+2*Ge,e[0]=c+We,e[1]=c-e[0]+We,-2);if(i<=qe)return i<=Ye?i===Xe?Oe(r,i,e):r>0?(c=r-3*Ge,e[0]=c-Ce,e[1]=c-e[0]-Ce,3):(c=r+3*Ge,e[0]=c+Ce,e[1]=c-e[0]+Ce,-3):i===ze?Oe(r,i,e):r>0?(c=r-4*Ge,e[0]=c-Le,e[1]=c-e[0]-Le,4):(c=r+4*Ge,e[0]=c+Le,e[1]=c-e[0]+Le,-4);if(i<Be)return Oe(r,i,e);if(i>=Tr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return $r[0]=r,Gr[Vr]}(r),c=Rr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)De[o]=0|c,c=(c-De[o])*$e;for(De[2]=c,a=3;De[a-1]===Ve;)a-=1;return u=_e(De,Je,t,a),r<0?(e[0]=-Je[0],e[1]=-Je[1],-u):(e[0]=Je[0],e[1]=Je[1],u)}var Qe=[0,0],rn=2147483647,en=1072243195,nn=1044381696,tn=2146435072;function an(r){var e;if(e=mr(r),(e&=rn)<=en)return e<nn?1:Ar(r,0);if(e>=tn)return NaN;switch(3&Ke(r,Qe)){case 0:return Ar(Qe[0],Qe[1]);case 1:return-kr(Qe[0],Qe[1]);case 2:return-Ar(Qe[0],Qe[1]);default:return kr(Qe[0],Qe[1])}}var on=1072243195,un=1045430272,cn=[0,0];var fn=3.141592653589793,sn=9007199254740992;function ln(r){var e,n,t,i;return W(r)||P(r)?NaN:(e=R(r))>sn?1:.5===(t=e-(n=Xr(e)))?0:(i=t<.25?an(fn*t):t<.75?function(r){var e;if(e=mr(r),(e&=jr)<=on)return e<un?r:kr(r,0);if(e>=Tr)return NaN;switch(3&Ke(r,cn)){case 0:return kr(cn[0],cn[1]);case 1:return Ar(cn[0],cn[1]);case 2:return-kr(cn[0],cn[1]);default:return-Ar(cn[0],cn[1])}}(fn*(t=.5-t)):-an(fn*(t=1-t)),n%2==1?-i:i)}var pn=!0===dr?1:0,vn=new ir(1),yn=new Q(vn.buffer);var gn=.6931471803691238,dn=1.9082149292705877e-10,hn=0x40000000000000,wn=.3333333333333333,bn=1048575,mn=2146435072,An=1048576,Nn=1072693248;function _n(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?L:W(r)||r<0?NaN:(a=0,(n=mr(r))<An&&(a-=54,n=mr(r*=hn)),n>=mn?r+r:(a+=(n>>20)-Yr|0,a+=(c=(n&=bn)+614244&1048576|0)>>20|0,u=(r=function(r,e){return vn[0]=r,yn[pn]=e>>>0,vn[0]}(r,n|c^Nn))-1,(bn&2+n)<3?0===u?0===a?0:a*gn+a*dn:(o=u*u*(.5-wn*u),0===a?u-o:a*gn-(o-a*dn-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*gn-(e-(s*(e+o)+a*dn)-u)):0===a?u-s*(u-o):a*gn-(s*(u-o)-a*dn-u))))}function En(r,e,n){return W(r)||W(e)||W(n)||n<0?NaN:0===n?r===e?C:L:r<e-n||r>e+n?L:_n(1+ln((r-e)/n))-_n(2*n)}function Un(r){return function(){return r}}function In(r){return W(r)?Un(NaN):function(e){if(W(e))return NaN;return e===r?C:L}}function Sn(r,e){return W(r)||W(e)||e<0?Un(NaN):0===e?In(r):function(n){if(W(n))return NaN;if(n<r-e||n>r+e)return L;return _n(1+ln((n-r)/e))-_n(2*e)}}H((function(r,e){return W(r)||W(e)?NaN:r===e?C:L}),"factory",In),H(En,"factory",Sn);export{En as default,Sn as factory};
//# sourceMappingURL=mod.js.map
