package org.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserRepositoryTest
{
    UserRepository userRepository;

    @BeforeEach
    void setUp()
    {
        userRepository = new UserRepository();
    }


    @Test
    void addUser()
    {
        User user = new User("testUser", "testPassword", false);

        // Проверяем, что пользователя нет в репозитории перед добавлением
        assertFalse(userRepository.findByName("testUser"));
        assertFalse(userRepository.findByPassword("testPassword"));

        userRepository.addUser(user);

        // Проверяем, что пользователя теперь можно найти в репозитории
        assertTrue(userRepository.findByName("testUser"));
    }

    @Test
    void findByName()
    {
        User user = new User("existingUser", "password123", false);
        userRepository.addUser(user);

        // Проверяем, что метод findByName возвращает true для существующего пользователя
        assertTrue(userRepository.findByName("existingUser"));

        // Проверяем, что метод findByName возвращает false для несуществующего пользователя
        assertFalse(userRepository.findByName("nonExistingUser"));
    }

    @Test
    void testLogoutNonAdminUsers()
    {
        // создаём новых пользователей
        User adminUser = new User("admin", "admin123", true);
        User regularUser1 = new User("user1", "password1", false);
        User regularUser2 = new User("user2", "password2", false);

        // добавляем в репозиторий всех пользователей
        userRepository.addUser(adminUser);
        userRepository.addUser(regularUser1);
        userRepository.addUser(regularUser2);

        // проводим идентификацию
        adminUser.authenticate(adminUser.name, adminUser.password);
        regularUser1.authenticate(regularUser1.name, regularUser1.password);
        regularUser2.authenticate(regularUser2.name, regularUser2.password);

        assertTrue(adminUser.isAuthenticated);
        assertTrue(regularUser1.isAuthenticated);
        assertTrue(regularUser2.isAuthenticated);

        // разлогиниваем всех не администраторов
        userRepository.logoutNonAdminUsers();

        // Проверяем, что метод logoutNonAdminUsers разлогинил всех неадминистраторов
        assertTrue(adminUser.isAuthenticated);
        assertFalse(regularUser1.isAuthenticated);
        assertFalse(regularUser2.isAuthenticated);

        // Проверяем, что из репозитория удалены разлогиненные пользователи
        assertFalse(userRepository.findByName("user1"));
        assertFalse(userRepository.findByName("user2"));
    }
}