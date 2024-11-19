## Operators and Expressions in C++
Operators and expressions are the basic building blocks that enable performing calculations and controlling program logic. In C++, operators are divided into several categories.

### Arithmetic Operators
Used for performing mathematical operations:

* `+` : Addition
* `-` : Subtraction
* `*` : Multiplication
* `/` : Division
* `%` : Modulus (remainder of division, only for integers)

**Examples:**
```cpp
  int a = 10;
  int b = 3;
  int sum = a + b;        // Addition, result: 13
  int difference = a - b; // Subtraction, result: 7
  int product = a * b;    // Multiplication, result: 30
  int quotient = a / b;   // Division, result: 3 (integer division)
  int remainder = a % b;  // Modulus, result: 1
```

### Comparison Operators
Compare two values and return true or false:

* `==` : Equal to
* `!=` : Not equal to
* `>` : Greater than
* `<` : Less than
* `>=` : Greater than or equal to
* `<=` : Less than or equal to

**Examples:**
```cpp
int x = 5;
int y = 10;

bool isEqual = (x == y);    // Equal to, result: false
bool isNotEqual = (x != y); // Not equal to, result: true
bool isGreater = (x > y);   // Greater than, result: false
bool isLess = (x < y);      // Less than, result: true
```

### Logical Operators
Used to combine logical expressions:

* `&&` : Logical AND (true if both expressions are true)
* `||` : Logical OR (true if at least one expression is true)
* `!` : Logical NOT (inverts the value of an expression)

**Examples:**
```cpp
bool a = true;
bool b = false;

bool result1 = a && b; // Logical AND, result: false
bool result2 = a || b; // Logical OR, result: true
bool result3 = !a;     // Logical NOT, result: false
```

### Assignment Operators
Used to assign values to variables:

* `=` : Assignment
* `+=` : Addition assignment
* `-=` : Subtraction assignment
* `*=` : Multiplication assignment
* `/=` : Division assignment
* `%=` : Modulus assignment

**Examples:**
```cpp
int value = 10;
value += 5; // Same as value = value + 5, result: 15
value -= 3; // Same as value = value - 3, result: 12
value *= 2; // Same as value = value * 2, result: 24
value /= 4; // Same as value = value / 4, result: 6
value %= 5; // Same as value = value % 5, result: 1
```

### Increment and Decrement
Used to increase or decrease the value of a variable by one:

* `++` : Increment (increase by 1)
* `--` : Decrement (decrease by 1)

There are two ways to use them:

Prefix: ++a (increments first, then uses)
Postfix: a++ (uses first, then increments)

**Examples:**
```cpp
int number = 5;
int prefixIncrement = ++number; // Increments number to 6, then returns 6
int postfixIncrement = number++; // Returns 6, then increments number to 7

int prefixDecrement = --number; // Decrements number to 6, then returns 6
int postfixDecrement = number--; // Returns 6, then decrements number to 5
```

There is an ongoing debate on the internet about which to use. As far as I understand, in most cases, it doesn't matter. Personally, I am used to using it before the variable.

### Combining Operators in Expressions
Expressions can be a combination of different operators:

```cpp
int a = 10;
int b = 20;
int c = 5;

int result = (a + b) * c; // Parentheses change the order of execution, result: 150
bool logicResult = (a < b) && (b > c); // Result: true
```

### Task
Write a program that asks the user for two integers and performs all arithmetic operations on them.