# Control Statements

Change the outcome of a piece of code.

Three types of control statements:

* Sequence
* Selection
* Repitition

## `If` Statement (Sequence)

Executes a block of code if a statement evaluates to `true`. We call this the condition.

```swift
if <condition> {
    // Executes this piece of code
}
```

We can also have an `else` that acts as a catch all if the the condition is not `true`:

```swift
if <condition> {
    // Executes if condition is true
} else {
    // Executes if condition is false
}
```

We can also have multiple conditions using `else if`:

```swift
if <condition> {
    ...
} else if <condition> {
    ...
} else if <condition> {
    ...
} else {
    ...
}
```

## `Switch` Statement (Selection)

Compares the passed in value against multiple `case`'s and executes against the `case` that matches:

```swift
let number = 5

switch number {
    case 1:
        print("number is 1")
    case 2:
        print("number is 2")
    ...
    case 5:
        print("number is 5")
}
```

In cases where a `case` is not matched, you can use the `default` to execute as a fallback:

```swift
let number = -7

switch number {
    case 1:
        print("number is 1")
    case 2:
        print("number is 2")
    ...
    case 5:
        print("number is 5")
    ...
    default:
        print("number is unknown")
}
```

This can be converted to an `if` statement:

```swift
if number == 1 {
    print("number is 1")
} else if number == 2 {
    print("number is 2")
} else if ... {
    ...
} else {

}
```

## Loops (Repitition)

### `For` Loop

This is a definite loop, meaning we will know how many times it iterates before it reaches the end of the loop:

#### Swift

```swift
for var index in 0..<10 {
    // Executes 10 times
}
```

#### Typescript

```typescript
//  (initialiser  ; condition ; incrementer      )
for (var index = 0; index < 10; index = index + 1) {
    // Executes 10 times
}
```

> Note: There is something called a For-Each Loop, but that will be discussed later.

### `While` Loop

This is a indefinite loop, meaning we won't know how many times the loop iterates, it'll just continue looping until the condition is false:

```swift
var counter = 0

while counter < 10 {
    // Execute block while condition is true
    counter = counter + 1
}
```

## `Break`

Breaks in loops exit the loop:

```swift
var counter = 1

while counter < 10 {
    if counter % 2 == 0 {
        break
    }

    counter += 1
}

// counter = 2
```

> Some languages require you to insert a `break` after every `case` in a `switch` statement to be able to exit the switch statement without executing the subsequent cases below.

## `Continue`

Brings control to the beginning of the loop, but it does not reset the interator:

```swift
var counter = 0

while counter < 10 {
    counter += 1
    if counter % 2 == 0 {
        continue
    }

    print(counter)
}

// Output: 1, 3, 5, 7, 9
```

