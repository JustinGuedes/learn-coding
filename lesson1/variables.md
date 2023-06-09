# Variables

Container or placeholder of a type/value.

## Immutable (Constant) vs Mutable ('Variable`)

### Immutable (Constant)

Constants are variables that do not change over its lifespan. Always default to a immutable (constant) until you are required to change the value, then change it to a mutable ('variable') variable.

#### Swift

```swift
let pi = 3.14

// pi = 32 - Cannot assign to value 'y' is a 'let' constant
```

#### Typescript

```typescript
const pi = 3.14
```

### Mutable('Variable')

'Variable' variable can change over its lifespan.

#### Swift

```swift
var counter = 0

counter = counter + 1
```

#### Typescript

```typescript
let counter = 0

counter = counter + 1
```

## Naming

* Unique and descriptive to be able to identifier the purpose of the variable easily.
* Most languages have their own naming convention, and most use lowerCamelCase and snakeCase.
* Keep variable names within a good length, which could be anywhere between 3 to 20 letters.
* Try not use any abbreviations when naming things.
* Names should not start with a symbol or number
* Names should not contain symbols unless for special uses/cases. 

> Note: Make sure you don't name variables after `keywords` from languages. Examples like: `for`, `in`, `if`, `let`

### Good Examples in `swift`:

```swift
let pi = 3.14
let letterLowercase = "h"
let dollarRandRate = 18.09
```

### Bad Examples in `swift`:

```swift
let g = "h"
let D$2 = 324
let 🤣 = 2.31
let dollarrandrate = 18.09
```
