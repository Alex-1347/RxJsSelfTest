//Skip the first specified number of values emitted by the source Observable.
//https://rxjs.dev/api/index/function/skip

import { of } from 'rxjs';
import { skip } from 'rxjs/operators';

// Create an Observable that emits numbers from 1 to 10
const numberObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Use the skip() operator to skip the first 5 values
const skipFiveObservable = numberObservable.pipe(skip(5));

// Subscribe to the skipFive Observable
const subscription = skipFiveObservable.subscribe({
  next: (value) => console.log(value),
});