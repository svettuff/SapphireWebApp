## Working with Strings in C++

In C++, there are two main ways to work with strings: C-style strings and the `std::string` class from the standard library. The `std::string` type provides more convenient and safer tools for working with strings compared to C-style strings.

### Declaring Strings
**C-Style Strings**

C-style strings are arrays of characters ending with the null character  .

**Example:**
```cpp
char str[] = "Hello!";
```

**Using std::string**

The `std::string` class from the C++ standard library is more convenient and provides many functions for working with strings.

**Example:**
```cpp
#include <iostream>
#include <string>

int main() {
    std::string greeting = "Hello!";
    std::cout << greeting << std::endl;
    return 0;
}
```

### Basic String Operations

**Concatenation (Joining Strings)**

Concatenation is the process of joining two or more strings together.

**Example:**
```cpp
#include <iostream>
#include <string>

int main() {
   std::string firstName = "Ivan";
   std::string lastName = "Petrov";
   std::string fullName = firstName + " " + lastName; // Joining strings
   std::cout << "Full Name: " << fullName << std::endl;
   return 0;
}
```

`+`: The operator is used to join strings.

**String Length**

The `length()` or `size()` method returns the number of characters in a string.

**Example:**
```cpp
#include <iostream>
#include <string>

int main() {
   std::string text = "Programming";
   std::cout << "String length: " << text.length() << std::endl; // Using the length() method
   std::cout << "String length: " << text.size() << std::endl;   // size() does the same thing
   return 0;
}
```

`length()` and `size()` return the length of the string (number of characters).

**Accessing String Characters**

You can access individual characters of a string using the `[]` operator or the `at()` method.

**Example:**
```cpp
#include <iostream>
#include <string>

int main() {
   std::string word = "Hello";
   std::cout << "First character: " << word[0] << std::endl;  // Outputs 'H'
   std::cout << "Second character: " << word.at(1) << std::endl; // Outputs 'e'
   return 0;
}
```

`word[0]`: Accessing the first character.
`word.at(1)`: Accessing the second character, with bounds checking.

**Modifying String Characters**

You can modify characters in a string using the `[]` operator.

**Example:**
```cpp
#include <iostream>
#include <string>

int main() {
   std::string text = "Hello";
   text[0] = 'B'; // Modifying the first character
   std::cout << text << std::endl; // Output: "Bello"
   return 0;
}
```

Strings in C++ can be modified by replacing characters using `[]`.

**Inputting Strings**
To input strings, use `std::cin` in the same way as with other variables we have covered.

**Example:**
```cpp
#include <iostream>
#include <string>

int main() {
   std::string name;
   std::cout << "Enter your name: ";
   std::cin >> name;
   std::cout << "Hello, " << name << "!" << std::endl;
   return 0;
}
```

### Task

Write a program that asks the user for their first and last name, as well as a favorite quote. Modify the third letter of the last name. The program should then output the full name and the quote separately.
```cpp
Full Name: [text]
Favorite Quote: "[text]"
```
