# jsonata-test
Language-agnostic test files for the JSONata querying/transformation language.

## Removed tests

### Asynchronous JavaScript

These tests tested the [JavaScript `jsonata` module](https://github.com/jsonata-js/jsonata)'s ability to do its processing asynchronously and call a callback with the result. These were JavaScript-specific.

#### Asynchronous function bindings

* "Invoke JSONata with callback" / "Make HTTP request" / "should return promise to results"
* "Invoke JSONata with callback - errors" / "type error" / "should throw"
* "Invoke JSONata with callback - errors" / "Make HTTP request with dodgy url" / "should throw"

#### Simple bindings

* "Invoke JSONata with callback - return values" / "should handle an undefined value"
* "Invoke JSONata with callback - return values" / "should handle a null value"
* "Invoke JSONata with callback - return values" / "should handle a value"
* "Invoke JSONata with callback - return values" / "should handle a promise"

### Internals-specific

These tail recursion tests relied heavily on `jsonata` internals to track the progress of the JavaScript JSONata engine.

* "Evaluator - Tail recursion" / "factorial non-tail - stack overflow" / "should return result object"
* "Evaluator - Tail recursion" / "stack overflow - infinite recursive function - non-tail call" / "should throw error"
* "Evaluator - Tail recursion" / "stack overflow - infinite recursive function - tail call" / "should throw error"

### Nondeterministic

* "Evaluator - function: now" / "$now() returns different timestamp for subsequent evaluate() calls" / "should return result object"
* "Evaluator - function: now" / "$now() returns timestamp" / "should return result object"
* "Evaluator - function: now" / "Override implementation of $now()" / "should return result object"
* "Evaluator - function: millis" / "$millis() returns different timestamp for subsequent evaluate() calls" / "should return result object"
* "Evaluator - function: millis" / "$millis() returns milliseconds since the epoch" / "should return result object"
* "Evaluator - functions: random" / 'random number\")' / "should return result object"

### Input or result not pure JSON or `undefined`

#### Input not pure JSON or `undefined`

* "Evaluator - variables" / "[1,2,3].$v" / "should return result object"

#### Result contains `next` method

* "Regex" / "Construction" / '/a(b+)/ ("ababbabbcc")' / "should return result object"
* "Regex" / "Construction" / '/a(b+)/ ("ababbabbcc").next()' / "should return result object"
* "Regex" / "Construction" / '/a(b+)/ ("ababbabbcc").next().next()' / "should return result object"
* "Regex" / "Construction" / '/a(b+)/i ("Ababbabbcc")' / "should return result object"
* "Regex" / "Construction" / '/ab/ ("ab")' / "should return result object"
* "Regex" / "Construction" / '/ab+/ ("ababbabbcc")' / "should return result object"

### External functions

These tested `jsonata`'s ability to bind external JavaScript functions.

* "Evaluator - Partial function application" / "Partially apply user-defined Javascript function" / "should return result object"
* "HOF - map" / "map a user-defined Javascript function" / "should return result object"
* "HOF - map" / "map a user-defined Javascript function with signature" / "should return result object"
* "HOF - map" / "map a user-defined Javascript function with undefined signature" / "should return result object"

## Future work

* Extensive test renaming and rearrangement for clarity, particularly to dodge all of that percent-encoding
* Create as a proper NPM module and have `jsonata` replace most of its own test code/data with this; move the JavaScript-specific stuff out again
* Port JSONata to another language, using this as the test bed
