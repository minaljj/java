package com.tek.dsa;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MathTest2 {

Math math;
	
	@BeforeEach
	
	void setup() {
		math=new Math();
	}
	@Test
	void addWithArray() {
		
		int result=math.addWithArray(new Integer[] {2,3,4,5});
		//assertEquals(7,result);
		assertEquals(14,result);
	}
	@Test
	void test() {
		
		int result=math.add(2, 3);
		assertEquals(5,result);
	}

	@Test
	void testMinsu() {
		
		int result=math.add(-2,-3);
		assertEquals(-5,result);
	}
	
	@Test
	void divideByZero() {
		assertThrows(ArithmeticException.class, ()->{
			int result=math.divide(25,0);
		});
		
	}
	@Test
	void divid() {
		
		int result=math.divide(25,5);
		assertEquals(5,result);
	}

	

}
