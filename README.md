# jsonata-test

This project contains language-agnostic test files for the [JSONata querying/transformation language](http://jsonata.org/).

In general, one directory in `data` corresponds to one test case or one block of related test directories. Directories are grouped according to functional area. A typical test case contains three files:

1. `expression.jsonata`, containing a JSONata expression to be compiled.
2. `input.json`, containing the input to the compiled expression.
3. `output.json`, containing the expected output.

* `input.json` and `output.json` may instead contain the string "undefined", indicating that `undefined` should be used as input/expected as output respectively.
* `bindings.json` may also be present. This object contains variable names and values to be bound into the JSONata expression before evaluation.
* If `output.json` is missing, JSONata should throw an exception at **evaluation time**.
* If `input.json` is also missing, JSONata should throw an exception at **expression compilation time**.

## Example

`expression.jsonata`:

```jsonata
Account.Order[0].OrderID
```

`input.json`:

```json
{
  "Account": {
    "Account Name": "My Account",
    "Order": [
      {
        "OrderID": "order103"
      },
      {
        "OrderID": "order104"
      }
    ]
  }
}
```

`output.json`:

```json
"order103"
```
