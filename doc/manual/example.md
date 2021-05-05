# Examples
```js
import { count , atLeast , atMost , between , isEmpty } from '@iterable-iterator/cardinality';

isEmpty( "" ) ; // true

isEmpty( "abc" ) ; // false

count( "abc" ) ; // 3

import {iter} from '@iterable-iterator/iter';
import {range} from '@iterable-iterator/range';
import {repeat} from '@iterable-iterator/repeat';

count( iter( "abc" ) ) ; // 3

//  / \   `count( iterable )` will loop forever on an infinite iterable
// / ! \  without a `length` or `size` property.
// -----

isEmpty( repeat( "A" ) ) ; // false

atMost( 10 , repeat( "A" ) ) ; // false

between( 0 , 10000 , range( 2839 ) ) ; // true

atLeast( 10 , repeat( "A" ) ) ; // true

// other available functions
import {len, le, lt, ge, gt, gele, gelt, gtle, gtlt, eq, ne} from '@iterable-iterator/cardinality';

len( iterable ) ; // count( iterable )

le( n , iterable ) ; // len( iterable ) <= n
lt( n , iterable ) ; // len( iterable )  < n
ge( n , iterable ) ; // len( iterable ) >= n
gt( n , iterable ) ; // len( iterable )  > n

gele( m , n , iterable ) ; // m <= len( iterable ) <= n
gelt( m , n , iterable ) ; // m <= len( iterable )  < n
gtle( m , n , iterable ) ; // m  < len( iterable ) <= n
gtlt( m , n , iterable ) ; // m  < len( iterable )  < n

eq( n , iterable ) ; // len( iterable ) === n
ne( n , iterable ) ; // len( iterable ) !== n
```
