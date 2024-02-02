// Only emit values from the source Observable if they are different from the previous value.
//https://rxjs.dev/api/index/function/distinctUntilChanged

import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// Create an Observable that emits some duplicate values
const duplicateObservable = of(1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5);

// Use the distinctUntilChanged() operator to emit only distinct values
const distinctObservable = duplicateObservable.pipe(distinctUntilChanged());

// Subscribe to the distinct Observable
const subscription = distinctObservable.subscribe({
    next: (value) => console.log(value),
});