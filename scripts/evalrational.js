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
*/

/*
* This script compiles modules for evaluating polynomial functions. If any polynomial coefficients change, this script should be rerun to update the compiled files.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs-read-file' ).sync;
var writeFileSync = require( '@stdlib/fs-write-file' ).sync;
var currentYear = require( '@stdlib/time-current-year' );
var licenseHeader = require( '@stdlib/_tools-licenses-header' );
var compile = require( '@stdlib/math-base-tools-evalrational-compile' );
var compileC = require( '@stdlib/math-base-tools-evalrational-compile-c' );
var substringBefore = require( '@stdlib/string-substring-before' );
var substringAfter = require( '@stdlib/string-substring-after' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

// Polynomial coefficients ordered in ascending degree...
var P = [
	709811.662581657956893540610814842699825,
	679979.847415722640161734319823103390728,
	293136.785721159725251629480984140341656,
	74887.5403291467179935942448101441897121,
	12555.29058241386295096255111537516768137,
	1443.42992444170669746078056942194198252,
	115.2419459613734722083208906727972935065,
	6.30923920573262762719523981992008976989,
	0.2266840463022436475495508977579735223818,
	0.004826466289237661857584712046231435101741,
	0.4624429436045378766270459638520555557321e-4
];
var Q = [
	0.0,
	362880.0,
	1026576.0,
	1172700.0,
	723680.0,
	269325.0,
	63273.0,
	9450.0,
	870.0,
	45.0,
	1.0
];

// Header to add to output files:
var header = licenseHeader( 'Apache-2.0', 'js', {
	'year': currentYear(),
	'copyright': 'The Stdlib Authors'
});
header += '\n/* This is a generated file. Do not edit directly. */\n';


// FUNCTIONS //

/**
* Inserts a compiled function into file content.
*
* @private
* @param {string} text - source content
* @param {string} id - function identifier
* @param {string} str - function string
* @returns {string} updated content
*/
function insert( text, id, str ) {
	var before;
	var after;
	var begin;
	var end;

	begin = '// BEGIN: '+id;
	end = '// END: '+id;

	before = substringBefore( text, begin );
	after = substringAfter( text, end );

	return format( '%s// BEGIN: %s\n\n%s\n%s%s', before, id, str, end, after );
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var copts;
	var opts;
	var file;
	var str;

	opts = {
		'encoding': 'utf8'
	};

	fpath = resolve( __dirname, '..', 'lib', 'lanczos_sum_expg_scaled.js' );
	str = header + compile( P, Q );
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'double',
		'name': 'lanczos_sum_expg_scaled_pq'
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'lanczos_sum_expg_scaled_pq';
	str = compileC( P, Q, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
