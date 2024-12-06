## Advanced Input/Output Streams in C++

Input/output streams in C++ enable efficient handling of data coming into the program or being sent out. Advanced stream operations include stream redirection, formatting, buffering, working with files, strings, and binary data.

### What Are Streams?

A stream is like a pipe through which data flows:

**Input:** Data flows into the program from a source, such as a keyboard or file (`std::cin`, `std::ifstream`).

**Output:** Data flows out to a screen, file, or other devices (`std::cout`, `std::ofstream`).

C++ provides several standard streams:

- `std::cin` — standard input stream (usually the keyboard).
- `std::cout` — standard output stream (usually the screen).
- `std::cerr` — error stream (unbuffered output).
- `std::clog` — log stream (buffered output).

### Formatting Output

You can control how data is output to a stream.

**Example:** Setting Precision and Width
```cpp
#include <iostream>
#include <iomanip>

int main() {
    double pi = 3.141592653589793;

    std::cout << "Default output: " << pi << std::endl;

    std::cout << std::fixed << std::setprecision(2); // Show 2 decimal places
    std::cout << "Precision 2: " << pi << std::endl;

    std::cout << std::setw(10) << "Text" << std::endl; // Set output field width
    return 0;
}
```

### Redirecting Streams

Stream redirection allows you to change standard input/output destinations.

**Example:** Redirecting Output to a File
```cpp
#include <iostream>
#include <fstream>

int main() {
    std::ofstream file("output.txt");
    if (!file) {
        std::cerr << "Error opening file!" << std::endl;
        return 1;
    }

    std::streambuf* originalBuffer = std::cout.rdbuf(); // Save the original buffer
    std::cout.rdbuf(file.rdbuf());                     // Redirect stream to the file

    std::cout << "This is written to the file." << std::endl;

    std::cout.rdbuf(originalBuffer); // Restore output to the screen
    std::cout << "Now output is back to the screen." << std::endl;

    return 0;
}
```

### Stream Buffering

Streams in C++ use buffers for temporarily storing data before output.

**Example:** Manually Flushing the Buffer
```cpp
#include <iostream>

int main() {
    std::cout << "This will print immediately." << std::flush; // Flush the buffer
    return 0;
}
```

**Explanation:** `flush` forces the buffer to flush, outputting data immediately. Typically, data is flushed when the buffer is full or when `std::endl` is used. It is recommended to use `std::endl` for clarity.

### Working with Binary Data

Use `read` and `write` methods to handle "raw" (binary) data.

**Example:** Writing and Reading a Structure to/from a Binary File
```cpp
#include <iostream>
#include <fstream>

struct Data {
    int id;
    double value;
};

int main() {
    Data data = {1, 3.14};

    // Write data to a file
    std::ofstream outFile("data.bin", std::ios::binary);
    outFile.write(reinterpret_cast<char*>(&data), sizeof(data));
    outFile.close();

    // Read data from the file
    Data readData;
    std::ifstream inFile("data.bin", std::ios::binary);
    inFile.read(reinterpret_cast<char*>(&readData), sizeof(readData));
    inFile.close();

    std::cout << "ID: " << readData.id << ", Value: " << readData.value << std::endl;

    return 0;
}
```

### String Streams

String streams (`std::stringstream`, `std::istringstream`, `std::ostringstream`) allow handling text as data.

**Example:** Splitting a String into Numbers
```cpp
#include <iostream>
#include <sstream>

int main() {
    std::istringstream input("123 456 789"); // Input stream from a string
    int a = 0;
    int b = 0;
    int c = 0;

    input >> a >> b >> c;
    std::cout << "Read: " << a << ", " << b << ", " << c << std::endl;

    return 0;
}
```

**Additional:** Explore `std::stringstream` to understand how to populate variables according to their types. Learn about error handling with `fail()` and resetting states with `clear()`.

### Custom Manipulators

You can create custom manipulators to customize output.

**Example:** Creating a Manipulator
```cpp
#include <iostream>

std::ostream& myEndl(std::ostream& os) {
    os << "
--- End of Line ---
";
    return os;
}

int main() {
    std::cout << "Example" << myEndl;
    return 0;
}
```

### Task

Your program should:

1. Read student data from a string (in the format: Name Surname Age).
2. Save this data:
    - In a text file (`students.txt`) for user viewing.
    - In a binary file (`students.bin`) for efficient storage.
3. Read and display data from both files:
    - Text data — as-is.
    - Binary data — using the `Student` structure.
4. Implement buffer flushing to ensure progress messages are displayed immediately.

For better efficiency, consider using an IDE on your computer, such as JetBrains Rider (my personal choice) or Clion (also from JetBrains, for Mac). This will make working with and creating projects more convenient as you continue with this course.
