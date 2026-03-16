package com.tek.execptionException;

public class ExceptionsExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			int result=10/0;
			System.out.println(result);
		}catch (ArithmeticException arithmeticException) {
			// TODO: handle exception
			System.out.println("Program Finished");
		}
	}

}
