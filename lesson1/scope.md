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
