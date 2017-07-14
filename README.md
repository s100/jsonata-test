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

* "Evaluator - Tail recursion" / "stack overflow - infinite recursive function - non-tail call" / "should throw error"
* "Evaluator - Tail recursion" / "stack overflow - infinite recursive function - tail call" / "should throw error"

### Nondeterministic

* "Evaluator - function: now" / "$now() returns timestamp" / "should return result object"
* "Evaluator - functions: random" / 'random number\")' / "should return result object"

### Result not pure JSON

#### Expecting `null`, actual `undefined`

* "#evaluate" / "correct types" / "undefined value"
* "#evaluate" / "Error cases - (Evaluate)" / "General" / "field in function does not exist"
* "#evaluate" / "Error cases - (Evaluate)" / "General" / "path in a function, where field in path does not exist"
* "#evaluate" / "inability to find data" / "key does not exist"
* "#evaluate" / "inability to find data" / "navigation path does not exist"
* "Evaluator - Conditional expressions" / '$lookup({"Bus": "Red", "Police Car": "White"}, $$)' / "should return result object"
* "Evaluator - Conditional expressions" / '\["Red"\[$$="Bus"], "White"\[$$="Police Car"]]\[0]' / "should return result object"
* "Evaluator - desendant operator" / "Account.Order.blah.**" / "should return result object"
* "Evaluator - function application operator" / 'foo ~> $substringAfter("@") ~> $substringBefore(".") ' / "should return result object"
* "Evaluator - function: reverse" / "$reverse(nothing)" / "should return result object"
* "Evaluator - function: shuffle" / "$shuffle(nothing)" / "should return result object"
* "Evaluator - function: sort" / "$sort(nothing)" / "should return result object"
* "Evaluator - functions: abs" / "$abs(nothing)" / "should return result object"
* "Evaluator - functions: average" / "$average(undefined)" / "should throw an error"
* "Evaluator - functions: average" / "$average([])" / "should return result object"
* "Evaluator - functions: boolean" / "$boolean([])" / "should return result object"
* "Evaluator - functions: boolean" / "$boolean(Account.blah)" / "should return result object"
* "Evaluator - functions: ceil" / "$ceil(nothing)" / "should return result object"
* "Evaluator - functions: contains" / '$contains(nothing, "World")' / "should return result object"
* "Evaluator - functions: floor" / "$floor(nothing)" / "should return result object"
* "Evaluator - functions: join" / '$join(Account.blah.Product.Description.Colour, ", ")' / "should return result object"
* "Evaluator - functions: keys" / '$keys("foo")' / "should return result object"
* "Evaluator - functions: keys" / "$keys(function(){1})" / "should return result object"
* "Evaluator - functions: keys" / '$keys(\["foo", "bar"])' / "should return result object"
* "Evaluator - functions: keys" / "$keys({})" / "should return result object"
* "Evaluator - functions: length" / "$length(missing)" / "should return result object"
* "Evaluator - functions: lookup" / '$lookup(Account.Order.Product.ProductID, "Product Name"))' / "should return result object"
* "Evaluator - functions: lowercase" / "$lowercase(blah)" / "should return result object"
* "Evaluator - functions: max" / "$max(undefined)" / "should throw an error"
* "Evaluator - functions: max" / "$max([])" / "should return result object"
* "Evaluator - functions: min" / "$min(undefined)" / "should throw an error"
* "Evaluator - functions: min" / "$min([])" / "should return result object"
* "Evaluator - functions: number" / "$number(Account.blah)" / "should return result object"
* "Evaluator - functions: power" / "$power(nothing, 3)" / "should return result object"
* "Evaluator - functions: replace" / '$replace(nothing, "at", "it", 2)' / "should return result object"
* "Evaluator - functions: round" / "$round(unknown)" / "should return result object"
* "Evaluator - functions: split" / '$split(nothing, " ")' / "should return result object"
* "Evaluator - functions: spread" / "$spread(blah)" / "should return itself"
* "Evaluator - functions: sqrt" / "$sqrt(nothing)" / "should return result object"
* "Evaluator - functions: string" / "$string(blah)" / "should return result object"
* "Evaluator - functions: substring" / "$substring(blah, 6)" / "should return result object"
* "Evaluator - functions: substringAfter" / '$substringAfter(blah, "ld")' / "should return result object"
* "Evaluator - functions: substringBefore" / '$substringBefore(blah, "He")' / "should return result object"
* "Evaluator - functions: sum" / "$sum(undefined)" / "should throw an error"
* "Evaluator - functions: uppercase" / "$uppercase(blah)" / "should return result object"
* "Evaluator - Lambda functions" / 'function($x){$x>5 ? "foo"}(3)' / "should return result object"
* "Evaluator - numeric operators" / "24 * notexist" / "should return undefined"
* "Evaluator - numeric operators" / "notexist + 1" / "should return undefined"
* "Evaluator - object constructor" / "blah.{}" / "should return result object"
* "Evaluator - predicates" / "$\[x=6]\[y=3].number" / "should return result object"
* "Evaluator - predicates" / "nothing\[x=6]\[y=3].number" / "should return result object"
* "Evaluator - random non-existent paths" / "$fdsd" / "should return result object"
* "Evaluator - random non-existent paths" / "fdf" / "should return result object"
* "Evaluator - random non-existent paths" / "fdf.ett" / "should return result object"
* "Evaluator - random non-existent paths" / "fdf.ett + 27" / "should return result object"
* "Evaluator - random non-existent paths" / "fdf.ett\[10]" / "should return result object"
* "Evaluator - random non-existent paths" / "fdf.ett\[vc > 10]" / "should return result object"
* "Evaluator - Tail recursion" / "empty function body" / "should return result object"
* "Evaluator - variable scope" / '( $foo := "defined"; ( $foo := nothing; $foo ) )' / "should return result object"
* "Function signatures" / 'λ($arr, $sep)<a\<s>s?:s>{$join($arr, $sep)}(foo, "-")' / "should return result object"
* "HOF - filter" / "filter nothing" / "should return result object"
* "HOF - map" / "map function with undefined input" / "should return result object"
* "HOF - reduce" / "reduce with undefined input" / "should return result object"
* "Regex" / 'Construction /a(b+)/ ("ababbabbcc").next().next().next()' / "should return result object"
* "Regex" / "Construction /ab/ ()" / "should return result object"
* "Regex" / "Functions - $match" / '$match(nothing,/a(xb+)/)' / "should return result object"

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
