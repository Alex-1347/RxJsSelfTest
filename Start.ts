// Import the necessary RxJS modules
import { Observable } from 'rxjs';

// Create an Observable that emits numbers from 1 to 5
const numberObservable = new Observable((observer) => {
  let count = 1;
  const interval = setInterval(() => {
    if (count <= 5) {
      observer.next(count);
      count++;
    } else {
      observer.complete();
      // clearInterval(interval);
    }
  }, 1000);
  console.log('#')
  // Cleanup logic when the subscription is unsubscribed
  return () => {
    console.log('##')
    clearInterval(interval);
  };
});
console.log('###')
// Subscribe to the Observable to receive values
const subscription = numberObservable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Observable completed.'),
});
console.log('####')