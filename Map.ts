//Transform each value emitted by the Observable.
//https://rxjs.dev/api/index/function/map

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// Create an Observable that emits numbers from 1 to 5
const numberObservable = of(1, 2, 3, 4, 5);

// Use the map() operator to double each emitted value
const doubledObservable = numberObservable.pipe(map((value) => value * 2));

// Subscribe to the transformed Observable
const subscription = doubledObservable.subscribe({
    next: (value) => console.log(value),
});