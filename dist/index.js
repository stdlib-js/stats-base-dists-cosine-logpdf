"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=f(function(j,c){
var a=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-cospi/dist'),o=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/constants-float64-ninf/dist'),F=require('@stdlib/constants-float64-pinf/dist');function g(e,r,i){var t;return a(e)||a(r)||a(i)||i<0?NaN:i===0?e===r?F:v:e<r-i||e>r+i?v:(t=(e-r)/i,o(1+d(t))-o(2*i))}c.exports=g
});var l=f(function(k,p){
var s=require('@stdlib/utils-constant-function/dist'),I=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,n=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-special-cospi/dist'),N=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-ninf/dist');function P(e,r){if(n(e)||n(r)||r<0)return s(NaN);if(r===0)return I(e);return i;function i(t){var u;return n(t)?NaN:t<e-r||t>e+r?O:(u=(t-e)/r,N(1+z(u))-N(2*r))}}p.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),b=l();R(y,"factory",b);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
