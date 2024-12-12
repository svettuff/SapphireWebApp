## Алгоритмы: Введение в стандартные алгоритмы C++

Алгоритмы в C++ — это часть стандартной библиотеки (STL), которая предоставляет готовые функции для работы с данными. Они предназначены для обработки элементов контейнеров (например, `std::vector`, `std::list`, `std::array` и других).

### Зачем нужны стандартные алгоритмы?

- **Скорость разработки:** Готовые функции позволяют избежать написания сложного кода вручную.
- **Оптимизация:** Алгоритмы уже оптимизированы и протестированы.
- **Читаемость:** Код с алгоритмами становится более понятным.

Когда вы манипулируете данными в контейнере, часто оказывается, что нужный алгоритм уже существует и был тщательно продуман и оптимизирован. Поэтому нет смысла тратить время на изобретение велосипеда. Однако понимать, как устроены алгоритмы изнутри, крайне полезно — это дает возможность адаптировать их или создать более эффективное решение под конкретную задачу. Для таких случаев я готовлю отдельный курс, посвященный алгоритмам, где мы разберем их работу в деталях.

### Где находятся алгоритмы?

Все стандартные алгоритмы находятся в заголовочном файле `<algorithm>`. Чтобы использовать их, нужно подключить этот заголовок:

```cpp
#include <algorithm>
```

### Основные группы стандартных алгоритмов

- Поиск и проверка элементов.
- Сортировка и упорядочение.
- Изменение данных.
- Агрегация и подсчёт.

### Примеры популярных алгоритмов

`std::find` — Ищет первый элемент, равный указанному значению.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
std::vector<int> numbers = {1, 2, 3, 4, 5};

    auto it = std::find(numbers.begin(), numbers.end(), 3); // Ищем число 3
    if (it != numbers.end()) {
        std::cout << "Найдено: " << *it << std::endl;
    } else {
        std::cout << "Не найдено" << std::endl;
    }

    return 0;
}
```

`std::any_of` — Проверяет, выполняется ли условие хотя бы для одного элемента.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
std::vector<int> numbers = {1, 2, 3, 4, 5};

    bool hasEven = std::any_of(numbers.begin(), numbers.end(), [](int n) {
        return n % 2 == 0; // Условие: число чётное
    });

    if (hasEven) {
        std::cout << "Есть хотя бы одно чётное число" << std::endl;
    } else {
        std::cout << "Нет чётных чисел" << std::endl;
    }

    return 0;
}
```

`std::sort` — Сортирует элементы в диапазоне по возрастанию.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
std::vector<int> numbers = {5, 3, 1, 4, 2};

    std::sort(numbers.begin(), numbers.end()); // Сортировка по возрастанию

    for (int n : numbers) {
        std::cout << n << " ";
    }

    return 0;
}
```

`std::reverse` — Разворот элементов.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
std::vector<int> numbers = {1, 2, 3, 4, 5};

    std::reverse(numbers.begin(), numbers.end()); // Разворот

    for (int n : numbers) {
        std::cout << n << " ";
    }

    return 0;
}
```

`std::replace` — Замена элементов.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
std::vector<int> numbers = {1, 2, 3, 2, 5};

    std::replace(numbers.begin(), numbers.end(), 2, 9); // Заменяем 2 на 9

    for (int n : numbers) {
        std::cout << n << " ";
    }

    return 0;
}
```

`std::count` — Считает, сколько раз элемент встречается в диапазоне.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
std::vector<int> numbers = {1, 2, 3, 2, 5};

    int count = std::count(numbers.begin(), numbers.end(), 2); // Считаем число 2
    std::cout << "Число 2 встречается " << count << " раз(а)" << std::endl;

    return 0;
}
```

`std::accumulate` — Находит сумму всех элементов в диапазоне (заголовок `<numeric>`).

```cpp
#include <iostream>
#include <vector>
#include <numeric>

int main() {
std::vector<int> numbers = {1, 2, 3, 4, 5};

    int sum = std::accumulate(numbers.begin(), numbers.end(), 0); // Сумма всех чисел
    std::cout << "Сумма: " << sum << std::endl;

    return 0;
}
```

### Задача

Программа должна выполнить следующие действия: 

Инициализировать список студентов с их оценками. Используйте контейнер `std::vector<std::pair<std::string, int>>`, где:

`std::string` — имя студента,
`int` — его оценка.

... к слову, `std::pair` очень полезная штука, изучите его перед выполнением задания.

Вывести список студентов и их оценок на экран.

Используя стандартные алгоритмы:

- Найти, есть ли хотя бы один студент с оценкой ниже 50.
- Посчитать, сколько студентов имеют оценку выше 80.
- Заменить все оценки ниже 50 на 50.
- Отсортировать студентов по оценкам по убыванию.
- После выполнения всех действий снова вывести список студентов.