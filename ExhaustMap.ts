//Map each value emitted by the source Observable to an inner Observable, but ignore new inner Observables until the current one completes.
//https://rxjs.dev/api/index/function/exhaustMap

import { interval, fromEvent } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

// Create an Observable that emits values every 1 second
const sourceObservable = interval(1000);

const clickObservable = interval(2000);

// Use the exhaustMap() operator to ignore new clicks until the current interval completes
const clickedObservable = clickObservable.pipe(exhaustMap(() => sourceObservable.pipe(take(5))));

// Subscribe to the clicked Observable
const subscription = clickedObservable.subscribe({
  next: (value) => console.log(value),
});