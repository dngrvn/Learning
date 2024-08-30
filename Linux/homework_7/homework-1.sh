###############################################################################
# Установить в виртуальную машину или VDS Docker, настроить набор контейнеров через docker compose по инструкции.
# Часть с настройкой certbot и HTTPS опустить, если у вас нет настоящего домена и белого IP.
###############################################################################


#####                                   Установка Docker                                             #####
#####                                   Согласно инструкции с сайта:                                 #####
##### https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04 #####

# обновим текущий список пакетов
sudo apt update 

# установим несколько обязательных пакетов, которые позволят apt использовать пакеты через HTTPS
sudo apt install apt-transport-https ca-certificates curl software-properties-common 

# добавим в свою систему ключ GPG для официального репозитория Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Добавим репозиторий Docker в источники APT
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

# Это также обновит нашу базу данных пакетов пакетами Docker из недавно добавленного репозитория.
# Убедимся, что мы собираемся выполнить установку из репозитория Docker, а не из репозитория Ubuntu по умолчанию:
apt-cache policy docker-ce

```
docker-ce:
  Установлен: (отсутствует)
  Кандидат:   5:25.0.3-1~ubuntu.20.04~focal
  Таблица версий:
     5:25.0.3-1~ubuntu.20.04~focal 500
        500 https://download.docker.com/linux/ubuntu focal/stable amd64 Packages
```

# установим Docker:
sudo apt install docker-ce

# Теперь Docker должен быть установлен, демон запущен, и процесс может запускаться при загрузке. Убедимся, что он работает:
sudo systemctl status docker

```
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2024-02-23 14:06:11 +06; 7s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 7207 (dockerd)
      Tasks: 9
     Memory: 27.9M
        CPU: 233ms
     CGroup: /system.slice/docker.service
             └─7207 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```
# Установка Docker теперь дает нам не только службу Docker (демон), но и утилиту командной строки Docker или клиент Docker.

##########################################################################################################

#####                                   Установка Docker Compose                                     #####
#####                                   Согласно инструкции с сайта:                                 #####
##### https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04 #####

# проверим текущую версию и при необходимости обновим ее с помощью следующей команды:
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

# После этого мы настроим разрешения:
sudo chmod +x /usr/local/bin/docker-compose

# Затем мы проверим, что установка прошла успешно, с помощью проверки версии:
docker-compose --version

```
docker-compose version 1.21.2, build a133471
```

# Создание сети Docker
docker network create my_network

# Запуск контейнера с БД (MariaDB)
docker run --name my_db --network my_network -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:10.8

# Запуск контейнера с phpMyAdmin
docker run --name my_phpmyadmin --network my_network -d phpmyadmin/phpmyadmin

# Получение доступа к БД через phpMyAdmin
http://192.168.1.2:8081 пользователь root, пароль my-secret-pw