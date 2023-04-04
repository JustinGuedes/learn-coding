# Functions

Grouping of logic that produce an expected result.

```swift
func add(first: Int, second: Int) -> Int {
    return first + second
}
...

let result = add(2, 4) // 6
```

```typescript
function add(first: number, second: number) {
    return first + second
}

// or

const add = (first: number, second: number) => {
    return first + second
}
...

const result = add(2, 4) // 6
```

## Anatomy (Signature)

```swift
func <name>(<input>) -> <output> {
    <logic>
    return <output>
}
```

* `name`: refers to the name of the function and should be as descriptive as possible of what it does.
* `input`: parameters, refers to the input of the function, what goes into the function, what can be used inside the block
* `ouput`: return type, refers to what the function will return

## Best Practices

* Be descriptive
* Should start with a verb
* Try not exceed more than 5 parameters
* Keep functions as simple 

## Returning

Every function requires a `return` statement in order to exit the function and return the expected output:

```swift
func subtract(first: Int, second: Int) -> Int {
    return first - second
}
```

> If the function returns nothing (what we call `Void`) then you don't have to specify a `return` statement.

### Problem

Create a function that will print a greetings message to a person using their name:

```swift
func welcome(name: String) {
    print("Welcome \(name)")
}
```

```swift
func doesMeetCriteria(mathsMark: Int, englishMark: Int) -> Bool {
    if mathsMark < 50 {
        return false
    }

    if englishMark < 50 {
        return false
    }

    return true
}
```
