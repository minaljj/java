package com.tek.dsa;

public class ArrayExample {
	public static void main(String[] args) {
		basicArray();
		arrayWithCustomOnject();
	}

	private static void arrayWithCustomOnject() {
		// TODO Auto-generated method stub
		Book[] books= new Book[5];
		
		books[0] =new Book("1","Learn Java",145.3F,"XYZ");
		books[1] =new Book("2","Learn Java",145.3F,"XYZ");
		books[2] =new Book("3","Learn Java",145.3F,"XYZ");
		System.out.println(books[0]);
		System.out.println(books[0].title);
		
	}

	private static void basicArray() {
		// TODO Auto-generated method stub
		//int [] number= {10,20,30,40};
		int [] number=new int[10];
		System.out.println(number[2]);
	}
}
