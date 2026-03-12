package com.tek.list;

import java.util.PriorityQueue;

public class PQQuee {
	public static void main(String args[]){
		PriorityQueue<Integer> number=new PriorityQueue<>();
		number.add(10);
		number.add(40);
		number.add(20);
		number.add(60);
		number.add(30);
		System.out.println(number);
		System.out.println(number.poll());
	}
}
