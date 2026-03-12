package com.tek.list;

import java.util.HashMap;

public class HashMapExec {
	public static void main(String args[]) {
		HashMap<Integer,String> hash= new HashMap<>();
		hash.put(1,"Java");
		hash.put(2,"Python");
		hash.put(3,"C");
		hash.put(3,"C++");
		System.out.println(hash);
		System.out.println(hash.get(2));
	}
}
