"use strict";
// Delay the emission of values from the source Observable until a specified time has passed without any new values being emitted.
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log('#');
// Create an Observable from a button click event
var button = document.getElementById('myButton');
var clickObservable = (0, rxjs_1.fromEvent)(button, 'click');
// Use the debounceTime() operator to emit the latest click after 500ms
var debouncedObservable = clickObservable.pipe((0, operators_1.debounceTime)(500));
// Subscribe to the debounced Observable
var subscription = debouncedObservable.subscribe(function () { return console.log('Button clicked!'); });
//require() is not a feature that is built into the browser. That is a specific feature of node.js, not of a browser.
//If that is the case, you can install a module loader like CommonJS, SystemJS or RequireJS and then specify that.
