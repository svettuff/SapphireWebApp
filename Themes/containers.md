## Containers in C++: Basics and Analysis of the Most Popular Ones

Containers in C++ are data structures that allow storing and organizing collections of elements. They are part of the C++ Standard Library (STL). Each container has its own characteristics and is suited for specific tasks.
Previously, we used plain arrays or faced difficulties when working with dynamic arrays. Now, thanks to modern tools, we’ve reached a new level: not only is it more convenient, but also significantly more efficient.

### What Are Containers?

Containers are "boxes" that store data. They:

- Allow adding, removing, and iterating through elements.
- Provide functions for managing data.
- Use iterators to access elements.

### Types of Containers

**Sequential Containers**

Elements are arranged in a specific order, like in an array or list.

- `std::vector` — dynamic array.
- `std::list` — doubly linked list.
- `std::deque` — double-ended queue.

**Associative Containers**

Elements are stored using keys, simplifying searches.

- `std::map` — key-value pairs.
- `std::set` — unique elements.

**Hash-Based Containers**

Accelerated access to elements using hash functions.

- `std::unordered_map` — key-value pairs without sorting.
- `std::unordered_set` — unique elements without sorting.

**Container Adapters**

These are special containers built on top of other containers.

- `std::stack` — stack.
- `std::queue` — queue.
- `std::priority_queue` — priority queue.

### Common Containers and Their Usage

**Example:** `std::vector`
```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4};

    numbers.push_back(5); // Add an element
    for (int num : numbers) {
       std::cout << num << " ";
    }
    std::cout << std::endl;

    numbers.pop_back(); // Remove the last element
    for (int num : numbers) {
        std::cout << num << " ";
    }

    return 0;
}
```

The `for` loop here is a **range-based for**, a simplified way to iterate through container elements. It’s convenient for simple iterations, making the code more concise and readable.

**Example:** `std::list`
```cpp
#include <iostream>
#include <list>

int main() {
    std::list<int> numbers = {1, 2, 3, 4};

    numbers.push_front(0); // Add to the front
    numbers.push_back(5);  // Add to the back

    for (int num : numbers) {
        std::cout << num << " ";
    }

    return 0;
}
```

**Example:** `std::map`
```cpp
#include <iostream>
#include <map>

int main() {
    std::map<std::string, int> phoneBook;

    phoneBook["Alice"] = 1234;
    phoneBook["Bob"] = 5678;

    for (auto& [name, number] : phoneBook) {
        std::cout << name << ": " << number << std::endl;
    }

    return 0;
}
```

### When to Use Which Container?

- `std::vector` — For dynamic addition/removal of elements, fast access by index.
- `std::deque` — For fast addition/removal at both ends.
- `std::array` — When size is known at compile time.
- `std::set` — For unique elements where sorting is important.
- `std::unordered_set` — For unique elements where speed is more important than order.
- `std::map` — For key-value pairs where sorting is important.
- `std::unordered_map` — For key-value pairs where search speed is critical.
- `std::list` — For frequent insertions and deletions in the middle.
- `std::stack` — For stack implementation (LIFO).
- `std::queue` — For queue implementation (FIFO).

Choosing the right container is key to writing optimal and convenient code. I recommend thoroughly studying the internal workings of each container.
