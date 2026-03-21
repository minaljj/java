package com.tek.threads;

public class TaskMain {
	public static void main(String[] args) throws InterruptedException {
		Thread thread=new ThreadExample();
		thread.start();
		thread.join();
		//thread.sleep(2000);
		System.out.println("main");
//		Thread t= new Thread(new MyTask());
//		t.start();
	}
}
