# Types

There are two categories of types:

* Simple
* Complex

## Simple

Simple types are known as *primitives*, examples of *primitives* are:

* `integer`, positive or negative rational number
* `boolean`, true or false
* `float`, positive or negative real number with single point precision
* `double`, positive or negative real number with double point precision
* `char`, represents a single symbol
* other languages contain more primitives related to numbers like `bit`, `byte`, `small`, `long`, etc.

> Single point precision: represents decimal points up to 32 bits
> Double point precision: represents decimal points up to 64 bits

### Examples of *primitives* in `swift`:

```swift
-4 // Int
true // Bool
3.141592653 // Float
6.1234124512523211 // Double
"j" // Character
```

The above is examples of *literals*, basically the actual raw value and not computed or read in through a stream.

## Complex

These are made up of multiple simple/complex types. More of these will be discussed later and updated here.

### Examples of complex types in `swift`:

```swift
class Person {
    let age: Int
}

enum Status {
    case success
    case failed
}

func method() {

}
```
