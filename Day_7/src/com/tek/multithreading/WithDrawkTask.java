package com.tek.multithreading;
class WithdrawTask implements Runnable {
    private final BankAccount account;
    private final int amount;

    public WithdrawTask(BankAccount account, int amount) {
        this.account = account;
        this.amount = amount;
    }

    @Override
    public void run() {
        String thread = Thread.currentThread().getName();
        System.out.println(thread + " attempting to withdraw ₹" + amount);

        boolean success = account.withdraw(amount);

        if (success) {
            System.out.println(thread + " successfully withdrew ₹" + amount);
        } else {
            System.out.println(thread + " FAILED to withdraw ₹" + amount + " (Insufficient balance)");
        }
    }
}
