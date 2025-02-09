<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Raised cosine][cosine-distribution] distribution logarithm of [probability density function (PDF)][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [raised cosine][cosine-distribution] random variable is

<!-- <equation class="equation" label="eq:cosine_pdf" align="center" raw="f(x;\mu ,s)= \begin{cases} {\frac {1}{2s}}\left[1+\cos \left({\frac {x\!-\!\mu }{s}}\,\pi \right)\right] & \text{ for } \mu - s \le x \le \mu + s \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a raised cosine distribution."> -->

```math
f(x;\mu ,s)= \begin{cases} {\frac {1}{2s}}\left[1+\cos \left({\frac {x\!-\!\mu }{s}}\,\pi \right)\right] & \text{ for } \mu - s \le x \le \mu + s \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\mu ,s)= \begin{cases} {\frac {1}{2s}}\left[1+\cos \left({\frac {x\!-\!\mu }{s}}\,\pi \right)\right] &amp; \text{ for } \mu - s \le x \le \mu + s \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:cosine_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/cosine/logpdf/docs/img/equation_cosine_pdf.svg" alt="Probability density function (PDF) for a raised cosine distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the location parameter and `s > 0` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-logpdf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-logpdf@deno/mod.js';
```

#### logpdf( x, mu, s )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = logpdf( 2.0, 0.0, 3.0 );
// returns ~-2.485

y = logpdf( -1.0, 2.0, 4.0 );
// returns ~-3.307
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `s = 0`, the function evaluates the logarithm of the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = logpdf( 2.0, 8.0, 0.0 );
// returns -Infinity

y = logpdf( 8.0, 8.0, 0.0 );
// returns Infinity
```

#### logpdf.factory( mu, s )

Returns a function for evaluating the logarithm of the [probability density function][pdf] (PDF) of a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 10.0, 2.0 );

var y = mylogpdf( 10.0 );
// returns ~-0.693

y = mylogpdf( 9.0 );
// returns ~-1.386
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-logpdf@deno/mod.js';

var mu;
var s;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    s = randu() * 10.0;
    y = logpdf( x, mu, s );
    console.log( 'x: %d, µ: %d, s: %d, ln(f(x;µ,s)): %d', x, mu, s, y );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-cosine-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-cosine-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-cosine-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-cosine-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-cosine-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-cosine-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-cosine-logpdf/main/LICENSE

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
