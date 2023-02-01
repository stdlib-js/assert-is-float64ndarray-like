<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# isFloat64ndarrayLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an [ndarray][@stdlib/ndarray/ctor]-like object containing double-precision floating-point numbers.



<section class="usage">

## Usage

```javascript
import isFloat64ndarrayLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float64ndarray-like@deno/mod.js';
```

#### isFloat64ndarrayLike( value )

Tests if a value is an [ndarray][@stdlib/ndarray/ctor]-like object whose underlying data type is `float64`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';

var arr = ndarray( 'float64', new Float64Array( [ 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

var bool = isFloat64ndarrayLike( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import isFloat64ndarrayLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float64ndarray-like@deno/mod.js';

var buffer = new Float64Array( [ 0, 0, 0, 0 ] );
var arr = ndarray( 'float64', buffer, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

var out = isFloat64ndarrayLike( arr );
// returns true

out = isFloat64ndarrayLike( [ 1, 2, 3, 4 ] );
// returns false

out = isFloat64ndarrayLike( {} );
// returns false

out = isFloat64ndarrayLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-float32ndarray-like`][@stdlib/assert/is-float32ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is an ndarray-like object containing single-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/assert/is-ndarray-like`][@stdlib/assert/is-ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is ndarray-like.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-float64ndarray-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-float64ndarray-like

[test-image]: https://github.com/stdlib-js/assert-is-float64ndarray-like/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-float64ndarray-like/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-float64ndarray-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-float64ndarray-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-float64ndarray-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-float64ndarray-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-float64ndarray-like/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-float64ndarray-like/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-float64ndarray-like/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-float64ndarray-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-float64ndarray-like/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

<!-- <related-links> -->

[@stdlib/assert/is-float32ndarray-like]: https://github.com/stdlib-js/assert-is-float32ndarray-like/tree/deno

[@stdlib/assert/is-ndarray-like]: https://github.com/stdlib-js/assert-is-ndarray-like/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
