//Transform each value emitted by the Observable
//https://rxjs.dev/api/index/function/merge

import { of, merge } from 'rxjs';

// Create two Observables
const observable1 = of('A', 'B', 'C');
const observable2 = of('X', 'Y', 'Z');

// Merge the two Observables
const mergedObservable = merge(observable1, observable2);

// Subscribe to the merged Observable
const subscription = mergedObservable.subscribe({
    next: (value) => console.log(value),
});