<!-- Два друга движутся в одну сторону с заданной скоростью. Скорость первого — 1 м/с, второго — 2 м/с. У них есть собака, которая бегает со скоростью 5 м/с. Когда друзья начинают свой путь, собака бежит от одного друга к другому, добегает, разворачивается и тут же бежит обратно. Сколько раз собака перебежит от одного друга к другому, пока они не встретятся?
Составьте блок-схему решения задачи, если два друга будут идти в одну сторону -->



По итогу собака пробежала 12 раз

count = 0
distance = 10000
FirstFriendSpeed = 1
SecondFriendSpeed = 2
dogSpeed = 5
friend = 2

while distance > 10:
if friend == 1:
time = distance / (FirstFriendSpeed + dogSpeed)
friend = 2
distance = distance - (FirstFriendSpeed + SecondFriendSpeed) * time
count = count + 1
elif friend == 2:
time = distance / (SecondFriendSpeed + dogSpeed)
friend = 1
distance = distance - (FirstFriendSpeed + SecondFriendSpeed) * time
count = count + 1
print(count)