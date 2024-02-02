// Apply an accumulator function over the values emitted by the Observable and emit each intermediate result.
//https://rxjs.dev/api/index/function/scan

import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

// Create an Observable that emits numbers from 1 to 5
const numberObservable = of(1, 2, 3, 4, 5);

// Use the scan() operator to accumulate the sum of emitted values
const sumObservable = numberObservable.pipe(scan((acc, value) => acc + value, 0));

// Subscribe to the accumulated Observable
const subscription = sumObservable.subscribe({
    next: (sum) => console.log(sum),
});