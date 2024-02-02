//Periodically emit an array of collected values from the source Observable within specified time intervals.
//https://rxjs.dev/api/index/function/bufferTime

import { interval } from 'rxjs';
import { bufferTime, timestamp } from 'rxjs/operators';

// Create an Observable that emits values every 500ms
const sourceObservable = interval(500);

// Use the bufferTime() operator to collect values over 2 seconds
const bufferedObservable = sourceObservable.pipe(bufferTime(2000)).pipe(timestamp());

// Subscribe to the buffered Observable
const subscription = bufferedObservable.subscribe({
  next: (buffer) => console.log('Buffered Values:', buffer),
});