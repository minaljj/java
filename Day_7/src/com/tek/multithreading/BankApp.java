package com.tek.multithreading;

import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class BankApp {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the initial balance : rs. ");
		int initalBalance = sc.nextInt();

		BankAccount account = new BankAccount(initalBalance);

		ExecutorService executor = Executors.newFixedThreadPool(3);

		while (true) {
			System.out.println("\n -------- MULTITHREADED BANKING SYSTEM (ExecutorService)-----------");
			System.out.println("1. Checkbalance");
			System.out.println("2. Deposit Money");
			System.out.println("3. WithDraw Money");
			System.out.println("4. Simulate Parallel withdrawals");
			System.out.println("5. Exit");

			System.out.println("Enter you choice");

			int choice = sc.nextInt();

			int initialBalance = 0;
			switch (choice) {
			case 1:
				System.out.println("Current Balance : Rs. " + account.getBalance());
				break;


            case 2:
                System.out.print("Enter amount to deposit: ₹");
                int dep = sc.nextInt();
                executor.execute(new DepositTask(account, dep));
                break;


            case 3:
                System.out.print("Enter amount to withdraw: ₹");
                int w = sc.nextInt();
                executor.execute(new WithdrawTask(account, w));
                break;

            case 4:
                System.out.println("Simulating two parallel withdrawals of ₹" + (initialBalance / 2));

                executor.execute(new WithdrawTask(account, initialBalance / 2));
                executor.execute(new WithdrawTask(account, initialBalance / 2));

                break;


			case 5:
				System.out.println("Shutting down banking system...");
				executor.shutdown();
				sc.close();
				System.exit(0);
				break;

			default:
				System.out.println("Invalid choice! Try again.");

			}

		}
	}
}
