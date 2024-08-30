package org.example;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;

public class UserRepository
{
    List<User> data = new ArrayList<>();

    public void addUser(User user)
    {
        for (User item : data)
        {
            if (item.getName().equals(user.getName()) && item.getPassword().equals(user.getPassword()))
            {
                throw new RuntimeException("Такой человек уже зарегистрирован!");
            }
        }
        data.add(user);
    }

    public boolean findByName(String username)
    {
        for (User user : data)
        {
            if (user.getName().equals(username))
            {
                return true;
            }
        }
        return false;
    }

    public boolean findByPassword(String userPassword)
    {
        for (User user : data)
        {
            if (user.getPassword().equals(userPassword))
            {
                return true;
            }
        }
        return false;
    }

    public void logoutNonAdminUsers()
    {
        Iterator<User> iterator = data.iterator();
        while (iterator.hasNext()) {
            User user = iterator.next();
            if (!user.isAdmin) {
                // Аутентификация перед разлогиниванием
                user.authenticate(user.getName(), user.getPassword());
                if (user.isAuthenticated) {
                    user.isAuthenticated = false;
                    iterator.remove();
                    }
                }
            }
        }
    }
