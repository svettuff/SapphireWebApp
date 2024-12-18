﻿## Data Types and Variables in C++
### Basic Data Types

The C++ programming language has several basic data types used for storing different kinds of information. Their availability is very useful since programming is essentially about working with data. Here are the main ones:

**int** – Integer Data Type

Used to store whole numbers (e.g., -3, 0, 42).

**Example:**
```cpp
int age = 25;
```

**float** – Floating Point Data Type

Used to store fractional numbers with limited precision.

**Example:**
```cpp
float height = 5.9;
```

**double** – Double Precision Floating Point Data Type

Suitable for storing fractional numbers with greater precision than float.

**Example:**
```cpp
double pi = 3.141592653589793;
```

**char** – Character Data Type

Used to store a single character enclosed in single quotes.

**Example:**
```cpp
char letter = 'A';
```

**bool** – Boolean Data Type

Stores a logical value: `true` or `false`.

**Example:**
```cpp
bool isStudent = true;
```

### Declaring Variables
Variables in C++ are named memory locations used to store data. When declaring a variable, you must specify the data type and the variable name.

```cpp
data_type variable_name = value;
```

Never declare a variable without initializing it. For example, instead of writing `int a;`, it’s better to write `int a = 0;` if you don’t yet know what value it should have or plan to assign it later. If you leave the variable uninitialized, it will contain so-called "garbage."
In the next topic, where we’ll discuss data output, you can check how the program perceives such an "empty" variable by trying to output it. Always initialize your variables — this will save you from many potential errors.

### Naming Variables
The variable name must start with a letter (Latin) or an underscore (_) and can contain digits.
Variable names are case-sensitive, meaning `Age` and `age` are different variables.
Names should be meaningful to make the code easy to read and understand. For instance, instead of `int x;`, it is better to use `int numberOfStudents;`.

### Task
Practice declaring variables. Create two variables of each type and run the program to ensure there are no errors.