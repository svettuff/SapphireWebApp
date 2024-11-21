## References in C++

References are alternative names for already existing variables. They provide access to a variable without using pointers but with similar functionality. References are simpler and safer than pointers, but they have their limitations.

### Basics of Working with References

**Declaring a Reference**

A reference is created using the `&` operator during declaration. It must be initialized immediately upon creation.

**Syntax:**
```cpp
data_type &reference_name = variable;
```

**Example:**
```cpp
#include <iostream>

int main() {
    int x = 10;
    int &ref = x; // ref is a reference to variable x
    
    std::cout << "Value of x: " << x << std::endl;
    std::cout << "Value through reference ref: " << ref << std::endl;
    
    ref = 20; // Modifying value through the reference
    std::cout << "New value of x: " << x << std::endl;
    
    return 0;
}
```

**Key Properties of References**

A reference must be initialized immediately upon declaration.

```cpp
int &ref; // Error: reference must be initialized
```
A reference cannot refer to another variable after initialization.

```cpp
int x = 10, y = 20;
int &ref = x;
ref = y; // Modifies the value of x, but the reference is still tied to x
```
References must always refer to an existing variable. They cannot be `null`.

### Using References

**Passing Arguments by Reference**

References allow passing arguments to functions without copying data. This is particularly useful for large objects. As we know, when passing arguments normally, the entire object is copied. By using references, we save resources. Essentially, the object is moved to the function via reference, like teleportation.

**Example:**
```cpp
#include <iostream>

void increment(int &num) {
    num++; // Increment the variable's value via reference
}

int main() {
    int x = 5;
    increment(x); // Pass x by reference
    std::cout << "Value of x after increment: " << x << std::endl; // Output: 6
    return 0;
}
```
`int &num`: Reference to variable `x`.
The function modifies the variable's value directly.

**Returning a Value by Reference**

A function can return a reference to provide access to a variable from the calling code.

**Example:**
```cpp
#include <iostream>

int& getMax(int &a, int &b) {
    return (a > b) ? a : b; // Return a reference to the larger element
}

int main() {
    int x = 10, y = 20;
    int &max = getMax(x, y); // Reference to the larger element
    std::cout << "Maximum: " << max << std::endl;
    
    max = 100; // Modify the value via the reference
    std::cout << "x: " << x << ", y: " << y << std::endl; // The variable's value changes
    return 0;
}
```

**References to Arrays**

References can be used to work with arrays.

**Example:**
```cpp
#include <iostream>

void printArray(int (&arr)[5]) { // Reference to an array of fixed size
    for (int i = 0; i < 5; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    printArray(arr); // Pass the array by reference
    return 0;
}
```
`int (&arr)[5]`: Reference to an array of 5 elements.

**Constant References**

Constant references (`const`) are used when you need to pass an object to a function for reading but want to forbid its modification.

**Example:**
```cpp
#include <iostream>

void printValue(const int &value) {
    std::cout << "Value: " << value << std::endl;
    // value = 10; // Error: cannot modify the value
}

int main() {
    int x = 50;
    printValue(x);
    return 0;
}
```
`const int &value`: A constant reference protects the data from modification.

### Task

Write a program that:
Accepts three variables.
Modifies their values through a function using references.

Write a program that:
Finds the maximum element in an array and returns a reference to it.
Modifies the maximum element of the array via the reference.
