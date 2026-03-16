package com.tek.execptioneg;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class ReadFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			readFile();
			
		} catch (FileNotFoundException e) {
			// TODO: handle exception
			System.out.println("File not found");
		}
	}

	private static void readFile() throws FileNotFoundException {
		// TODO Auto-generated method stub
		FileReader file= new FileReader("data.txt");
	}

}
