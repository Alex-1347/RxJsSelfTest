// Prepend a specified value to the emissions of the source Observable.
// https://rxjs.dev/api/index/function/startWith

import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

// Create an Observable that emits numbers from 1 to 4
const numberObservable = of(1, 2, 3, 4);

// Use the startWith() operator to prepend 1 to the emissions
const observableWithStart = numberObservable.pipe(startWith(3));

// Subscribe to the Observable with the starting value
const subscription = observableWithStart.subscribe({
  next: (value) => console.log(value),
});