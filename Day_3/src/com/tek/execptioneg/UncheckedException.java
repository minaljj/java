package com.tek.execptioneg;

public class UncheckedException {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
		age(17);
		}catch(InvalidAgeExecption e) {//donot catch unchecked exception
			e.printStackTrace();
		}
		System.out.println("Finshed");
		
	}

	private static void age(int i) {
		// TODO Auto-generated method stub
		if(i<18) {
			throw new InvalidAgeExecption("Age must be 18");
		}
	}

}
