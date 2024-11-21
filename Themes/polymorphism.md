## Polymorphism

Polymorphism is the ability of similar objects to behave differently depending on their type. The main tool for polymorphism in C++ is virtual functions.

**Example:**
```cpp
#include <iostream>

// Parent class
class Animal {
public:
    virtual void sound() { // Virtual function
        std::cout << "The animal makes a sound!" << std::endl;
    }
};

// Child classes
class Dog : public Animal {
public:
    void sound() override { // Overriding the method
        std::cout << "The dog barks!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void sound() override {
        std::cout << "The cat meows!" << std::endl;
    }
};

int main() {
    Animal *a1 = new Dog(); // Polymorphic object
    Animal *a2 = new Cat();
    
    a1->sound(); // The dog barks
    a2->sound(); // The cat meows
    
    delete a1;
    delete a2;
    
    return 0;
}
```

### Why is Polymorphism Useful?

- Allows handling different types of objects through a common interface.
- Simplifies the code.

We will explore polymorphism and its types in more detail in the future.

### Task

Define a base class `Vehicle` with a virtual method `move`, which outputs a general message: `The vehicle is moving`.

Create derived classes:

`Car`, the `move` method outputs: `The car drives on the road`.
`Boat`, the `move` method outputs: `The boat sails on water`.
`Plane`, the `move` method outputs: `The plane flies in the sky`.
