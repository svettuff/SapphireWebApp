## File Handling — Opening, Reading, and Writing

Files allow saving and retrieving data between program runs. In C++, the `<fstream>` library is used.

### Main Classes for File Handling

- `std::ifstream` — for reading from a file.
- `std::ofstream` — for writing to a file.
- `std::fstream` — for both reading and writing.

**Example:** Writing Data to a File

```cpp
#include <iostream>
#include <fstream> // For file handling

int main() {
    std::ofstream outFile("example.txt"); // Create an ofstream object
    if (!outFile) {
        std::cout << "Error opening file!" << std::endl;
        return 1;
    }

    outFile << "Hello, file!" << std::endl; // Write data to the file
    outFile << "C++ is awesome." << std::endl;

    outFile.close(); // Close the file MUST HAVE!
    std::cout << "Data has been written to example.txt." << std::endl;
    return 0;
}
```

**Example:** Reading Data from a File

```cpp
#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream inFile("example.txt"); // Open the file for reading
    if (!inFile) {
        std::cout << "Error opening file!" << std::endl;
        return 1;
    }

    std::string line;
    while (getline(inFile, line)) { // Read line by line
        std::cout << line << std::endl;
    }

    inFile.close(); // Close the file
    return 0;
}
```

**Example:** Reading and Writing in the Same File

```cpp
#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::fstream file("data.txt", std::ios::in | std::ios::out | std::ios::app); // Read and write
    if (!file) {
        std::cout << "Error opening file!" << std::endl;
        return 1;
    }

    // Writing data
    file << "Adding a line to the file.\n";

    // Move the pointer to the beginning for reading
    file.seekg(0);

    // Reading data
    std::string line;
    while (getline(file, line)) {
        std::cout << line << std::endl;
    }

    file.close();
    return 0;
}
```

### Main File Access Flags

- `ios::in` — open the file for reading.
- `ios::out` — open the file for writing.
- `ios::app` — append data to the end of the file.
- `ios::trunc` — clear the file when opening.
- `ios::binary` — binary mode.
