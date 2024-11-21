## Encapsulation and Abstraction

### Encapsulation

Encapsulation is a process that:
- Hides the object's data from direct access (using access modifiers: `private`, `protected`).
- Direct access is only allowed to `public` data.
- Manages access to data through special methods (`getters` and `setters`).
- Protects data from misuse.

### Bank Account

**Data**: Account balance.

**Access**: You cannot directly change the balance in the bank (e.g., you can't simply say you now have $1,000,000).

**Instead, you use**:
- Deposit or withdraw money (methods).
- The system checks if the operation is valid.

**Example:**

```cpp
#include <iostream>

class BankAccount {
private:
    double balance; // Balance is hidden from direct access

public:
    // Constructor to set the initial balance
    BankAccount(double initialBalance) {
        if (initialBalance >= 0) {
            balance = initialBalance;
        } else {
            balance = 0;
            std::cout << "Invalid initial balance. Set to 0." << std::endl;
        }
    }

    // Method to deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            std::cout << "Deposit amount must be greater than 0!" << std::endl;
        }
    }

    // Method to withdraw money
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            std::cout << "Insufficient funds or invalid amount!" << std::endl;
        }
    }

    // Method to check the balance
    double getBalance() const {
        return balance;
    }
};

int main() {
    BankAccount myAccount(1000); // Create an account with an initial balance of 1000

    myAccount.deposit(500); // Deposit 500
    std::cout << "Current balance: " << myAccount.getBalance() << std::endl;

    myAccount.withdraw(200); // Withdraw 200
    std::cout << "Current balance: " << myAccount.getBalance() << std::endl;

    myAccount.withdraw(2000); // Try to withdraw more than available
    return 0;
}
```

**What Happens Here:**

- The balance (`balance`) is hidden (`private`), so it cannot be changed directly.
- Deposits and withdrawals can only be made through the methods (`deposit` and `withdraw`).
- The methods check the validity of operations.
Deposits must be positive.
Withdrawals are only allowed if sufficient funds are available.

### Why Encapsulation is Important

**Data Security:** Limits access and protects the object from incorrect usage.

**Controlled Access:** Ensures that data is modified only in valid ways.

**Modularity:** Simplifies changes within the class without affecting the rest of the code.

### Abstraction

Abstraction hides the complex details of an object's implementation and provides a simple interface for working with it.

### Car

When you drive a car, you don't need to know how the engine or transmission works. You interact with a simple interface.

**Gas Pedal:** Accelerates the car.

**Brake:** Stops the car.

**Steering Wheel:** Controls the direction.

In programming, abstraction works the same way. You provide only the methods needed by the user while hiding the implementation details.

**Example:**
```cpp
#include <iostream>

class Car {
private:
    void startEngine() {
        std::cout << "Engine started." << std::endl;
    }

    void stopEngine() {
        std::cout << "Engine stopped." << std::endl;
    }

public:
    void drive() {
        startEngine(); // Internally starts the engine
        std::cout << "Car is driving..." << std::endl;
        stopEngine(); // Internally stops the engine
    }
};

int main() {
    Car myCar;
    myCar.drive(); // Call the method to operate the car
    return 0;
}
```

**What Happens Here:**

- The user (in this case, the programmer using the `Car` class) only works with the `drive()` method.
- The implementation details (`startEngine`, `stopEngine`) are hidden because they are `private`.

### Why Abstraction is Important

**Simplified Usage:** The user interacts only with necessary functions.

**Hidden Complexity:** Internal implementation details (e.g., how the engine works) remain hidden.

**Increased Flexibility:** The implementation can be changed without affecting users of the class.

### Task

Create a class `SmartDevice` that models a smart device.

**Encapsulation:**

The device has private properties:
`power` — whether the device is on (`bool`).
`brightness` — the brightness level (from 0 to 100, type `int`).

To manage these properties, use public methods:
`turnOn` and `turnOff` to power the device on and off.
`setBrightness` to set the brightness level (if the device is on).
`getBrightness` to retrieve the current brightness level.
`isOn` to check the device's power state.

**Abstraction:**

Add a method `operate` that:
Turns on the device.
Sets the brightness level.
Outputs the message:
  `The device is operating at [brightness]% brightness.`
