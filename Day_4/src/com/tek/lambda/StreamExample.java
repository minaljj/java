package com.tek.lambda;

import java.util.stream.Stream;

public class StreamExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Stream<Integer> s=Stream.of(1,2,3);
		s.forEach(System.out::println);
		s.forEach(System.out::println);
	}

}
