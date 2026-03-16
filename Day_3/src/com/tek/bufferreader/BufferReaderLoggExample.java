package com.tek.bufferreader;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.logging.Logger;

public class BufferReaderLoggExample {
	private static final Logger logger=Logger.getLogger(BufferReaderLoggExample.class.getName());
	public static void main(String[] args) throws IOException {
		
		try (BufferedReader reader=new BufferedReader(new FileReader("data.txt"))){
		String line;
		while((line=reader.readLine())!=null){
			logger.info(line);
		}
		}catch(IOException e) {
			logger.warning("Its error");
			
		}
		
	}
}
