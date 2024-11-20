## Pointer Operations

### Pointers and Arrays

**Arrays as Pointers**

In C++, arrays and pointers are closely related. The name of an array `(arr)` is a pointer to the first element of the array.

**Example:**
```cpp
#include <iostream>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr; // Pointer to the first element of the array
    
    std::cout << "First element of the array: " << *ptr << std::endl;   // Dereferencing the pointer
    std::cout << "Second element of the array: " << *(ptr + 1) << std::endl; // Pointer arithmetic
    
    return 0;
}
```
`arr`: Pointer to the first element of the array.

`*(ptr + 1)`: Access the second element of the array.

**Iterating Through an Array Using a Pointer**

A pointer can be used to iterate through the elements of an array using pointer arithmetic.

**Example:**
```cpp
#include <iostream>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    
    for (int i = 0; i < 5; i++) {
        std::cout << "Element " << i << ": " << *(ptr + i) << std::endl;
    }
    
    return 0;
}
```

### Pointers and Functions

Pointers can be used to pass data to functions. This allows modifying the original data by passing its address.
This is one example where pointers are very convenient. Instead of copying the value, you pass its address, enabling the modification of the object outside the function's scope.

**Passing a Pointer to a Function**

A function can take a pointer to a variable to work with its value directly.

**Example:**
```cpp
#include <iostream>

void changeValue(int *ptr) {
    *ptr = 100; // Modifying the value via the pointer
}

int main() {
    int num = 10;
    std::cout << "Before modification: " << num << std::endl;
    
    changeValue(&num); // Passing the address of the variable
    std::cout << "After modification: " << num << std::endl;
    
    return 0;
}
```

`int *ptr`: Pointer as a function parameter.
`changeValue(&num)`: Passing the address of the variable.

**Passing an Array to a Function**

Arrays are passed to functions as pointers. Essentially, the function receives the address of the first element of the array instead of copying the entire array. This saves program memory. It is crucial to keep this in mind to create efficient solutions.

**Example:**
```cpp
#include <iostream>

void printArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        std::cout << "Element " << i << ": " << *(arr + i) << std::endl;
    }
}

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    printArray(arr, 5); // Passing the array to the function
    
    return 0;
}
```
`int *arr`: Pointer to the array.
`*(arr + i)`: Access an array element using pointer arithmetic.

**Returning a Pointer from a Function**

This will be covered in more detail in the topic of dynamic memory allocation. Essentially, a function can return not just a variable but a pointer, similar to what we discussed in the functions topic.

## Task

Write a program that:
Creates an array of 10 integers and fills it with random numbers from 1 to 100.
Uses a pointer to iterate through the array elements and print them.
Implements a function that takes a pointer to the array and its size and returns a pointer to the maximum element of the array.
Implements a function that modifies the value of an array element passed via a pointer.
