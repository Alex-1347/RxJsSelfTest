// Catch errors that occur in the source Observable and handle them gracefully.
//https://rxjs.dev/api/index/function/catchError

import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Create an Observable that emits an error
const errorObservable = throwError(() => new Error('Something went wrong'));

// Use the catchError() operator to handle the error gracefully
const catchErrorObservable = errorObservable.pipe(catchError((error) => of('Error handled')));

// Subscribe to the catchError Observable
const subscription = catchErrorObservable.subscribe({
    next: (value) => console.log(value),
});