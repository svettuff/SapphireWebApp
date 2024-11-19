## Constants in C++
Constants in C++ are variables whose values cannot be changed after initialization. Using constants makes code more readable, reliable, and protected from accidental changes.

### Declaring Constants

In C++, the `const` keyword is used to declare a constant. Once a constant is declared, its value cannot be modified.

**Syntax:**
```cpp
const data_type constant_name = value;
```

**Examples:**
```cpp
const int daysInWeek = 7;
const float pi = 3.14159;
const char grade = 'A';
```

`daysInWeek`: declared as an integer constant storing the number of days in a week.

`pi`: declared as a floating-point constant representing the value of Pi.

`grade`: declared as a character constant.

Declaring constants like this ensures that another person using your code cannot change the value of an important variable, potentially breaking the program logic. Constants will be further explored in future topics in different contexts.

### Task
Declare a constant variable and try to assign a new value to it. Observe how the compiler responds.