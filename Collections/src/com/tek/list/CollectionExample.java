package com.tek.list;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class CollectionExample {
	public static void main(String args[]) {
		//Collection<String> fruits=new ArrayList<>();
		List<String> fruits=new ArrayList<>();//Parent interface reference 
		fruits.add("Apple");
		fruits.add("orange");
		fruits.add(new String("orange"));

		System.out.println(fruits);
		System.out.println(fruits.get(1)==fruits.get(2));
	}
}
