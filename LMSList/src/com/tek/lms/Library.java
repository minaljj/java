package com.tek.lms;

import java.util.LinkedList;
import java.util.List;

public class Library {
	List<Book> books = new LinkedList<>();
	void addbook(int id,String title,float price,String author) {
		Book book = new Book(id,title,price,author);
		books.add(book);
		
	}
	void borrowBook(String title) {
		for (Book b : books) {
			if (b.title.equals(title) && b.status == STATUS.AVAILABLE) {
				b.status = STATUS.REMOVED;
				System.out.println("Borrowed: " + title);
				books.remove(b);
				return;
			}
		}
		System.out.println("Book not available");
	}
	
	public void dispay() {
		// TODO Auto-generated method stub
		if (books.isEmpty()) {
            System.out.println("No books in library.");
            return;
        }
        for (Book b : books) {
            System.out.println(b);
        }
    }
		
	
	public void reserveBook(String title) {
		// TODO Auto-generated method stub
		for (Book b : books) {
			if (b.title.equals(title) && b.status == STATUS.AVAILABLE) {
				b.status = STATUS.RESERVED;
				System.out.println("Borrowed: " + title);
				books.remove(b);
				return;
			}
		}
		System.out.println("Book not available");
		
	}
}
