/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var log1p = require( '@stdlib/math-base-special-log1p' );
var sqrt = require( '@stdlib/math-base-special-sqrt' );
var abs = require( '@stdlib/math-base-special-abs' );
var exp = require( '@stdlib/math-base-special-exp' );
var pow = require( '@stdlib/math-base-special-pow' );
var E = require( '@stdlib/constants-float64-e' );
var EPSILON = require( '@stdlib/constants-float64-eps' );
var lanczosSumExpGScaled = require( './lanczos_sum_expg_scaled.js' ); // Lanczos approximation scaled by exp(G)


// VARIABLES //

var G = 10.90051099999999983936049829935654997826;


// MAIN //

/**
* Evaluates the beta function.
*
* @param {NonNegativeNumber} a - input value
* @param {NonNegativeNumber} b - input value
* @returns {number} evaluated beta function
*
* @example
* var v = beta( 0.0, 0.5 );
* // returns Infinity
*
* @example
* var v = beta( 1.0, 1.0 );
* // returns 1.0
*
* @example
* var v = beta( -1.0, 2.0 );
* // returns NaN
*
* @example
* var v = beta( 5.0, 0.2 );
* // returns ~3.382
*
* @example
* var v = beta( 4.0, 1.0 );
* // returns 0.25
*
* @example
* var v = beta( NaN, 2.0 );
* // returns NaN
*/
function beta( a, b ) {
	var ambh;
	var agh;
	var bgh;
	var cgh;
	var res;
	var tmp;
	var c;

	if ( isnan( a ) || isnan( b ) ) {
		return NaN;
	}
	if ( a < 0.0 || b < 0.0 ) {
		return NaN;
	}
	if ( b === 1.0 ) {
		return 1.0 / a;
	}
	if ( a === 1.0 ) {
		return 1.0 / b;
	}
	c = a + b;
	if ( c < EPSILON ) {
		res = c / a;
		res /= b;
		return res;
	}

	// Special cases:
	if ( c === a && b < EPSILON ) {
		return 1.0 / b;
	}
	if ( c === b && a < EPSILON ) {
		return 1.0 / a;
	}

	if ( a < b ) {
		// Swap `a` and `b`:
		tmp = b;
		b = a;
		a = tmp;
	}

	// Lanczos calculation:
	agh = a + G - 0.5;
	bgh = b + G - 0.5;
	cgh = c + G - 0.5;
	res = lanczosSumExpGScaled( a ) * ( lanczosSumExpGScaled( b )/lanczosSumExpGScaled( c ) ); // eslint-disable-line max-len
	ambh = a - 0.5 - b;
	if ( ( abs( b*ambh ) < ( cgh*100.0 ) ) && a > 100.0 ) {
		// Special case where the base of the power term is close to 1; compute `(1+x)^y` instead:
		res *= exp( ambh * log1p( -b/cgh ) );
	} else {
		res *= pow( agh/cgh, ambh );
	}
	if ( cgh > 1.0e10 ) {
		// This avoids possible overflow, but appears to be marginally less accurate:
		res *= pow( (agh/cgh)*(bgh/cgh), b );
	} else {
		res *= pow( (agh*bgh)/(cgh*cgh), b );
	}
	res *= sqrt( E/bgh );
	return res;
}


// EXPORTS //

module.exports = beta;
