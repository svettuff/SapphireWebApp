﻿## Расширенная работа с потоками ввода/вывода в C++

Потоки ввода/вывода в C++ позволяют эффективно работать с данными, которые поступают в программу или выводятся из неё. Расширенная работа с потоками охватывает перенаправление потоков, форматирование, буферизацию, работу с файлами, строками и бинарными данными.

### Что такое потоки?

Поток — это как труба, по которой текут данные:

**Ввод:** данные поступают из источника, например, с клавиатуры или файла (`std::cin`, `std::ifstream`).

**Вывод:** данные отправляются на экран, в файл или другое устройство (`std::cout`, `std::ofstream`).

В C++ есть несколько стандартных потоков:

- `std::cin` — стандартный поток ввода (обычно клавиатура).
- `std::cout` — стандартный поток вывода (обычно экран).
- `std::cerr` — поток для ошибок (небуферизованный вывод).
- `std::clog` — поток для логов (буферизованный вывод).

### Форматирование вывода

Вы можете управлять тем, как данные выводятся в поток.

**Пример:** Установка точности и ширины
```cpp
#include <iostream>
#include <iomanip>

int main() {
    double pi = 3.141592653589793;

    std::cout << "Обычный вывод: " << pi << std::endl;

    std::cout << std::fixed << std::setprecision(2); // Показываем 2 знака после точки
    std::cout << "С точностью 2: " << pi << std::endl;

    std::cout << std::setw(10) << "Текст" << std::endl; // Устанавливаем ширину поля вывода
    return 0;
}
```

### Перенаправление потоков

Перенаправление позволяет изменить стандартный ввод/вывод.

**Пример:** Перенаправление вывода в файл
```cpp
#include <iostream>
#include <fstream>

int main() {
    std::ofstream file("output.txt");
    if (!file) {
        std::cerr << "Ошибка открытия файла!" << std::endl;
        return 1;
    }

    std::streambuf* originalBuffer = std::cout.rdbuf(); // Сохраняем исходный буфер
    std::cout.rdbuf(file.rdbuf());                 // Перенаправляем поток в файл

    std::cout << "Это записано в файл." << std::endl;

    std::cout.rdbuf(originalBuffer); // Восстанавливаем вывод на экран
    std::cout << "Теперь вывод снова на экран." << std::endl;

    return 0;
}
```

### Буферизация потоков

Потоки в C++ используют буферы для временного хранения данных перед выводом.

**Пример:** Сброс буфера вручную
```cpp
#include <iostream>

int main() {
    std::cout << "Это будет напечатано сразу." << std::flush; // Сбрасываем буфер
    return 0;
}
```

**Объяснение:**
`flush` сбрасывает буфер, выводя данные немедленно.
Обычно данные выводятся после заполнения буфера или при использовании `std::endl`. Проще говоря, всегда используйте `std::endl`.

### Работа с бинарными данными

Для работы с "сырыми" (бинарными) данными используйте методы `read` и `write`.

**Пример:** Запись и чтение структуры в бинарный файл
```cpp
#include <iostream>
#include <fstream>

struct Data {
    int id;
    double value;
};

int main() {
    Data data = {1, 3.14};

    // Записываем данные в файл
    std::ofstream outFile("data.bin", std::ios::binary);
    outFile.write(reinterpret_cast<char*>(&data), sizeof(data));
    outFile.close();

    // Читаем данные из файла
    Data readData;
    std::ifstream inFile("data.bin", std::ios::binary);
    inFile.read(reinterpret_cast<char*>(&readData), sizeof(readData));
    inFile.close();

    std::cout << "ID: " << readData.id << ", Value: " << readData.value << std::endl;

    return 0;
}
```
Таким образом проще хранить структуры, а также эффективнее хранить большие объемы данных.

**Памятка:** `struct` — это та же самая сущность, что и `class`, с одной ключевой разницей: по умолчанию все поля в `struct` являются `public`, тогда как в `class` они `private`. `struct` чаще применяется для создания простых структур, которые не содержат сложной логики или методы, только переменные.

### Строковые потоки

Строковые потоки (`std::stringstream`, `std::istringstream`, `std::ostringstream`) позволяют работать с текстом как с данными.

**Пример:** Разделение строки на числа
```cpp
#include <iostream>
#include <sstream>

int main() {
    std::istringstream input("123 456 789"); // Поток ввода из строки
    int a = 0;
    int b = 0;
    int c = 0;

    input >> a >> b >> c;
    std::cout << "Прочитано: " << a << ", " << b << ", " << c << std::endl;

    return 0;
}
```

**Дополнительно:** самостоятельно изучите работу с `std::stringstream`, чтобы лучше понимать порядок заполнения переменных в соотвествии с их типами. Также как обрабатывать ошибки через `fail()` и их сброс через `clear()`.

### Пользовательские манипуляторы

Вы можете создавать свои манипуляторы для кастомизации вывода.

**Пример:** Создание манипулятора
```cpp
#include <iostream>

std::ostream& myEndl(std::ostream& os) {
    os << "\n--- Конец строки ---\n";
    return os;
}

int main() {
    std::cout << "Пример" << myEndl;
    return 0;
}
```

### Задача 

Ваша программа должна:

1. Считать данные студентов из строки (в формате: Имя Фамилия Возраст).
2. Сохранить эти данные:
    - В текстовом файле (students.txt) для просмотра пользователем.
    - В бинарном файле (students.bin) для эффективного хранения.
3. Прочитать и вывести данные из обоих файлов:
    - Текстовые данные — как есть.
    - Бинарные данные — с использованием структуры `Student`.
4. Реализовать сброс буфера, чтобы сообщения о ходе выполнения выводились на экран немедленно.

Тут я бы порекомендовал использовать IDE на компьютере, например Rider от JetBrains(лично мой выбор), Clion(от них же, только для Mac). Также вам будет банально удобнее работать и создавать проекты, проходить курс дальше.