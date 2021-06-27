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

# beta

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Beta function][beta-function].

<section class="intro">

The [beta function][beta-function], also called the Euler integral, is defined as

<!-- <equation class="equation" label="eq:beta_function" align="center" raw="\operatorname{Beta}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t" alt="Equation for the beta function."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Beta}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t" data-equation="eq:beta_function">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/beta/docs/img/equation_beta_function.svg" alt="Equation for the beta function.">
    <br>
</div>

<!-- </equation> -->

The [beta function][beta-function] is related to the [Gamma function][gamma-function] via the following equation

<!-- <equation class="equation" label="eq:beta_function2" align="center" raw="\operatorname{Beta}(x,y)=\dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)} \!" alt="Beta function expressed in terms of the Gamma function."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Beta}(x,y)=\dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)} \!" data-equation="eq:beta_function2">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/beta/docs/img/equation_beta_function2.svg" alt="Beta function expressed in terms of the Gamma function.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-beta
```

</section>

<section class="usage">

## Usage

```javascript
var beta = require( '@stdlib/math-base-special-beta' );
```

#### beta( x, y )

Evaluates the [beta function][beta-function].

```javascript
var val = beta( 0.0, 0.5 );
// returns Infinity

val = beta( 1.0, 1.0 );
// returns 1.0

val = beta( -1.0, 2.0 );
// returns NaN

val = beta( 5.0, 0.2 );
// returns ~3.382

val = beta( 4.0, 1.0 );
// returns 0.25
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var beta = require( '@stdlib/math-base-special-beta' );
var x;
var y;

for ( x = 0; x < 10; x++ ) {
    for ( y = 10; y > 0; y-- ) {
        console.log( 'x: %d, \t y: %d, \t f(x,y): %d', x, y, beta( x, y ) );
    }
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-beta.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-beta

[test-image]: https://github.com/stdlib-js/math-base-special-beta/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-beta/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-beta/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-beta?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-beta.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-beta/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-beta/main/LICENSE

[beta-function]: http://en.wikipedia.org/wiki/Beta_function

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

</section>

<!-- /.links -->
