//Retry the source Observable a specified number of times in case of error.
//https://rxjs.dev/api/index/function/retry

import { throwError, of } from 'rxjs';
import { retry } from 'rxjs/operators';

// Create an Observable that emits an error
const errorObservable = throwError(() => new Error('Something went wrong'));

// Use the retry() operator to retry the Observable 3 times
const retryObservable = errorObservable.pipe(retry(3));

// Subscribe to the retry Observable
const subscription = retryObservable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log('Retry Error:', error),
});