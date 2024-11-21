## Inheritance

Inheritance allows you to create new classes based on existing ones. A new class (derived) inherits the properties and methods of the parent class and can also add its own.

**Example:**
```cpp
#include <iostream>

// Parent (base) class
class Animal {
public:
    void eat() {
        std::cout << "This animal is eating!" << std::endl;
    }
};

// Child (derived) class
class Dog : public Animal {
public:
    void bark() {
        std::cout << "The dog is barking!" << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.eat();  // Method from the parent class
    myDog.bark(); // Method from the child class
    return 0;
}
```

### Why Use Inheritance?

- Avoids code duplication.
- Simplifies the addition of new features.
- Improves the structure of the program.

### Task

Create a program that models a simple transportation system.
Define a base class `Car` with common properties:
`brand` — brand of the vehicle (type `string`);
`speed` — speed (type `int`).
Also, define a method `displayInfo` that outputs information about the vehicle: `[brand] is driving at [speed] km/h`.
Define derived classes `BMW`, `MB`, and `AUDI`, each with their unique properties.
