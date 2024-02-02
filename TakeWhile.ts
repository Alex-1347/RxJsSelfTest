// Emit values from the source Observable until a specified condition becomes false.
//https://rxjs.dev/api/index/function/takeWhile

import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

// Create an Observable that emits values every 1 second
const sourceObservable = interval(1000);

// Use the takeWhile() operator to stop emitting values after reaching 5
const takeWhileObservable = sourceObservable.pipe(takeWhile((value) => value <= 5));

// Subscribe to the takeWhile Observable
const subscription = takeWhileObservable.subscribe({
  next: (value) => console.log(value),
});