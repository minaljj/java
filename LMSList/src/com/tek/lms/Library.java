package com.tek.lms;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Logger;

class Library {

	static List<Book> books = new ArrayList<>();

	void add(String id, String title, float price, String author) {
		Book book = new Book(id, title, price, author);
		books.add(book);
	}

	void reserve(String title) {
		try {
			for (Book b : books) {
				if (b.title.equals(title) && b.getStatus() == STATUS.AVAILABLE) {
					b.setStatus(STATUS.BOOKED);
					System.out.println("Borrowed: " + title);
					return;
				}
		
			else {
		    BookAvailability(title);
			}
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		}
		private static void BookAvailability(String title) throws BookNotAvailableException {
		for(Book b: books) {
		if(b.title.equals(title) && b.getStatus()!=STATUS.AVAILABLE) {
			throw new BookNotAvailableException("Book is not available");
		}
		}

	}

	List<Book> find(String title) {
		List<Book> books = new ArrayList<>();
		for (Book book : books) {
			if (book.title.toLowerCase().contains(title.toLowerCase())) {
				books.add(book);
			}
		}
		return books;
	}

	Book remove(String id) throws Exception {
		for (Book book : books) {
			if (book.getId().toLowerCase().equals(id.toLowerCase())) {
				books.remove(book);
				return book;
			}
		}
		throw new Exception("No book was availaible for the id: " + id);
	}

	void displayBooks() {
		System.out.println("BOOKS AVAILIABLE");
		System.out.println("============================================");
		for (Book b : books)
			if (b.getStatus() == STATUS.AVAILABLE)
				System.out.println(b + "\n\n");
		System.out.println("============================================");
	}

	void displayAllBooks() {

		System.out.println("BOOKS AVAILIABLE");
		System.out.println("============================================");
		for (Book b : books)
			System.out.println(b + "\n\n");
		System.out.println("============================================");
	}

}