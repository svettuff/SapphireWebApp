## Basics of arrays in C++

Arrays are a data structure that allows you to store multiple values of the same type in a single container. Array elements are stored in a contiguous block of memory and are indexed starting from 0. Essentially, an array is like a basket for apples, with the condition that only apples can be placed in it. Instead of carrying apples one by one from the orchard to the house, it is easier to put them in a basket and carry them all at once. Each apple has its number in the basket — its index. If you try to access an apple by a non-existent index, an error will occur.

### Declaring an Array

**Syntax:**
```cpp
data_type array_name[size];
```

`data_type` – the type of the elements in the array (e.g., `int`, `float`, `char`).

`size` – the number of elements in the array.

**Example:**
```cpp
int numbers[5]; // Declares an array of 5 integers
```

### Initializing an Array
An array can be initialized at the time of declaration by specifying values in curly braces.

**Example:**
```cpp
int numbers[5] = {1, 2, 3, 4, 5}; // Initializes the array with values
```

If not all elements are specified, the remaining elements are initialized to zero:
```cpp
int numbers[5] = {1, 2}; // Remaining elements: {1, 2, 0, 0, 0}
```

You can also leave the array size empty, and the compiler will determine it based on the number of elements:
```cpp
int numbers[] = {1, 2, 3, 4, 5}; // Array size: 5
```

### Accessing Array Elements (Indexing)
Array elements are indexed starting from 0, and you can access them using the `[]` operator.

**Example:**
```cpp
int numbers[5] = {10, 20, 30, 40, 50};
std::cout << "First element: " << numbers[0] << std::endl; // Output: 10
std::cout << "Second element: " << numbers[1] << std::endl; // Output: 20
```
`numbers[0]` – the first element of the array.
`numbers[4]` – the fifth element of the array (index of the last element = array size - 1).

### Modifying Array Elements
You can change the elements of an array by assigning new values to them.

**Example:**
```cpp
int numbers[3] = {1, 2, 3};
numbers[1] = 10; // Changes the second element
std::cout << "New second element: " << numbers[1] << std::endl; // Output: 10
```

### Iterating Over an Array
Using a `for` loop to iterate over the array elements. The `for` loop is often used to traverse an array.

**Example:**
```cpp
int numbers[5] = {5, 10, 15, 20, 25};

for (int i = 0; i < 5; i++) {
    std::cout << "Element " << i << ": " << numbers[i] << std::endl;
}
```
`i = 0` – starting index.
`i < 5` – the loop runs as long as the index is less than the array size.
`numbers[i]` – access the array elements using the index `i`.

## Task

Write a simple program that reads 5 numbers from the user, stores them in an array, and outputs all the numbers.