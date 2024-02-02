//Map each value emitted by the source Observable to an inner Observable and merge their emissions into a single stream.
//https://rxjs.dev/api/index/function/mergeMap

import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// Create an Observable that emits 'user' objects
const userObservable = of({ id: 1, name: 'John' }, { id: 2, name: 'Jane' });

// Use the mergeMap() operator to map each user to an inner Observable of roles
const rolesForUsers = userObservable.pipe(
  mergeMap((user) => of(`${user.name}: Admin`, `${user.name}: User`))
);

// Subscribe to the merged Observable
const subscription = rolesForUsers.subscribe({
  next: (role) => console.log(role),
});
