## Dynamic Memory Allocation in C++

Dynamic memory allocation allows programs to request and release memory during runtime. This is useful when the amount of data required is not known in advance.

### Why Use Dynamic Memory Allocation?

**Flexibility:**

Used when the size of data is unknown at compile time.
For example, creating an array whose size depends on user input.

**Memory Efficiency:**

Memory is allocated only when needed, rather than being reserved in advance.

**Handling Large Data:**

Dynamic memory can be useful for working with large data structures such as arrays, trees, or graphs.

**Long-Term Data Storage:**

Dynamically created variables remain in memory until you explicitly free them (unlike automatic variables, which are destroyed when they go out of scope).

### Operators `new` and `new[]`

The `new` operator is used to allocate memory in the heap. The heap is a memory area managed by the operating system. It returns a pointer to the allocated memory.

**Syntax:**
```cpp
data_type *pointer = new data_type;
```

**Example:**
```cpp
int *ptr = new int; // Allocate memory for a single integer
*ptr = 42;          // Assign a value
std::cout << *ptr << std::endl; // Output the value
```

The `new[]` operator is used to allocate memory for an array.

**Example:**
```cpp
int *arr = new int[5]; // Allocate memory for an array of 5 elements

for (int i = 0; i < 5; i++) {
    arr[i] = i + 1; // Populate the array
}

for (int i = 0; i < 5; i++) {
    std::cout << arr[i] << " "; // Print the array elements
}

delete[] arr; // Free the memory
```

### Operators `delete` and `delete[]`

`delete` is used to release memory allocated with the `new` operator.

`delete[]` is used to release memory allocated with the `new[]` operator.

**Example:**
```cpp
int *ptr = new int;
*ptr = 100;
delete ptr; // Free the memory

int *arr = new int[10];
delete[] arr; // Free the memory for the array
```

### Features and Precautions

**Memory Leaks:**

If you forget to release memory using `delete` or `delete[]`, the allocated memory will remain occupied until the program ends.

**Example of a Memory Leak:**
```cpp
int *ptr = new int;
*ptr = 42;
// delete ptr; // If memory is not freed, a leak occurs
```

**Accessing Freed Memory:**

After freeing memory, the pointer becomes a dangling pointer. Using such a pointer leads to undefined behavior.

**Example:**
```cpp
int *ptr = new int;
delete ptr; // Free the memory
// std::cout << *ptr; // Error: Accessing freed memory
```

**Uninitialized Memory:**

Memory allocated with `new` is not automatically initialized (except for pointers to objects). You must initialize the variables yourself.

**Example:**
```cpp
#include <iostream>

int main() {
    int *ptr = new int; // Allocate memory for a single integer

    std::cout << "Value in uninitialized memory: " << *ptr << std::endl; // Prints an undefined value

    delete ptr; // Free the memory
    return 0;
}
```

### Additional Information

Use dynamic memory if:
The size of data depends on user input.
You want to use memory resources efficiently.
You are working with large data structures (e.g., dynamic arrays, graphs).

In modern C++, it is recommended to use smart pointers (`std::unique_ptr`, `std::shared_ptr`) for managing dynamic memory. They help avoid memory leaks by automatically freeing resources when they are no longer needed. We will explore this topic in more detail later.

Additionally, standard library containers (e.g., `std::vector`) automatically manage memory and allow dynamic resizing as new elements are added. This simplifies development and makes memory usage safer. However, to better understand how these mechanisms work, it is essential to first understand manual memory management.

### Task

Task Description: Write a program that:
Prompts the user for the size of an array.
Dynamically allocates memory for an array of the specified size.
Prompts the user for the array elements.
Prints the array to the screen.
Finds the minimum and maximum elements in the array.
Frees the allocated memory.
