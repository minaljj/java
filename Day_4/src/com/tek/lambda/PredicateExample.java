package com.tek.lambda;

import java.util.function.Predicate;

public class PredicateExample {
	public static void main(String[] args) {
		Predicate<Integer> isEven=n -> n%2==0;//return is implicit
		Predicate<Integer> isEven2=(Integer n) -> n%2==0;//return is implicit
		//Predicate<Integer> isEven3=(int n) -> n%2==0;// Wont work
		Predicate<Integer> isEven1=n -> {
			return n%2==0;
		};
		System.out.println(isEven.test(10));
		
	}
}
