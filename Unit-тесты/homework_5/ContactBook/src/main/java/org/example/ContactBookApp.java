package org.example;

import java.util.HashMap;
import java.util.Map;

public class ContactBookApp {
    private Map<String, String> contacts;

    public ContactBookApp()
    {
        this.contacts = new HashMap<>();
    }

    public void addContact(String name, String phoneNumber)
    {
        contacts.put(name, phoneNumber);
    }

    public void editContact(String name, String newPhoneNumber) {
        if (contacts.containsKey(name)) {
            contacts.put(name, newPhoneNumber);
        } else {
            System.out.println("Contact not found.");
        }
    }

    public void deleteContact(String name) {
        if (contacts.containsKey(name)) {
            contacts.remove(name);
        } else {
            System.out.println("Contact not found.");
        }
    }

    public void displayContacts() {
        System.out.println("Contacts:");
        for (Map.Entry<String, String> entry : contacts.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }

    public Map<String, String> getContacts()
    {
        return contacts;
    }
}
