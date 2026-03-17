package com.tek.dsa;

import java.util.Stack;

public class StackArray {
	int top=-1;
	int size=4;
	int [] stack = new int[size];
	void push(int x) {
		if(top==-1) {
			System.out.println("stack overflow");
		}else {
			stack[++top]=x;
		}
	}
	int pop() {
		if(top==-1) {
			System.out.println("Stack underflow");
		}
		return stack[top--];
	}
	


}
