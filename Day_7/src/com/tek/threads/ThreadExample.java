package com.tek.threads;

public class ThreadExample extends Thread {
	public void run() {
//		try {
//			sleep(2000);
//		}catch(InterruptedException e) {
//			e.printStackTrace();
//		}
		System.out.println("worker Thread is running");
	}
}
