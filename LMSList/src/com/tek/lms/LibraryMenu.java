package com.tek.lms;

import java.util.Scanner;

public class LibraryMenu {
	public static void main(String args[]) {
	Library library= new Library();
	library.addbook(123,"Learn java",4321,"hjk");
	
	Scanner sc=new Scanner(System.in);
	while(true) {
		System.out.println("\n.....Library Menu.....\n 1.Display Book \n 2.Add book \n 3.Remove book \n 4.Reserve book " );
		int choice;
		try {
            choice = Integer.parseInt(sc.nextLine());
        } catch (NumberFormatException e) {
            System.out.println("Invalid input. Please enter a number.");
            continue;
        }
		switch(choice) {
		case 1:library.dispay();
				break;
		case 2:  try {
            System.out.print("Enter ID: ");
            int id = Integer.parseInt(sc.nextLine());
            System.out.print("Enter Title: ");
            String title = sc.nextLine();
            System.out.print("Enter Price: ");
            float price = Float.parseFloat(sc.nextLine());
            System.out.print("Enter Author: ");
            String author = sc.nextLine();
            library.addbook(id, title, price, author);
            System.out.println("Book added successfully.");
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format.");
        }
        break;
		case 3:
			library.borrowBook(sc.nextLine());
			break;
		case 4:
			library.reserveBook(sc.nextLine());
		
		
		case 5:
			System.out.println("Exiting...");
			sc.close();
			return;
		default:
			System.out.println("Invalid choice.");
	
		}
	}
	
	
 }
}
