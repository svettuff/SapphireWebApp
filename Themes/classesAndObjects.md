## Classes and Objects

A class is a "blueprint" for an object. It describes the properties and methods that objects of this type will have. An object is a specific instance of a class. Essentially, it is a custom type, like `int` or `float`.

### Creating a Class and an Object

A class is declared using the `class` keyword, followed by its name and body. Objects are created like variables, using the class name.

```cpp
#include <iostream>

// Define a class
class Car {
public: // Public access to these members
    string brand;  // Property (car brand)
    int year;      // Property (year of manufacture)

    // Method (action the object can perform)
    void drive() {
        std::cout << brand << " is driving!" << std::endl;
    }
};

int main() {
    Car myCar;           // Create an object of type Car
    myCar.brand = "BMW"; // Assign properties
    myCar.year = 2023;
    
    std::cout << "Brand: " << myCar.brand << std::endl;
    std::cout << "Year: " << myCar.year << std::endl;
    myCar.drive();       // Call the method

    return 0;
}
```

### Constructors

A constructor is a special method that is automatically called when an object is created. It is usually used to initialize properties.

```cpp
class Car {
public:
    std::string brand;
    int year;

    // Constructor
    Car(string b, int y) {
        brand = b;
        year = y;
    }

    void drive() {
        std::cout << brand << " is driving!" << std::endl;
    }
};

int main() {
    Car myCar("Toyota", 2020); // Initialization via constructor

    std::cout << "Brand: " << myCar.brand << std::endl;
    std::cout << "Year: " << myCar.year << std::endl;

    myCar.drive();
    return 0;
}
```

We will cover the topic of constructors and destructors in more detail later.

### Task

Create a class `Student` with the following properties:
`name` (string): the name of the student.
`age` (integer): the age of the student.
`grade` (character): the current grade of the student.

Process input and output of the data.
