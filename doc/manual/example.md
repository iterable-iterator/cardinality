# Examples
```js
let { count , atLeast , atMost , between , isEmpty } = cardinality ;

isEmpty( "" ) ; // true

isEmpty( "abc" ) ; // false

count( "abc" ) ; // 3

let { iter , range , repeat } = require( "@aureooms/js-itertools" ) ;

count( iter( "abc" ) ) ; // 3

//  / \   `count( iterable )` will loop forever on an infinite iterable
// / ! \  without a `length` or `size` property.
// -----

isEmpty( repeat( "A" ) ) ; // false

atMost( 10 , repeat( "A" ) ) ; // false

between( 0 , 10000 , range( 2839 ) ) ; // true

atLeast( 10 , repeat( "A" ) ) ; // true

// other available functions
cardinality.len( iterable ) ; // count( iterable )

cardinality.le( n , iterable ) ; // len( iterable ) <= n
cardinality.lt( n , iterable ) ; // len( iterable )  < n
cardinality.ge( n , iterable ) ; // len( iterable ) >= n
cardinality.gt( n , iterable ) ; // len( iterable )  > n

cardinality.gele( m , n , iterable ) ; // m <= len( iterable ) <= n
cardinality.gelt( m , n , iterable ) ; // m <= len( iterable )  < n
cardinality.gtle( m , n , iterable ) ; // m  < len( iterable ) <= n
cardinality.gtlt( m , n , iterable ) ; // m  < len( iterable )  < n

cardinality.eq( n , iterable ) ; // len( iterable ) === n
cardinality.ne( n , iterable ) ; // len( iterable ) !== n
```
