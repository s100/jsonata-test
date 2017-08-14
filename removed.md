# Removed tests

This test corpus was initially a simple dump of all the test data in the `jsonata` codebase as of JSONata v1.3. However, some of the tests in that codebase had to be removed at the initial import stage, for various reasons:

## Asynchronous JavaScript

These tests tested the [JavaScript `jsonata` module](https://github.com/jsonata-js/jsonata)'s ability to do its processing asynchronously and call a callback with the result. These were JavaScript-specific.

### Asynchronous function bindings

* "Invoke JSONata with callback" / "Make HTTP request" / "should return promise to results"
* "Invoke JSONata with callback - errors" / "type error" / "should throw"
* "Invoke JSONata with callback - errors" / "Make HTTP request with dodgy url" / "should throw"

### Simple bindings

* "Invoke JSONata with callback - return values" / "should handle an undefined value"
* "Invoke JSONata with callback - return values" / "should handle a null value"
* "Invoke JSONata with callback - return values" / "should handle a value"
* "Invoke JSONata with callback - return values" / "should handle a promise"

## Internals-specific

These tail recursion tests relied heavily on `jsonata` internals to track the progress of the JavaScript JSONata engine.

* "Evaluator - Tail recursion" / "factorial non-tail - stack overflow" / "should return result object"
* "Evaluator - Tail recursion" / "stack overflow - infinite recursive function - non-tail call" / "should throw error"
* "Evaluator - Tail recursion" / "stack overflow - infinite recursive function - tail call" / "should throw error"

## Nondeterministic

* "Evaluator - function: now" / "$now() returns different timestamp for subsequent evaluate() calls" / "should return result object"
* "Evaluator - function: now" / "$now() returns timestamp" / "should return result object"
* "Evaluator - function: now" / "Override implementation of $now()" / "should return result object"
* "Evaluator - function: millis" / "$millis() returns different timestamp for subsequent evaluate() calls" / "should return result object"
* "Evaluator - function: millis" / "$millis() returns milliseconds since the epoch" / "should return result object"
* "Evaluator - functions: random" / 'random number\")' / "should return result object"

## Input or result not pure JSON or `undefined`

Ordinarily the input to JSONata should be a "JSON object" (i.e. a possible result from JavaScript's `JSON.parse`) or `undefined`, and likewise the output. However, some tests had slightly more complex inputs and expected outputs:

### Input not pure JSON or `undefined`

* "Evaluator - variables" / "[1,2,3].$v" / "should return result object"

### Result contains `next` method

* "Regex" / "Construction" / '/a(b+)/ ("ababbabbcc")' / "should return result object"
* "Regex" / "Construction" / '/a(b+)/ ("ababbabbcc").next()' / "should return result object"
* "Regex" / "Construction" / '/a(b+)/ ("ababbabbcc").next().next()' / "should return result object"
* "Regex" / "Construction" / '/a(b+)/i ("Ababbabbcc")' / "should return result object"
* "Regex" / "Construction" / '/ab/ ("ab")' / "should return result object"
* "Regex" / "Construction" / '/ab+/ ("ababbabbcc")' / "should return result object"

## External functions

These tested `jsonata`'s ability to bind external JavaScript functions. These were JavaScript-specific.

* "Evaluator - Partial function application" / "Partially apply user-defined Javascript function" / "should return result object"
* "HOF - map" / "map a user-defined Javascript function" / "should return result object"
* "HOF - map" / "map a user-defined Javascript function with signature" / "should return result object"
* "HOF - map" / "map a user-defined Javascript function with undefined signature" / "should return result object"
