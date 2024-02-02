//Share the emitted values from the source Observable with multiple subscribers, replaying the last emitted value to new subscribers.
//https://rxjs.dev/api/index/function/shareReplay

import { interval } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

// Create an Observable that emits values every 1 second
const sourceObservable = interval(1000);

// Use the shareReplay() operator to share the emitted values
const sharedObservable = sourceObservable.pipe(shareReplay());

// Subscribe to the shared Observable
const subscription1 = sharedObservable.subscribe((value) => console.log(`Subscriber 1: ${value}`));
const subscription2 = sharedObservable.subscribe((value) => console.log(`Subscriber 2: ${value}`));