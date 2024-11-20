
## Introduction to Pointers

Pointers are variables that store the address of another variable. Pointers allow you to work with memory at a low level and manage data directly.
In essence, memory in a computer is structured like an array, which we have already covered. Each memory cell has its own address, and if we know this address, we can always access the data stored in it.
Working with pointers requires special care and attention. **I highly recommend studying how computer memory works to better understand how this works, including how much memory each of the basic data types occupies.**

A pointer stores the memory address where another variable is stored. The `&` operator is used to obtain the address of a variable. The dereference operator `*` is used to access the value stored at the address.

**Syntax:**
```cpp
data_type *pointer_name;
```

A pointer has the same `data_type` as the variable it points to.
The `*` near `pointer_name` always indicates that it is a pointer.

**Example:**
```cpp
#include <iostream>

int main() {
    int x = 10;
    int *ptr = &x; // Pointer ptr stores the address of variable x
    
    std::cout << "Value of x: " << x << std::endl;
    std::cout << "Address of x: " << &x << std::endl;
    std::cout << "Pointer ptr: " << ptr << std::endl;
    std::cout << "Value through pointer ptr: " << *ptr << std::endl; // Dereference
    return 0;
}
```

**Note:** If you declare a pointer but do not assign it a value, always use `nullptr`, for example: `int *ptr = nullptr;`. This will create a null pointer. The principle here is similar to regular variables.

In later topics, it will become clearer why using pointers is convenient.

### Task
Write a program that: Creates a pointer to an integer. Assigns a value through the pointer. Outputs the value and the address.
