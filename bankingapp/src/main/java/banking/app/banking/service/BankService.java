package banking.app.banking.service;

import banking.app.banking.AccountRepository.AccountRepository;
import banking.app.banking.exception.BankingException;
import banking.app.banking.model.Account;

public class BankService {

	private final AccountRepository repository;

	public BankService(AccountRepository repository) {
		this.repository = repository;
	}

	public void createAccount(int accountNumber, String name, double balance) {
		Account existing = repository.findById(accountNumber);
		if (existing != null)
			throw new BankingException("Account already exists");

		repository.save(new Account(accountNumber, name, balance));
	}

	public Account getAccount(int accountNumber) {
		Account account = repository.findById(accountNumber);
		if (account == null)
			throw new BankingException("Account not found");

		return account;
	}

	public void deposit(int accountNumber, double amount) {
		Account account = getAccount(accountNumber);
		account.deposit(amount);
		repository.save(account);
	}

	public void withdraw(int accountNumber, double amount) {
		Account account = getAccount(accountNumber);
		account.withdraw(amount);
		repository.save(account);
	}

}
