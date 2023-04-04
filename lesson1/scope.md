# Scope

The lifespan of the parts of code that you are working in.

## Global

Refers to the entire lifespan of the program, therefore anything declared in the global scope will be readily accessible to every part of the program.

## Blocks

Languages use blocks to separate/group pieces of code together creating a new scope that only contains what it needs:

```swift
let pi = 3.14

{ // After this line it would be classified as `in scope`
    let pi = 14.3
    
    print(pi) // Prints: 14.3

    { // After this line it would be classified as `in scope`
        let pi = 567.324
        
        print(pi) // Prints: 567.324
    } // After this line it would be classified as 'out of scope'
    
    print(pi) // Prints: 14.3
} // After this line it would be classified as 'out of scope'

print(pi) // Prints: 3.14
```

## Example

### Problem

Identify the problem in the snippet below:

#### Typescript

```typescript
let counter = 0

const average = (numbers) => {
    for (let index = 0; index < numbers.length; index++) {
        counter += numbers[index]
    }

    return counter / numbers.length
}

console.log(average([1, 2, 3])) // 2
console.log(average([1, 2, 3])) // 4
```

#### Swift

```swift
var counter = 0

func average(numbers: [Int]) -> Int {
    for let number in numbers  {
        counter += number
    }

    return counter / numbers.length
}

print(average([1, 2, 3])) // 2
print(average([1, 2, 3])) // 4
```

### Solution

#### Typescript

```typescript
const average = (numbers) => {
    let counter = 0

    for (let index = 0; index < numbers.length; index++) {
        counter += numbers[index]
    }

    return counter / numbers.length
}

console.log(average([1, 2, 3])) // 2
console.log(average([1, 2, 3])) // 2
```

#### Swift

```swift
func average(numbers: [Int]) -> Int {
    var counter = 0

    for let number in numbers  {
        counter += number
    }

    return counter / numbers.length
}

print(average([1, 2, 3])) // 2
print(average([1, 2, 3])) // 2
```
