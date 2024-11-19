## Control Structures in C++
Control structures are essential for managing the flow of a program and creating more complex logic. In C++, there are branching constructs (`if`, `else`, `switch`) used to choose between multiple blocks of code, and loop constructs (`for`, `while`, `do-while`) used to repeat code execution.

In this topic, you will often see `"text"` when using `std::cout` for output. `""` denotes a string, which will be covered in a separate topic.

### Conditional Statements
### `if` and `else`
These operators are used to execute a block of code based on a condition.

**Syntax:**
```cpp
if (condition) {
    // Code executes if the condition is true
} else {
    // Code executes if the condition is false
}
```

**Examples:**
```cpp
#include <iostream>

int main() {
    int number;
    std::cout << "Enter a number: ";
    std::cin >> number;
    
    if (number > 0) {
        std::cout << "The number is positive." << std::endl;
    } else if (number < 0) {
        std::cout << "The number is negative." << std::endl;
    } else {
        std::cout << "The number is zero." << std::endl;
    }
    
    return 0;
}
```

`if` checks the condition.

`else if` is used for an additional check if the first condition is false.

`else` executes if all previous conditions are false.

### `switch`
The `switch` statement is used when you need to choose one out of many values.

**Syntax:**
```cpp
switch (variable) {
    case value1:
        // Code for case value1
        break;
    case value2:
        // Code for case value2
        break;
    // Additional cases
    default:
        // Code if no case matches
}
```

**Example:**
```cpp
#include <iostream>

int main() {
    int day;
    std::cout << "Enter the day of the week (1-7): ";
    std::cin >> day;
    
    switch (day) {
        case 1:
            std::cout << "Monday" << std::endl;
            break;
        case 2:
            std::cout << "Tuesday" << std::endl;
            break;
        case 3:
            std::cout << "Wednesday" << std::endl;
            break;
        case 4:
            std::cout << "Thursday" << std::endl;
            break;
        case 5:
            std::cout << "Friday" << std::endl;
            break;
        case 6:
            std::cout << "Saturday" << std::endl;
            break;
        case 7:
            std::cout << "Sunday" << std::endl;
            break;
        default:
            std::cout << "Invalid input" << std::endl;
    }

    return 0;
}
```

`break` ends the execution of the `switch` block.
`default` executes if none of the cases match the value.

Internally, `switch` acts like a series of `if` and `else` statements. The use case for each will be further explained in later topics.

## Loops
### `for`
The `for` loop is used when the number of iterations is known.

**Syntax:**
```cpp
for (initialization; condition; update) {
    // Code to be repeated
}
```

**Example:**
```cpp
#include <iostream>

int main() {
    for (int i = 0; i < 5; ++i) {
        std::cout << "i = " << i << std::endl;
    }

    return 0;
}
```
`i = 0` – initializes the variable.

`i < 5` – condition for the loop to run.

`++i` – updates the variable after each iteration.

### `while`
The `while` loop is used when the block of code needs to be repeated as long as the condition is true.

**Syntax:**
```cpp
while (condition) {
    // Code to be repeated
}
```

**Example:**
```cpp
#include <iostream>

int main() {
    int count = 0;
    while (count < 5) {
        std::cout << "count = " << count << std::endl;
        count++;
    }

    return 0;
}
```

The loop continues as long as `count` is less than 5.

### `do-while`
The `do-while` loop is similar to `while` but guarantees that the block of code executes at least once, even if the condition is false.

**Syntax:**
```cpp
do {
    // Code to be executed at least once
} while (condition);
```

**Example:**
```cpp
#include <iostream>

int main() {
    int number = 0;
    do {
        std::cout << "Enter a number (0 to exit): ";
        std::cin >> number;
    } while (number != 0);

    return 0;
}
```
The loop executes at least once, even if `number` is 0.

### Breaking and Continuing Loops

`break`: Terminates the loop.
`continue`: Skips to the next iteration of the loop.

**Example using `break` and `continue`:**
```cpp
#include <iostream>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break; // Terminates the loop when i equals 5
        }
        if (i % 2 == 0) {
            continue; // Skips the current iteration for even numbers
        }
        std::cout << "i = " << i << std::endl;
    }

    return 0;
}
```

### Task

Write a program that: Asks the user for two numbers. Asks the user for the operation they want to perform (addition, subtraction, multiplication, division). Performs the chosen operation and outputs the result.