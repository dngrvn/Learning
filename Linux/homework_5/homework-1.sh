###############################################################################
alex@alex-vb:~$ sudo iptables -L # вывод списка текущих правил в iptables
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         
alex@alex-vb:~$ sudo iptables -P INPUT DROP # устанавливаем политику по умолчанию для цепочки INPUT на DROP
alex@alex-vb:~$ sudo iptables -A INPUT -p tcp --dport  22 -j ACCEPT # добавляем правило в цепочку INPUT, которое разрешает входящий трафик на порт 22
alex@alex-vb:~$ sudo iptables -A INPUT -p tcp --dport  80 -j ACCEPT # добавляем правило в цепочку INPUT, которое разрешает входящий трафик на порт 80
alex@alex-vb:~$ sudo iptables -L # вывод списка текущих правил в iptables
Chain INPUT (policy DROP)
target     prot opt source               destination         
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:http

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         
###############################################################################
alex@alex-vb:~$ sudo iptables -t nat -A PREROUTING -p tcp --dport  80 -j REDIRECT --to-port  8080 # настроим iptables для перенаправления входящего TCP-трафика с порта 80 на порт 8080       
alex@alex-vb:~$ sudo iptables -L -t nat # вывод списка правил в таблице NAT iptables
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination         
REDIRECT   tcp  --  anywhere             anywhere             tcp dpt:http redir ports 8080

Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination   
###############################################################################
alex@alex-vb:~$ sudo iptables -A INPUT -s  3.4.5.6 -j DROP # добавляет правило в цепочку INPUT iptables, которое отклоняет (DROP) все пакеты, исходящие от IP-адреса 3.4.5.6
alex@alex-vb:~$ sudo iptables -L # вывод списка текущих правил в iptables
Chain INPUT (policy DROP)
target     prot opt source               destination         
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:http
DROP       all  --  3.4.5.6              anywhere            

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination 
###############################################################################
alex@alex-vb:~$ sudo iptables -F # очистки всех правил в таблице фильтрации (filter table) iptables
alex@alex-vb:~$ sudo iptables -L # вывод списка текущих правил в iptables
Chain INPUT (policy DROP)
target     prot opt source               destination         

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         
alex@alex-vb:~$ sudo iptables -L -t nat # вывод списка правил в таблице NAT iptables
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination         
REDIRECT   tcp  --  anywhere             anywhere             tcp dpt:http redir ports 8080

Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination         
alex@alex-vb:~$ sudo iptables -t nat -F # очистки всех правил в таблице NAT iptables
alex@alex-vb:~$ sudo iptables -L -t nat # вывод списка правил в таблице NAT iptables
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination         

Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination         
alex@alex-vb:~$ sudo iptables -P INPUT ACCEPT
###############################################################################
###############################################################################
alex@alex-vb:~$ ps aux | head # отображения информации о запущенных процессах в системе
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.1 166680 11764 ?        Ss   10:17   0:00 /sbin/init splash
root           2  0.0  0.0      0     0 ?        S    10:17   0:00 [kthreadd]
root           3  0.0  0.0      0     0 ?        I<   10:17   0:00 [rcu_gp]
root           4  0.0  0.0      0     0 ?        I<   10:17   0:00 [rcu_par_gp]
root           5  0.0  0.0      0     0 ?        I<   10:17   0:00 [slub_flushwq]
root           6  0.0  0.0      0     0 ?        I<   10:17   0:00 [netns]
root          11  0.0  0.0      0     0 ?        I<   10:17   0:00 [mm_percpu_wq]
root          12  0.0  0.0      0     0 ?        I    10:17   0:00 [rcu_tasks_kthread]
root          13  0.0  0.0      0     0 ?        I    10:17   0:00 [rcu_tasks_rude_kthread]
alex@alex-vb:~$ ps aux | grep mc # поиск процессов которые содержат строку "mc"
alex        3055  0.0  0.0 166408  7552 ?        Sl   10:19   0:00 /usr/libexec/ibus-memconf
alex        4117  0.0  0.1  26152 11008 pts/1    S+   11:10   0:00 mc
alex        4128  0.0  0.0  11644  2560 pts/0    S+   11:11   0:00 grep --color=auto mc
alex@alex-vb:~$ kill -s 9 4117 # отправляет сигнал SIGKILL с номером 9 процессу с PID 4117 для немедленного завершения процесса и не может быть игнорирован, заблокирован или перехвачен процессом
alex@alex-vb:~$ ps aux | grep mc
alex        3055  0.0  0.0 166408  7552 ?        Sl   10:19   0:00 /usr/libexec/ibus-memconf
alex        4131  0.0  0.0  11644  2560 pts/0    S+   11:12   0:00 grep --color=auto mc

