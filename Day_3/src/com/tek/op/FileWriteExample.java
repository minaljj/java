package com.tek.op;


import java.io.FileWriter;
import java.io.IOException;

public class FileWriteExample{

	 public static void main(String[] args) {
	        try(FileWriter writer = new FileWriter("output.txt")) {
	            writer.write("Write java program");
	            System.out.println("File written successfully!");
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	 }
}
