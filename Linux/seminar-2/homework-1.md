# Операционные системы и виртуализация (Linux) (семинары)
## Урок 2. Работа с файлами и ссылками
Задание:  
Создать каталоги students и mentors в домашней директории, а в них — текстовые файлы students_list.txt и mentors_list.txt соответственно.  
Открыть созданные в п.1 файлы в любом текстовом редакторе и заполнить их (в соответствии с названием) списком Ваших одногруппников и наставников на данном потоке.  
Переместите файл mentors_list.txt в папку students.  
Удалите папку mentors.  
Переименуйте папку students в students_and_mentors.  
Удалите папку students_and_mentors вместе с содержимым.  
7 *. Создать файл file1 и наполнить его произвольным содержимым.   
Скопировать его в file2. Создать символическую ссылку file3 на file1.  
Создать жёсткую ссылку file4 на file1.  
Посмотреть, какие inode у файлов.  
Удалить file1.  
Что стало с остальными созданными файлами? Попробовать вывести их на экран.  
8 *. Дать созданным файлам другие, произвольные имена.  
Создать новую символическую ссылку.  
Переместить ссылки в другую директорию.  


Результат:  
Текст команд, которые применялись при выполнении задания.  
Присылаем в формате текста выполненных команд и результатов их выполнения из терминала (простые файлы *.txt, созданные в блокноте).  
Без скриншотов.

---

```
PS C:\Users\Alex> ssh alex@192.168.1.2
alex@192.168.1.2's password:
Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 6.5.0-15-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

Last login: Fri Feb  2 19:28:41 2024 from 192.168.1.102
alex@alex-vb:~$ mkdir students mentors
alex@alex-vb:~$ > students/students_list.txt
alex@alex-vb:~$ > mentors/mentors_list.txt
alex@alex-vb:~$ vim mentors/mentors_list.txt
alex@alex-vb:~$ less mentors/mentors_list.txt
alex@alex-vb:~$ vim students/students_list.txt
alex@alex-vb:~$ less students/students_list.txt
alex@alex-vb:~$ mv mentors/mentors_list.txt students/
alex@alex-vb:~$ rm -r mentors/
alex@alex-vb:~$ mv students/ students_and_mentors/
alex@alex-vb:~$ rm -r students_and_mentors/
```