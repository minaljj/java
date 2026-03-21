package com.tek.executors;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Worker2 implements Runnable {
	public void run() {
		System.out.println(Thread.currentThread().getName() + "started");
		try {
			Thread.sleep(2000);

		} catch (Exception e) {
			// TODO: handle exception
		}
		System.out.println(Thread.currentThread().getName() + "finished");
	}

	public class ExecutorServiceDemo {
		public static void main(String[] args) {
			ExecutorService executor1 = Executors.newFixedThreadPool(10);
			executor1.shutdown();
			executor1.submit(new Worker2());
			

		}
	}
}
