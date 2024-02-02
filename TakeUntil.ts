// Emit values from the source Observable until another Observable emits a value.
//https://rxjs.dev/api/index/function/takeUntil

import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Create an Observable that emits values every 1 second
const sourceObservable = interval(1000);

// Create an Observable  that emits a value after 5 seconds
const timerObservable = timer(5000);

// Use the takeUntil() operator to stop emitting values after 5 seconds
const takeUntilObservable = sourceObservable.pipe(takeUntil(timerObservable));

// Subscribe to the takeUntil Observable
const subscription = takeUntilObservable.subscribe({
    next: (value) => console.log(value),
});
console.log('#')