## Function Templates in C++: Introduction and Use Cases

Function templates allow writing a single universal function that can work with different types of data. This is especially useful for creating generic code and avoiding duplication.

### Why Use Function Templates?

**Generic Programming:** Instead of writing multiple versions of the same function for different data types, you can use a template.

**Avoiding Code Duplication:** Write the logic once, and the compiler generates the required versions of the function for each data type.

**Improved Readability and Maintainability:** A single generic code is easier to maintain than multiple specialized ones.

### Creating a Function Template

A function template is created using the `template` keyword.

**Syntax:**
```cpp
template <typename T>
return_type function_name(parameters) {
    // Implementation
}
```

`typename T` or `class T`:
- `T` is the type that the compiler will substitute during the function call.
- You can use either `typename` or `class`—both are identical in this context.
- The compiler automatically determines the type `T` based on the arguments passed to the function.

**Example:** Generic function for comparison

```cpp
#include <iostream>

// Function template
template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << "Max (int): " << getMax(10, 20) << std::endl;       // int
    std::cout << "Max (double): " << getMax(10.5, 20.7) << std::endl; // double
    std::cout << "Max (char): " << getMax('a', 'z') << std::endl;     // char

    return 0;
}
```

**Output:**
```cpp
Max (int): 20
Max (double): 20.7
Max (char): z
```

### Multiple Type Parameters

You can use multiple types in a single template.

**Example:** Function for adding different types
```cpp
#include <iostream>

template <typename T1, typename T2>
void displaySum(T1 a, T2 b) {
    std::cout << "Sum: " << a + b << std::endl;
}

int main() {
    displaySum(10, 20.5);   // int + double
    displaySum(5.5, 3);     // double + int
    displaySum(3, 7);       // int + int

    return 0;
}
```

**Output:**
```cpp
Sum: 30.5
Sum: 8.5
Sum: 10
```

### Type Constraints

Sometimes you need to restrict the types that can be used in a template. For this, you can use concepts (available in C++20) or other techniques like `std::enable_if`. We will cover this later.

### Implicit and Explicit Template Specialization

**Implicit Specialization:** The compiler determines the type `T` from the function arguments.

**Explicit Specialization:** You can specify the type explicitly.

**Example:**
```cpp
#include <iostream>

template <typename T>
T multiply(T a, T b) {
    return a * b;
}

int main() {
    std::cout << multiply(2, 3) << std::endl;          // Implicit specialization (int)
    std::cout << multiply<double>(2.5, 4.0) << std::endl; // Explicit specialization (double)

    return 0;
}
```

### Limitations and Features

**The Compiler Must See the Template Definition:**
The function template must be visible to the compiler during compilation (typically placed in .h files).

**Templates Do Not Reduce Machine Code Size:**
The compiler generates separate versions of the function for each type, so templates do not reduce code size.

**Suitable for Homogeneous Data:**
If you need to work with different types in one function, you should use multiple type parameters.

### Task

Create a function template for working with arrays. The program should:
- Implement a template function `findMax` that:
    - Accepts an array of any type and its size.
    - Returns the maximum element in the array.
