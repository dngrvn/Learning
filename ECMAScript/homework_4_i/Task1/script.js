// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. ДОПОЛНИТЕЛЬНАЯ НЕОБЯЗАТЕЛЬНАЯ ЧАСТЬ - Пользователь должен иметь возможность удалить любого пользователя из списка. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
const url = "https://jsonplaceholder.typicode.com/users";
const usersEl = document.querySelector(".users");

const dataUsers = async (url) => {
  try {
    const res = await fetch(url);
    const usersList = await res.json();
    usersList.forEach((user) =>
      localStorage.setItem(JSON.stringify(user.id), JSON.stringify(user))
    );
    return usersList;
  } catch (error) {
    console.log(error.message);
  }
};

const users = await dataUsers(url);
console.log(users);
users.forEach((user) => {
  usersEl.insertAdjacentHTML(
    "beforeend",
    `<div class="user" data-id = '${user.id}'><h2 class="user_name">Name: ${user.name}</h2>
  <p class="user_username">UserName: ${user.username}</p>
  <p class="user_email">Email: ${user.email}</p>
  <button class="deleteUser" data-id = '${user.id}'>Delete user</button></div>`
  );
});

const btnDeleteUserEl = document.querySelectorAll(".deleteUser");

btnDeleteUserEl.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const parentBtn = btn.parentElement;
    const keyBtn = btn.getAttribute("data-id");
    parentBtn.remove();
    if (!isNaN(keyBtn)) localStorage.removeItem(keyBtn);
  })
);
