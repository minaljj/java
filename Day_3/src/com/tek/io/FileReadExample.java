package com.tek.io;

import java.io.FileReader;
import java.io.IOException;

public class FileReadExample {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		FileReader reader=new FileReader("data.txt");
		int character;
		while((character=reader.read())!=-1){
			System.out.println((char)character);
		}
		reader.close();
	}

}
