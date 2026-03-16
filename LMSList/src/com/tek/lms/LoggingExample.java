package com.tek.lms;

import java.util.logging.Logger;
public class LoggingExample {
	private static final Logger logger=Logger.getLogger(LoggingExample.class.getName());
	public static void main(String[] args) {
		logger.info("");
	}
	public void info(String string) {
		System.out.println("exiting");
		
	}
	public void severe() {
		System.exit(0);
		
	}
	public void warning() {
		// TODO Auto-generated method stub
		System.out.println("Invalid choice!!!");
		
	}
}
