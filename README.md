# jsonata-test
Language-agnostic test files for the JSONata querying/transformation language.

## Removed tests

* "Invoke JSONata with callback" / "Make HTTP request" / "should return promise to results"
* "Invoke JSONata with callback - errors" / "type error" / "should throw"
* "Invoke JSONata with callback - errors" / "Make HTTP request with dodgy url" / "should throw"
* "Invoke JSONata with callback - return values" / "should handle an undefined value"
* "Invoke JSONata with callback - return values" / "should handle a null value"
* "Invoke JSONata with callback - return values" / "should handle a value"
* "Invoke JSONata with callback - return values" / "should handle a promise"
* "Evaluator - Tail recursion" / "stack overflow - infinite recursive function - non-tail call" / "should throw error"
* "Evaluator - Tail recursion" / "stack overflow - infinite recursive function - tail call" / "should throw error"
* "#evaluate" / "correct types" / "undefined value"
* "Evaluator - function: now" / "$now() returns timestamp" / "should return result object"
* "Evaluator - functions: random" / "random number\")" / "should return result object"

## Failing tests

Around 70 test cases expect `null` but the actual result from `jsonata` is `undefined`. It's not yet certain how we'll deal with this. Additionally, tests involving functions (language-specific) are failing, and a few others here and there.

## Future work

* Patch up all existing tests, or remove test cases for behaviour which can't be tested language-agnostically
* Extensive test renaming and rearrangement for clarity, particularly to dodge all of that percent-encoding
