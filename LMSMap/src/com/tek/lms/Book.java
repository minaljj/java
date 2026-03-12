package com.tek.lms;

public class Book {
	int id;
	String title;
	float price;
	String author;
	STATUS status;
	public Book(int id, String title, float price, String author) {
		super();
		this.id = id;
		this.title = title;
		this.price = price;
		this.author = author;
		this.status=status.AVAILABLE;
	}
}
