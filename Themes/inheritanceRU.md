## Наследование

Наследование позволяет создавать новые классы на основе уже существующих. Новый класс (наследник) перенимает свойства и методы родительского класса, а также может добавлять свои.

**Пример:**
```cpp
#include <iostream>

// Родительский (базовый) класс
class Animal {
public:
    void eat() {
        std::cout << "Это животное ест!" << std::endl;
    }
};

// Дочерний (производный) класс
class Dog : public Animal {
public:
    void bark() {
        std::cout << "Собака лает!" << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.eat();  // Метод из родительского класса
    myDog.bark(); // Метод из дочернего класса
    return 0;
}
```

### Зачем нужно наследование?

- Избегает дублирования кода.
- Упрощает добавление новых функций.
- Улучшает структуру программы.

### Задача 

Создайте программу, моделирующую простую систему работы транспортных средств.
Определите базовый класс `Car` с общими свойствами:
`brand` — марка транспорта (тип `string`);
`speed` — скорость (тип `int`). И методом `displayInfo`, который выводит информацию о транспортном средстве: `[brand] едет со скоростью [speed] км/ч`. Определите производные классы `BMW`, `MB`, `AUDI`, пусть у них будут разные свойства.