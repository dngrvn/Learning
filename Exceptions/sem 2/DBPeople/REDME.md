**DataBasePeople** - файл для запуска

программа запрашивает у пользователя следующие данные в произвольном порядке, разделенные пробелом:
Фамилия Имя Отчество датарождения номертелефона пол

Форматы данных: (т.к. не было полноты данных, то:)
- **фамилия, имя, отчество** - строки. **латиница либо кирилица.  возмодны двойные фамилиии через дефис**
- дата_рождения - строка формата dd.mm.yyyy
- **номер_телефона** - целое беззнаковое число без форматирования - **т.к нет данных по длине телефона - то на длину не проверяю (может быть как сотовый так и внутренний)**
- пол - символ латиницей f или m.


**checkInputData**

собраны проверки входных данных
- **emptyStringException** - проверка на пустую строку
- **countInputException** - проверка на кол-во введенных данных и то что они разделены одним пробелом

**LocalException**

исключение

**WritePeopleInFiles**

запись в файл + обработка ошибок при записи
- файлы записываются и хранятся в папке DB.

исключение появляется, если путь к папке, в которую пытаюсь записать - не существует

**CreateStringRecord**

Содержит:
- парсинг введенных данных
- проверка их корректности