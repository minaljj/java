package com.tek.list;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {
	public static void main(String args[]) {
		//Collection<String> fruits=new ArrayList<>();
		List<String> cities = createListOfCities();
		//defensiveDownCasting(cities);
		System.out.println(cities);
		System.out.println(cities.contains("Delhi"));
		System.out.println(cities.lastIndexOf("Delhi"));
		//System.out.println(cities.remove("Delhi"));
		System.out.println(cities.set(2,"Chennai"));
		System.out.println(cities);
}

	private static void defensiveDownCasting(List<String> cities) {
		if( cities instanceof LinkedList<String>) {
		LinkedList<String> linklist =((LinkedList)cities);
		linklist.addFirst("chennai");
		}
	}

	private static List<String> createListOfCities() {
		List<String> cities=new LinkedList<>();//Parent interface reference 
		//if it is List<String> cities=new ArrayList<>(); use instanceof tocheck if ur unsure 
		cities.add("Bangalor");
		cities.add("Delhi");
		cities.add("Delhi");
		cities.add(new String("Mumbai"));
		return cities;
	}
}
