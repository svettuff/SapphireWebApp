﻿## Константы в C++
Константы в C++ — это переменные, значение которых нельзя изменить после инициализации. Использование констант помогает сделать код более читаемым, надежным и защищенным от случайных изменений.

### Объявление констант

В C++ для объявления константы используется ключевое слово `const`. После того как константа объявлена, её значение нельзя изменить.

**Синтаксис:**
```cpp
const тип_данных имя_константы = значение;
```

**Примеры:**
```cpp
const int daysInWeek = 7;
const float pi = 3.14159;
const char grade = 'A';
```

`daysInWeek`: объявлена как целочисленная константа, хранящая количество дней в неделе.

`pi`: объявлена как константа с плавающей точкой, представляющая число Пи.

`grade`: объявлена как символьная константа.

В таком виде константы имеют смысл, чтобы другой человек, который использует ваш код, не мог изменить значение важной для вас перменной, тем самым сломав логику программы. Дальше в темах константы будут раскрываться в других своих проявлениях.

### Задача
Обьявите константную переменную и попробуйте присвоить ей новое значение. Посмотрите как отреагирует компилятор.