/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-array-uniform' );
var EPS = require( '@stdlib/constants-float64-eps' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var tryRequire = require( '@stdlib/utils-try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var logpdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logpdf instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
	var opts;
	var mu;
	var s;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, -50.0, 50.0, opts );
	mu = uniform( 100, -10.0, 10.0, opts );
	s = uniform( 100, EPS, 5.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = logpdf( x[ i % x.length ], mu[ i % mu.length ], s[ i % s.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
