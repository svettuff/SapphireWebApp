## Работа с файлами — открытие, чтение и запись

Файлы позволяют сохранять и считывать данные между запусками программы. В C++ используется библиотека `<fstream>`.

### Основные классы для работы с файлами

`std::ifstream` — для чтения из файла.

`std::ofstream` — для записи в файл.

`std::fstream` — для чтения и записи.

**Пример:** Запись данных в файл

```cpp
#include <iostream>
#include <fstream> // Для работы с файлами

int main() {
    std::ofstream outFile("example.txt"); // Создаём объект ofstream
    if (!outFile) {
        std::cout << "Ошибка открытия файла!" << std::endl;
        return 1;
    }

    outFile << "Привет, файл!" << std::endl; // Записываем данные в файл
    outFile << "C++ — это круто." << std::endl;

    outFile.close(); // Закрываем файл ОБЯЗАТЕЛЬНО!
    std::cout << "Данные записаны в файл example.txt." << std::endl;
    return 0;
}
```

**Пример:** Чтение данных из файла

```cpp
#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream inFile("example.txt"); // Открываем файл для чтения
    if (!inFile) {
        std::cout << "Ошибка открытия файла!" << std::endl;
        return 1;
    }

    std::string line;
    while (getline(inFile, line)) { // Считываем строку за строкой
        std::cout << line << std::endl;
    }

    inFile.close(); // Закрываем файл
    return 0;
}
```

**Пример:** Чтение и запись в одном файле

```cpp
#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::fstream file("data.txt", std::ios::in | std::ios::out | std::ios::app); // Чтение и запись
    if (!file) {
        std::cout << "Ошибка открытия файла!" << std::endl;
        return 1;
    }

    // Запись данных
    file << "Добавляем строку в файл.\n";

    // Перемещаем указатель на начало для чтения
    file.seekg(0);

    // Чтение данных
    std::string line;
    while (getline(file, line)) {
        std::cout << line << std::endl;
    }

    file.close();
    return 0;
}
```

### Основные флаги доступа к файлам

`ios::in` — открыть файл для чтения.

`ios::out` — открыть файл для записи.

`ios::app` — добавить данные в конец файла.

`ios::trunc` — очистить файл при открытии.

`ios::binary` — бинарный режим.