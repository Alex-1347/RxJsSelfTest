//Emit only the first specified number of values from the source Observable.
//https://rxjs.dev/api/index/function/take

import { of } from 'rxjs';
import { take } from 'rxjs/operators';

// Create an Observable that emits numbers from 1 to 10
const numberObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Use the take() operator to emit the first 5 values
const firstFiveObservable = numberObservable.pipe(take(5));

// Subscribe to the firstFive Observable
const subscription = firstFiveObservable.subscribe({
  next: (value) => console.log(value),
});