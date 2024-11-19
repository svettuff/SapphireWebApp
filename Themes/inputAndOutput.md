## Input and Output in C++: Using `std::cin` and `std::cout`
In C++, standard input and output streams are used to interact with the user. With `std::cin` and `std::cout`, you can read data from the keyboard and output data to the screen. To use them, be sure to include the `#include <iostream>` library.

### Output: `std::cout`
`std::cout` is used to output information to the screen. The `<<` operator sends data to the output stream.

**Syntax:**
```cpp
std::cout << "Text to display";
```

**Examples:**
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, world!" << std::endl; // Outputs text and moves to a new line
    std::cout << "This is an example of output using std::cout." << std::endl;
    return 0;
}
```

`std::endl` – A special symbol that moves the cursor to a new line.

### Input: `std::cin`
`std::cin` is used to read data from the keyboard. The `>>` operator reads data from the input stream.

**Syntax:**
```cpp
std::cin >> variable;
```

**Examples:**
```cpp
#include <iostream>

int main() {
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age; // Reads the value and stores it in the variable age
    std::cout << "Your age: " << age << " years." << std::endl;
    return 0;
}
```

**Also, take note:** you will often see `using namespace std;`. This line removes the need to write `std::cout`, allowing you to use just `cout`. However, trust me, it's a bad habit. Why? We will cover this in future topics. For now, just trust me.

### Task
Declare several variables of different types as in the previous lesson. Try to input and output them from the program. Also, try running the program without `#include <iostream>`, so you understand how the compiler responds to errors.