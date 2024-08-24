alex@alex-vb:~$ sudo apt update
alex@alex-vb:~$ sudo apt install nginx php-fpm # установим Nginx и PHP-FPM
alex@alex-vb:~$ grep -i listen /etc/php/*/fpm/pool.d/*.conf # найдем путь к сокету в конфигурационных файлах PHP-FPM
alex@alex-vb:~$ sudo nano /etc/nginx/sites-available/default # настроим Nginx для работы с PHP-FPM, отредактировав файл конфигурации Nginx

###
# добавил строки в секцию server
location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
}
###

alex@alex-vb:~$ sudo apt install apache2 libapache2-mod-php # установим Apache и модули PHP
alex@alex-vb:~$ echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php # Убедимся, что Apache и PHP работают вместе, создав тестовый PHP-файл

###
<?php phpinfo(); ?>
###

alex@alex-vb:~$ sudo systemctl start apache2 # запустим Apache и проверим, что PHP работает
alex@alex-vb:~$ systemctl status apache2.service # проверим статус сервиса Apache

###
apache2.service - The Apache HTTP Server
     Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2024-02-18 12:36:36 +06; 2min 31s ago
       Docs: https://httpd.apache.org/docs/2.4/
   Main PID: 13908 (apache2)
      Tasks: 6 (limit: 9430)
     Memory: 10.2M
        CPU: 31ms
     CGroup: /system.slice/apache2.service
             ├─13908 /usr/sbin/apache2 -k start
             ├─13909 /usr/sbin/apache2 -k start
             ├─13910 /usr/sbin/apache2 -k start
             ├─13911 /usr/sbin/apache2 -k start
             ├─13912 /usr/sbin/apache2 -k start
             └─13913 /usr/sbin/apache2 -k start
фев 18 12:36:36 alex-vb systemd[1]: Starting The Apache HTTP Server...
фев 18 12:36:36 alex-vb systemd[1]: Started The Apache HTTP Server.
###

###
Открываем в браузере http://192.168.1.2/info.php и проверяем вывод.
###

alex@alex-vb:~$ sudo nano /etc/nginx/sites-available/default # добавим следующие строки в секцию server, чтобы направить запросы на Apache:

###
location / {
    proxy_pass http://localhost:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

###

alex@alex-vb:~$ sudo apt install mysql-server # установим MySQL
alex@alex-vb:~$ sudo mysql_secure_installation # запустим скрипт безопасности MySQL
alex@alex-vb:~$ sudo mysql -u root -p # войдем в MySQL

### создадим базу данных и таблицу
mysql> CREATE DATABASE mydb;
Query OK, 1 row affected (0,29 sec)

mysql> USE mydb;
Database changed
mysql> CREATE TABLE mytable (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100));
Query OK, 0 rows affected (0,48 sec)
mysql> INSERT INTO mytable VALUES (1, 'ivan@mail.ru'),(2, 'user2@mail.ru'),(3, 'user3@mail.ru');
Query OK, 3 rows affected (0,02 sec)
Records: 3  Duplicates: 0  Warnings: 0
###

alex@alex-vb:~$ sudo apt install phpmyadmin # установим phpMyAdmin


