package com.tek.lambda;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.function.Consumer;

class MyComparator implements Comparator<String>{
	@Override
	public int compare(String o1, String o2) {
		return  o1.length()-o2.length() ;
	}
}
public class LambdaWithCollections {
	public static void main(String[] args) {
		List<String> names = Arrays.asList("Java", "Python", "Go");
		comparator();
//		consumer();
	}

	private static void comparator() {
		List<String> names = Arrays.asList("Java", "Python", "Go");
		/*
		 * names.sort((str1, str2)->{ return str2.length()-str1.length() ; });
		 */
		names.sort(new MyComparator());
		System.out.println(names);	
	}

	private static void consumer() {
		List<String> names = Arrays.asList("Java", "Python", "Go");
//      Consumer<String> consumer = (String name) -> System.out.println(name);
//      Consumer<String> consumer = (name) -> System.out.println(name);
//      Consumer<String> consumer = name -> System.out.println(name);
		Consumer<String> consumer = name -> {
			System.out.print("name=");
			System.out.println(name);
		};
		names.forEach(consumer);
		
	}
}


