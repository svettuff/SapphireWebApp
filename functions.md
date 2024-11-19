## Functions in C++

Functions allow you to break down a program into smaller and manageable parts, improving readability, code reuse, and program structure. In C++, a function is a block of code that performs a specific action and can return a result.

### Creating a Function

**Syntax:**
```cpp
return_type function_name(parameters) {
   // Function body
   return value; // Returns a value (if the return type is not void)
}
```
`return_type`: This can be any data type we have discussed earlier, or `void` if the function does not return anything.

`function_name`: Follows the same rules as variable names.

`(parameters)`: Parameters can be passed to the function if you want to work with some data within it, as the function cannot see anything outside its scope `{}`. A function can also be defined without parameters. It is recommended to pass no more than 3-5 parameters to maintain readability and simplicity.

**Example:**
```cpp
#include <iostream>

// Function that returns the sum of two numbers
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3); // Function call
    std::cout << "Sum: " << result << std::endl;
    return 0;
}
```

`int add(int a, int b)`: Declaration of the `add` function that takes two integers and returns their sum.
`return a + b;`: The `return` statement returns the result of the function. In this case, the sum of `a` and `b` is an integer `int` since two `int` values are being added. Therefore, the `return_type` of the function must be `int`.

### Functions Without a Return Value

If a function does not need to return a value, use the `void` type.

**Example:**
```cpp
void printMessage() {
    std::cout << "Hello, world!" << std::endl;
}

int main() {
    printMessage();
    return 0;
}
```

### Task

Enhance your calculator from the previous topic using functions.