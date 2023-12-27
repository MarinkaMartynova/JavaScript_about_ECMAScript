"use strict";

/* Задание 1 

Необходимо получить список всех пользователей с помощью бесплатного API 
(https://jsonplaceholder.typicode.com/users) 
и отобразить их на странице. 
Пользователь должен иметь возможность удалить любого пользователя из списка.
*/

const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsersFromAPI() {
    try {
        const response = await fetch(url);
        const data = await response.json();      
        // Сохранение данных в локальную базу данных
        localStorage.setItem("users", JSON.stringify(data));
        // Отображение пользователей
        displayUsers(data);

    } catch (error) {
        console.log("Произошла ошибка при получении   данных:", error);
    }
}

// Функция для отображения пользователей на странице
function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    
    users.forEach(user => {
        const userItem = document.createElement("li");
        userItem.textContent = `${user.id} - ${user.name}`;
                
        const deleteUserButton = document.createElement   ("button");
        deleteUserButton.textContent = "Удалить";
        deleteUserButton.addEventListener("click", () => {
        deleteUser(user.id);
        });
      
        userItem.appendChild(deleteUserButton);
        userList.appendChild(userItem);
    });
}

// Функция для удаления пользователя из локальной базы данных
function deleteUserFromLocalDB(userId) {
    const users = JSON.parse(localStorage.getItem("users"));
    const updatedUsers = users.filter(user => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
  

// Функция для удаления пользователя
function deleteUser(userId) {
    deleteUserFromLocalDB(userId);  
    // Обновление списка пользователей на странице
    const userItem = document.querySelector(`li[data-id="${userId}"]`);
    userItem.remove();  
    // Сохранение обновленной локальной базы данных
    const updatedUsers = JSON.parse(localStorage.getItem("users"));
    localStorage.setItem("users", JSON.stringify (updatedUsers));
}

getUsersFromAPI();

// Получение данных из локального хранилища
const localUsers = JSON.parse(localStorage.getItem("users"));
console.log(localUsers);


