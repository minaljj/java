package com.tek.bufferreader;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferReaderExample {
	public static void main(String[] args) throws IOException {
		BufferedReader reader=new BufferedReader(new FileReader("data.txt"));
		String line;
		while((line=reader.readLine())!=null){
			System.out.println(line);
		}
		reader.close();
	}
}
