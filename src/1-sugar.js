import { len , ge , le , gele , eq } from './0-core' ;

export const count = len ;
export const at_least = ge ;
export const at_most = le ;
export const between = gele ;
export const empty = ( iterable ) => eq( 0 , iterable ) ;
