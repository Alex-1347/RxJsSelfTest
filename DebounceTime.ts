// Delay the emission of values from the source Observable until a specified time has passed without any new values being emitted.
//https://rxjs.dev/api/index/function/debounceTime

import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

//browser way with Require,JS
//var rxjs_1 = require(["rxjs"], (rxjs)=>  rxjs.of(1, 2, 3, 4, 5).subscribe(console.log));
console.log('#')

// Create an Observable from a button click event
const button = document.getElementById('myButton')  as HTMLButtonElement;
const clickObservable = fromEvent(button, 'click');

// Use the debounceTime() operator to emit the latest click after 500ms
const debouncedObservable = clickObservable.pipe(debounceTime(500));

// Subscribe to the debounced Observable
const subscription = debouncedObservable.subscribe(() => console.log('Button clicked!'));

//require() is not a feature that is built into the browser. That is a specific feature of node.js, not of a browser.
//If that is the case, you can install a module loader like CommonJS, SystemJS or RequireJS and then specify that.