package com.tek.lambda;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class SimpleLamda {
	public static void main(String[] args) {
		List<Integer> l= Arrays.asList(1,2,3,4,5);
		List finalResult=l.stream().filter(x->x%2==0).collect(Collectors.toList());
		System.out.println(finalResult);
	}
}
