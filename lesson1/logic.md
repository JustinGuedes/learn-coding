# Logic

## Arithmetic

Refers to numerical computation.

### Examples in `swift`:

```swift
let addition = 2 + 2
let subtraction = 4 - 2
let multiplication = 2 * 2
let division = 5 / 2 // Returns an int because its inferred
let doubleDivision = 5.0 / 2
let alternativeDoubleDivision: Double = 5 / 2
let remainder = 5 % 2 // Modulus operator (some languages use `mod` instead: 5 mod 2)
let power = pow(5, 2)
let squareRoot = sqrt(25)
```

## Boolean

Refers to operations on booleans.

### `Or` Operator

Compares booleans and evaluates to `true` if any of them are `true` else evaluates to `false`.

#### Example

```swift
let switch1 = true
let switch2 = false

let eitherOn = switch1 || switch2 // true
```

### `And` Operator

Compares booleans and evaluates to `true` if all of them are `true` else evaluates to `false`.

#### Example

```swift
let switch1 = true
let switch2 = false

let bothOn = switch1 && switch2 // false
```

### `Not` operator

Contradicts the current boolean value.

#### Example

```swift
let switch1 = true

let notSwitch1 = !switch1 // false
```

Here is a truth table that shows the possible values when using `||` and `&&`:

| switch1 | switch2 |  or   |  and  |
|---------|---------|-------|-------|
| true    | true    | true  | true  |
| true    | false   | true  | false |
| false   | true    | true  | false |
| false   | false   | false | false |

## Comparison

Refers to comparing values.

### `Equality` operator

Compares two values to see if they are equal.

#### Example

```swift
let pi = 3.14

let areSame = 3.14 == pi // true
```

### `Inequality` operator

Compares two values to see if they are unequal.

#### Example

```swift
let pi = 3.14

let areSame = 3.14 != pi // false
```

### `Greater Than` operator

Compares two values to see if the left hand side is greater than the right hand side.

#### Example

```swift
let greaterThan5 = 10 > 5 // true
```

### `Greater Than Or Equal To` operator

Compares two values to see if the left hand side is greater than or equal to the right hand side.

#### Example

```swift
let greaterThanOrEqualTo5 = 5 >= 5 // true
```

### `Less Than` operator

Compares two values to see if the left hand side is less than the right hand side.

#### Example

```swift
let lessThan5 = 10 < 5 // false
```

### `Less Than Or Equal To` operator

Compares two values to see if the left hand side is less than or equal to the right hand side.

#### Example

```swift
let lessThanOrEqualTo5 = 5 <= 5 // true
```
