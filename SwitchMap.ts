//Transform each value emitted by the source Observable into a new Observable and emit its values
//https://rxjs.dev/api/index/function/switchMap

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// Create an Observable that emits 'user' objects
const userObservable = of({ id: 1, name: 'John' }, { id: 2, name: 'Jane' });

// Use the switchMap() operator to get user names
const nameObservable = userObservable.pipe(switchMap((user) => of(user.name)));

// Subscribe to the transformed Observable
const subscription = nameObservable.subscribe({
    next: (name) => console.log(name),
});