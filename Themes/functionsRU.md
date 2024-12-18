﻿## Функции в C++

Функции позволяют разбивать программу на более мелкие и управляемые части, улучшая читаемость, повторное использование кода и структуру программы. В C++ функция — это блок кода, который выполняет определённое действие и может возвращать результат.

### Создание функции

**Синтаксис:**
```cpp
тип_возвращаемого_значения имя_функции(параметры) {
   // Тело функции
   return значение; // Возвращает значение (если тип возвращаемого значения не void)
}
```
`тип_возвращаемого_значения`: Это может быть любой из типов данных, которые мы разбирали ранее, либо `void`, если функция ничего не возвращает.

`имя_функции`: Подчиняется тем же правилам, что и имена переменных.

`(параметры)`: Параметры можно передавать в функцию, если вы хотите работать с какими-то данными внутри неё, так как функция не видит ничего за пределами своей области `{}`. Функция может быть и без параметров. Рекомендуется передавать в функцию не более 3-5 параметров для сохранения читаемости и простоты.

**Пример:**
```cpp
#include <iostream>

// Функция, которая возвращает сумму двух чисел
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3); // Вызов функции
    std::cout << "Сумма: " << result << std::endl;
    return 0;
}
```

`int add(int a, int b)`: Объявление функции `add`, которая принимает два целых числа и возвращает их сумму.
`return a + b;`: Оператор `return` возвращает результат выполнения функции. В данном случае сумма `a` и `b` является целым числом `int`, так как складываются два значения типа `int`. Поэтому `тип_возвращаемого_значения` функции должен быть `int`.

### Функции без возвращаемого значения

Если функция не должна возвращать значение, используется тип `void`.

**Пример:**
```cpp
void printMessage() {
    std::cout << "Привет, мир!" << std::endl;
}

int main() {
    printMessage();
    return 0;
}
```

### Задача

Улучшите свой калькулятор из прошлой темы с помощью функций.