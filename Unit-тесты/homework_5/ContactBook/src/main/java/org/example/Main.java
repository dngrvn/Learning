package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args)
    {
        ContactBookApp app = new ContactBookApp();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\nChoose an option:");
            System.out.println("1. Add contact");
            System.out.println("2. Edit contact");
            System.out.println("3. Delete contact");
            System.out.println("4. Display contacts");
            System.out.println("5. Exit");

            int choice = scanner.nextInt();
            scanner.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    System.out.println("Enter name:");
                    String name = scanner.nextLine();
                    System.out.println("Enter phone number:");
                    String phoneNumber = scanner.nextLine();
                    app.addContact(name, phoneNumber);
                    break;
                case 2:
                    System.out.println("Enter name to edit:");
                    String editName = scanner.nextLine();
                    System.out.println("Enter new phone number:");
                    String newPhoneNumber = scanner.nextLine();
                    app.editContact(editName, newPhoneNumber);
                    break;
                case 3:
                    System.out.println("Enter name to delete:");
                    String deleteName = scanner.nextLine();
                    app.deleteContact(deleteName);
                    break;
                case 4:
                    app.displayContacts();
                    break;
                case 5:
                    System.out.println("Exiting the application.");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }
    }
}