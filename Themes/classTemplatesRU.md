## Шаблоны классов в C++: Введение и использование

Шаблоны классов — это механизм в C++, позволяющий создавать обобщённые классы, которые работают с любыми типами данных. Это особенно полезно, когда нужно написать класс с одинаковой логикой, но для разных типов данных.

### Зачем нужны шаблоны классов?

**Обобщённое программирование:**
Вместо написания нескольких версий одного и того же класса для разных типов данных, можно использовать шаблон класса.

**Повышение читаемости:**
Один шаблонный класс проще понимать и сопровождать, чем несколько похожих классов.

**Стандартная библиотека STL:**
Многие компоненты STL (например, std::vector, std::stack) реализованы с помощью шаблонов классов. Мы их подробно разберем в отдельной теме.

### Создание шаблона класса

**Синтаксис:**
```cpp
template <typename T>
class ClassName {
// Определение членов класса
};
```
`typename T` или `class T`: определяет параметр типа, который будет использоваться в классе.
`T` — это "обобщённый тип", который подставляется во время использования класса.

**Пример:** Шаблонный класс для хранения одного элемента

```cpp
#include <iostream>

// Шаблонный класс
template <typename T>
class Box {
private:
    T value; // Обобщённый тип данных

public:
    Box(T val) : value(val) {} // Конструктор

    void setValue(T val) {
        value = val;
    }

    T getValue() const {
        return value;
    }
};

int main() {
    // Создаём объект шаблонного класса для int
    Box<int> intBox(10);
    std::cout << "intBox содержит: " << intBox.getValue() << std::endl;

    // Создаём объект шаблонного класса для double
    Box<double> doubleBox(3.14);
    std::cout << "doubleBox содержит: " << doubleBox.getValue() << std::endl;

    // Создаём объект шаблонного класса для string
    Box<string> stringBox("Привет, шаблоны!");
    std::cout << "stringBox содержит: " << stringBox.getValue() << std::endl;

    return 0;
}
```

**Вывод:**
```cpp
intBox содержит: 10
doubleBox содержит: 3.14
stringBox содержит: Привет, шаблоны!
```

### Шаблоны классов с несколькими параметрами

Шаблоны классов могут принимать несколько параметров типа.

**Пример:** Класс для пары значений
```cpp
#include <iostream>

template <typename T1, typename T2>
class Pair {
private:
    T1 first;
    T2 second;

public:
    Pair(T1 f, T2 s) : first(f), second(s) {}

    void setFirst(T1 f) {
        first = f;
    }

    void setSecond(T2 s) {
        second = s;
    }

    T1 getFirst() const {
        return first;
    }

    T2 getSecond() const {
        return second;
    }
};

int main() {
    // Создаём объект для пары int и string
    Pair<int, string> p1(1, "Один");
    std::cout << "Пара: (" << p1.getFirst() << ", " << p1.getSecond() << ")" << std::endl;

    // Создаём объект для пары double и char
    Pair<double, char> p2(3.14, 'A');
    std::cout << "Пара: (" << p2.getFirst() << ", " << p2.getSecond() << ")" << std::endl;

    return 0;
}
```

**Вывод:**
```cpp
Пара: (1, Один)
Пара: (3.14, A)
```

### Специализация шаблонов классов

Иногда требуется создать шаблонный класс с уникальной реализацией для конкретного типа данных. Это называется специализацией шаблона.

**Пример:** Специализация для `char`
```cpp
#include <iostream>

template <typename T>
class Data {
public:
    T value;

    Data(T val) : value(val) {}

    void display() {
        std::cout << "Общие данные: " << value << std::endl;
    }
};

// Специализация для char
template <>
class Data<char> {
public:
    char value;

    Data(char val) : value(val) {}

    void display() {
        std::cout << "Данные символа: " << value << " (" << int(value) << ")" << std::endl;
    }
};

int main() {
    Data<int> intData(100);
    intData.display(); // Выводит: Общие данные: 100

    Data<char> charData('A');
    charData.display(); // Выводит: Данные символа: A (65)

    return 0;
}
```

### Задача

Реализуйте шаблонный класс `Array`, который:

- Хранит массив произвольного типа.
- Реализует следующие методы:
    - `setElement(index, value)`: устанавливает значение элемента массива по указанному индексу.
    - `getElement(index)`: возвращает значение элемента массива по указанному индексу.
    - `getSize()`: возвращает размер массива.
  
Напишите программу, которая:
- Создаёт объект класса `Array` для типа `int` и `double`.
- Заполняет массив значениями через метод `setElement`.
- Выводит все элементы массива с помощью `getElement`.