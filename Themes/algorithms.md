## Algorithms: Introduction to Standard Algorithms in C++

Algorithms in C++ are part of the Standard Library (STL), providing ready-made functions for working with data. They are designed to process elements of containers (e.g., `std::vector`, `std::list`, `std::array`, and others).

### Why Use Standard Algorithms?

- **Development Speed:** Ready-made functions save you from writing complex code manually.
- **Optimization:** Algorithms are already optimized and tested.
- **Readability:** Code using algorithms becomes more understandable.

When manipulating data in a container, you’ll often find that the needed algorithm already exists and has been thoroughly designed and optimized. Therefore, there’s no point in reinventing the wheel. However, understanding how algorithms work internally is extremely useful — it allows you to adapt them or create more efficient solutions for specific tasks.

### Where Are Algorithms Located?

All standard algorithms are in the `<algorithm>` header. To use them, include this header:

```cpp
#include <algorithm>
```

### Main Groups of Standard Algorithms

- Searching and checking elements.
- Sorting and ordering.
- Modifying data.
- Aggregation and counting.

### Examples of Popular Algorithms

`std::find` — Finds the first element equal to the specified value.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    auto it = std::find(numbers.begin(), numbers.end(), 3); // Find number 3
    if (it != numbers.end()) {
        std::cout << "Found: " << *it << std::endl;
    } else {
        std::cout << "Not found" << std::endl;
    }

    return 0;
}
```

`std::any_of` — Checks if a condition is true for at least one element.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    bool hasEven = std::any_of(numbers.begin(), numbers.end(), [](int n) {
        return n % 2 == 0; // Condition: number is even
    });

    if (hasEven) {
        std::cout << "There is at least one even number" << std::endl;
    } else {
        std::cout << "No even numbers" << std::endl;
    }

    return 0;
}
```

`std::sort` — Sorts elements in ascending order.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {5, 3, 1, 4, 2};

    std::sort(numbers.begin(), numbers.end()); // Sort in ascending order

    for (int n : numbers) {
        std::cout << n << " ";
    }

    return 0;
}
```

`std::reverse` — Reverses elements.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    std::reverse(numbers.begin(), numbers.end()); // Reverse

    for (int n : numbers) {
        std::cout << n << " ";
    }

    return 0;
}
```

`std::replace` — Replaces elements.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 2, 5};

    std::replace(numbers.begin(), numbers.end(), 2, 9); // Replace 2 with 9

    for (int n : numbers) {
        std::cout << n << " ";
    }

    return 0;
}
```

`std::count` — Counts how many times an element appears in a range.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 2, 5};

    int count = std::count(numbers.begin(), numbers.end(), 2); // Count number 2
    std::cout << "Number 2 appears " << count << " times" << std::endl;

    return 0;
}
```

`std::accumulate` — Finds the sum of all elements in a range (header `<numeric>`).

```cpp
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    int sum = std::accumulate(numbers.begin(), numbers.end(), 0); // Sum of all numbers
    std::cout << "Sum: " << sum << std::endl;

    return 0;
}
```

### Task

The program should perform the following actions:

Initialize a list of students with their grades. Use the container `std::vector<std::pair<std::string, int>>`, where:

`std::string` — student name.
`int` — student grade.

   ... by the way, `std::pair` is a very useful feature; study it before completing the task.

Output the list of students and their grades to the screen.

Using standard algorithms:

- Find out if there is at least one student with a grade below 50.
- Count how many students have grades above 80.
- Replace all grades below 50 with 50.
- Sort the students by grades in descending order.
- After completing all actions, output the list of students again.
