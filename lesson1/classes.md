# Classes

A template or a structure of an object.

An object is an instance of a class. Generally objects are stored in memory.

```swift
// class <name> {
class Person {

    // Fields
    private var name: String
    private var age: Int
    private var birthDate: Date
    private var male: Bool

    // Methods/Functions
    func walk() {}
    func jump() {}

    init(name: String, newAge: Int, birthDate: Date, male: Bool) {
        self.name = name
        self.age = newAge
        self.birthDate = birthDate
        self.male = male
    }

    // Properties
    func getName() -> String {
        return name
    }

    func setName(name: String) {
        self.name = name
    }

    func getAge() -> Int {
        return age
    }

    func setAge(newAge: Int) {
        age = newAge
    }

    func getBirthDate() -> Date {
        return birthDate
    }

    func setBirthDate(date: Date) {
        birthDate = date
    }

    func isMale() -> Bool {
        return male
    }

    func setMale(isMale: Bool) {
    // func setGender(genderType: Bool) {
    //    male = genderType
        male = isMale
    }

    func birthdayHasPassed() -> Bool {
        let today = Date()
        let birthDateInCurrentYear = ... some logic here
        if today > birthDateInCurrentYear {
            return true
        }
        
        return false
    }

}

let jacob = Person(name: "Jacob", age: 12, birthDate: Date())

print(jacob.name) // Error: Private not accessible
print(jacob.getName())

jacob.setMale(true)
jacob.setGender(true)

jacob.setMale()
jacbo.setFemale()

```

## Fields

These are the attributes of the class. 

## Methods/Functions

A method is a function inside of the class. These terms can be used interchangeable.

### Constructor

Creates an instance of a class, i.e. object

## Properties

These are the method versions of the fields. Also known as the accessor methods.

## Dot operator


