//Combine the latest values from multiple Observables and emit a new value whenever any of the combined Observables emit.
//https://rxjs.dev/api/index/function/combineLatest

import { interval, combineLatest } from 'rxjs';

// Create two Observables that emit values every 1 and 2 seconds, respectively
const observable1 = interval(1000);
const observable2 = interval(2000);

// Use the combineLatest() operator to combine the latest values
const combinedObservable = combineLatest([observable1, observable2]);

// Subscribe to the combined Observable
const subscription = combinedObservable.subscribe({
  next: ([value1, value2]) => console.log(`Observable 1: ${value1}, Observable 2: ${value2}`),
});