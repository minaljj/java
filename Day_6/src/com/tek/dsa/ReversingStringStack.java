package com.tek.dsa;

import java.util.Stack;

public class ReversingStringStack {
	int top=-1;
	
	int size=4;
	char[] stack = new char[size];
	//int [] stack = new int[size];
	void push(char x) {
		if(top==-1) {
			System.out.println("stack overflow");
		}else {
			stack[++top]=x;
		}
	}
	char pop() {
		if(top==-1) {
			System.out.println("Stack underflow");
		}
		return stack[top--];
	}
	public static void main(String[] args) {
		String str="Hello";
		Stack<Character> stack=new Stack();
		
		
	}
}
