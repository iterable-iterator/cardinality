The code needs a ES2015+ polyfill to work, for example
[babel-polyfill](https://babeljs.io/docs/usage/polyfill).
```js
require( 'babel-polyfill' ) ;
// or
import 'babel-polyfill' ;
```

Then
```js
const cardinality = require( '@aureooms/js-cardinality' ) ;
// or
import cardinality from '@aureooms/js-cardinality' ;
```
