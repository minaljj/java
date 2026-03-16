package com.tek.execptioneg;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class ReadFromConsole {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		FileWriter writer = new FileWriter("outputs.txt", true);
		Scanner sc = new Scanner(System.in);
		try {
			while (true) {
				System.out.println("Enter the text ");
				String txt = sc.nextLine();
				writer.write(txt + "\n");
				writer.flush();
				System.out.println("done");
			}
		} finally {
			writer.close();
			sc.close();
		}

	}

}
