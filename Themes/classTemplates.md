## Class Templates in C++: Introduction and Use Cases

Class templates are a mechanism in C++ that allows creating generic classes capable of working with any type of data. This is especially useful when you need to write a class with identical logic for different types of data.

### Why Use Class Templates?

**Generic Programming:**
Instead of writing multiple versions of the same class for different types of data, you can use a class template.

**Improved Readability:**
A single templated class is easier to understand and maintain than several similar classes.

**Standard Template Library (STL):**
Many components of STL (e.g., `std::vector`, `std::stack`) are implemented using class templates. We will cover them in detail in a separate topic.

### Creating a Class Template

**Syntax:**
```cpp
template <typename T>
class ClassName {
// Define class members
};
```
`typename T` or `class T` specifies a type parameter that will be used in the class.
`T` is a "generic type" that will be substituted during class instantiation.

**Example:** Template class for storing a single element

```cpp
#include <iostream>

// Template class
template <typename T>
class Box {
private:
    T value; // Generic data type

public:
    Box(T val) : value(val) {} // Constructor

    void setValue(T val) {
        value = val;
    }

    T getValue() const {
        return value;
    }
};

int main() {
    // Create a template class object for int
    Box<int> intBox(10);
    std::cout << "intBox contains: " << intBox.getValue() << std::endl;

    // Create a template class object for double
    Box<double> doubleBox(3.14);
    std::cout << "doubleBox contains: " << doubleBox.getValue() << std::endl;

    // Create a template class object for string
    Box<std::string> stringBox("Hello, templates!");
    std::cout << "stringBox contains: " << stringBox.getValue() << std::endl;

    return 0;
}
```

**Output:**
```cpp
intBox contains: 10
doubleBox contains: 3.14
stringBox contains: Hello, templates!
```

### Class Templates with Multiple Type Parameters

Class templates can accept multiple type parameters.

**Example:** Class for a pair of values
```cpp
#include <iostream>

template <typename T1, typename T2>
class Pair {
private:
    T1 first;
    T2 second;

public:
    Pair(T1 f, T2 s) : first(f), second(s) {}

    void setFirst(T1 f) {
        first = f;
    }

    void setSecond(T2 s) {
        second = s;
    }

    T1 getFirst() const {
        return first;
    }

    T2 getSecond() const {
        return second;
    }
};

int main() {
    // Create an object for a pair of int and string
    Pair<int, std::string> p1(1, "One");
    std::cout << "Pair: (" << p1.getFirst() << ", " << p1.getSecond() << ")" << std::endl;

    // Create an object for a pair of double and char
    Pair<double, char> p2(3.14, 'A');
    std::cout << "Pair: (" << p2.getFirst() << ", " << p2.getSecond() << ")" << std::endl;

    return 0;
}
```

**Output:**
```cpp
Pair: (1, One)
Pair: (3.14, A)
```

### Specialization of Class Templates

Sometimes, you need to create a template class with a unique implementation for a specific data type. This is called template specialization.

**Example:** Specialization for `char`
```cpp
#include <iostream>

template <typename T>
class Data {
public:
    T value;

    Data(T val) : value(val) {}

    void display() {
        std::cout << "Generic data: " << value << std::endl;
    }
};

// Specialization for char
template <>
class Data<char> {
public:
    char value;

    Data(char val) : value(val) {}

    void display() {
        std::cout << "Character data: " << value << " (" << int(value) << ")" << std::endl;
    }
};

int main() {
    Data<int> intData(100);
    intData.display(); // Output: Generic data: 100

    Data<char> charData('A');
    charData.display(); // Output: Character data: A (65)

    return 0;
}
```

### Task

Implement a template class `Array` that:

- Stores an array of any type.
- Implements the following methods:
    - `setElement(index, value)`: sets the value of the array element at the specified index.
    - `getElement(index)`: retrieves the value of the array element at the specified index.
    - `getSize()`: returns the size of the array.

Write a program that:
- Creates an `Array` class object for `int` and `double` types.
- Fills the array using the `setElement` method.
- Outputs all array elements using the `getElement` method.
