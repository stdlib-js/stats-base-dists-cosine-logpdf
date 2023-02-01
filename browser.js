// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,f=t.__lookupGetter__,i=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function v(r){return r===y||r===p}function s(r){return Math.abs(r)}var b,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,N=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",_=d&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return w.call(r);t=r[A],u=A,n=null!=(o=r)&&N.call(o,u);try{r[A]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[A]=t:delete r[A],e}:function(r){return w.call(r)},m="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(m&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j=b,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=g,T="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x=E,L="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),t=n,r=(L&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,M={uint16:P,uint8:x};(k=new M.uint16(1))[0]=4660;var Y=52===new M.uint8(k.buffer)[0],C=!0===Y?1:0,q=new F(1),z=new j(q.buffer);function B(r){return q[0]=r,z[C]}function D(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var J=-.16666666666666632;function K(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(J+o*t):r-(o*(.5*n-e*t)-n-e*J)}var Q,R,X=!0===Y?0:1,Z=new F(1),$=new j(Z.buffer);!0===Y?(Q=1,R=0):(Q=0,R=1);var rr={HIGH:Q,LOW:R},nr=new F(1),tr=new j(nr.buffer),er=rr.HIGH,or=rr.LOW;function ur(r,n){return tr[er]=r,tr[or]=n,nr[0]}var fr,ir,ar=Math.floor,cr=1023;!0===Y?(fr=1,ir=0):(fr=0,ir=1);var lr={HIGH:fr,LOW:ir},yr=new F(1),pr=new j(yr.buffer),vr=lr.HIGH,sr=lr.LOW;function br(r,n,t,e){return yr[0]=r,n[e]=pr[vr],n[e+t]=pr[sr],n}function dr(r){return br(r,[0,0],1,0)}c(dr,"assign",br);var wr=[0,0];function Nr(r,n,t,e){return l(r)||v(r)?(n[e]=r,n[e+t]=0,n):0!==r&&s(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var Ar=[0,0],_r=[0,0];function mr(r,n){var t,e,o,u,f,i;return 0===n||0===r||l(r)||v(r)?r:(Nr(r,Ar,1,0),n+=Ar[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-cr|0}(r=Ar[0]),n<-1074?(o=0,u=r,dr.assign(o,wr,1,0),f=wr[0],f&=2147483647,i=B(u),ur(f|=i&=2147483648,wr[1])):n>1023?r<0?p:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,dr.assign(r,_r,1,0),t=_r[0],t&=2148532223,e*ur(t|=n+cr<<20,_r[1])))}function hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=16777216,Ir=5.960464477539063e-8,Or=hr(20),Sr=hr(20),Er=hr(20),Fr=hr(20);function Tr(r,n,t,e,o,u,f,i,a){var c,l,y,p,v,s,b,d,w;for(p=u,w=e[t],d=t,v=0;d>0;v++)l=Ir*w|0,Fr[v]=w-jr*l|0,w=e[d-1]+l,d-=1;if(w=mr(w,o),w-=8*ar(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Fr[t-1]>>24-o,Fr[t-1]-=v<<24-o,y=Fr[t-1]>>23-o):0===o?y=Fr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<t;v++)d=Fr[v],0===c?0!==d&&(c=1,Fr[v]=16777216-d):Fr[v]=16777215-d;if(o>0)switch(o){case 1:Fr[t-1]&=8388607;break;case 2:Fr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=mr(1,o)))}if(0===w){for(d=0,v=t-1;v>=u;v--)d|=Fr[v];if(0===d){for(s=1;0===Fr[u-s];s++);for(v=t+1;v<=t+s;v++){for(a[i+v]=Ur[f+v],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(v-d)];e[v]=l}return Tr(r,n,t+=s,e,o,u,f,i,a)}}if(0===w)for(t-=1,o-=24;0===Fr[t];)t-=1,o-=24;else(w=mr(w,-o))>=jr?(l=Ir*w|0,Fr[t]=w-jr*l|0,o+=24,Fr[t+=1]=l):Fr[t]=0|w;for(l=mr(1,o),v=t;v>=0;v--)e[v]=l*Fr[v],l*=Ir;for(v=t;v>=0;v--){for(l=0,s=0;s<=p&&s<=t-v;s++)l+=gr[s]*e[v+s];Er[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Er[v];for(n[0]=0===y?l:-l,l=Er[0]-l,v=1;v<=t;v++)l+=Er[v];return n[1]=0===y?l:-l,7&b}function Hr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Or[a]=c<0?0:Ur[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Or[f+(a-c)];Sr[a]=o}return Tr(r,n,4,Sr,i,4,u,f,Or)}var Gr=Math.round;function Pr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(B(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(B(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var xr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=3*Lr,kr=4*Lr,Mr=[0,0,0],Yr=[0,0];function Cr(r,n){var t,e,o,u,f,i,a;if((o=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Pr(r,o,n):o<=1073928572?r>0?(a=r-xr,n[0]=a-Lr,n[1]=a-n[0]-Lr,1):(a=r+xr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-1):r>0?(a=r-2*xr,n[0]=a-Vr,n[1]=a-n[0]-Vr,2):(a=r+2*xr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Pr(r,o,n):r>0?(a=r-3*xr,n[0]=a-Wr,n[1]=a-n[0]-Wr,3):(a=r+3*xr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-3):1075388923===o?Pr(r,o,n):r>0?(a=r-4*xr,n[0]=a-kr,n[1]=a-n[0]-kr,4):(a=r+4*xr,n[0]=a+kr,n[1]=a-n[0]+kr,-4);if(o<1094263291)return Pr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Z[0]=r,$[X]}(r),a=ur(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Mr[f]=0|a,a=16777216*(a-Mr[f]);for(Mr[2]=a,u=3;0===Mr[u-1];)u-=1;return i=Hr(Mr,Yr,e,u),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-i):(n[0]=Yr[0],n[1]=Yr[1],i)}var qr=[0,0];function zr(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:D(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,qr)){case 0:return D(qr[0],qr[1]);case 1:return-K(qr[0],qr[1]);case 2:return-D(qr[0],qr[1]);default:return K(qr[0],qr[1])}}var Br=[0,0],Dr=3.141592653589793;function Jr(r){var n,t,e,o;return l(r)||v(r)?NaN:(n=s(r))>9007199254740992?1:.5==(e=n-(t=ar(n)))?0:(o=e<.25?zr(Dr*e):e<.75?function(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:K(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,Br)){case 0:return K(Br[0],Br[1]);case 1:return D(Br[0],Br[1]);case 2:return-K(Br[0],Br[1]);default:return-D(Br[0],Br[1])}}(Dr*(e=.5-e)):-zr(Dr*(e=1-e)),t%2==1?-o:o)}var Kr=!0===Y?1:0,Qr=new F(1),Rr=new j(Qr.buffer),Xr=.6931471803691238,Zr=1.9082149292705877e-10,$r=1048575;function rn(r){var n,t,e,o,u,f,i,a,c,y,v,s;return 0===r?p:l(r)||r<0?NaN:(u=0,(t=B(r))<1048576&&(u-=54,t=B(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-cr|0,u+=(a=614244+(t&=$r)&1048576|0)>>20|0,i=(r=function(r,n){return Qr[0]=r,Rr[Kr]=n>>>0,Qr[0]}(r,t|1072693248^a))-1,($r&2+t)<3?0===i?0===u?0:u*Xr+u*Zr:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Xr-(f-u*Zr-i)):(a=t-398458|0,c=440401-t|0,o=(v=(s=(y=i/(2+i))*y)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+o,(a|=c)>0?(n=.5*i*i,0===u?i-(n-y*(n+f)):u*Xr-(n-(y*(n+f)+u*Zr)-i)):0===u?i-y*(i-f):u*Xr-(y*(i-f)-u*Zr-i))))}function nn(r,n,t){return l(r)||l(n)||l(t)||t<0?NaN:0===t?r===n?y:p:r<n-t||r>n+t?p:rn(1+Jr((r-n)/t))-rn(2*t)}function tn(r){return function(){return r}}function en(r){return l(r)?tn(NaN):function(n){return l(n)?NaN:n===r?y:p}}return c((function(r,n){return l(r)||l(n)?NaN:r===n?y:p}),"factory",en),c(nn,"factory",(function(r,n){return l(r)||l(n)||n<0?tn(NaN):0===n?en(r):function(t){return l(t)?NaN:t<r-n||t>r+n?p:rn(1+Jr((t-r)/n))-rn(2*n)}})),nn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=browser.js.map