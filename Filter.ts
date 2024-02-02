//Filter the values emitted by the Observable based on a predicate.
//https://rxjs.dev/api/index/function/filter

import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

// Create an Observable that emits numbers from 1 to 10
const numberObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Use the filter() operator to get even numbers
const evenObservable = numberObservable.pipe(filter((value) => value % 2 === 0));

// Subscribe to the filtered Observable
const subscription = evenObservable.subscribe({
    next: (value) => console.log(value),
});
