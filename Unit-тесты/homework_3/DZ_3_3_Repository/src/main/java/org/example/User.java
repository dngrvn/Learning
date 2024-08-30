package org.example;

public class User
{
    String name;

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    String password;
    boolean isAdmin; // Новое свойство для указания, является ли пользователь администратором
    boolean isAuthenticated = false;

    public User(String name, String password, boolean isAdmin) {
        this.name = name;
        this.password = password;
        this.isAdmin = isAdmin;
    }


    public boolean authenticate(String inputName, String inputPassword)
    {
        if (name.equals(inputName) && password.equals(inputPassword))
        {
            isAuthenticated = true;
            return true;
        }
        else
        {
            isAuthenticated = false;
            return false;
        }
    }
}