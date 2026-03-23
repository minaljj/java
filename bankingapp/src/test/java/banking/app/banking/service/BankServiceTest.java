package banking.app.banking.service;

import static org.hamcrest.CoreMatchers.any;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import banking.app.banking.AccountRepository.AccountRepository;
import banking.app.banking.exception.BankingException;
import banking.app.banking.model.Account;

class BankServiceTest {

	@Mock
	private AccountRepository repository;

	@InjectMocks
	private BankService bankService;

	private Account account;

	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);
		account = new Account(1, "Amit", 1000);
	}

	@Test
	void testDeposit() {

		when(repository.findById(1)).thenReturn(account);// mocking
		bankService.deposit(1, 500);
		assertEquals(1500, account.getBalance());
		verify(repository).save(account);
	}

	@Test
	void testWithdraw() {
		when(repository.findById(1)).thenReturn(account);
		bankService.withdraw(1, 400);
		assertEquals(600, account.getBalance());
		verify(repository).save(account);

	}

	@Test
	void testInsufficientBalance() {
		when(repository.findById(1)).thenReturn(account);

		assertThrows(IllegalArgumentException.class, () -> bankService.withdraw(1, 2000));

		verify(repository, never()).save(any());
	}

//

	@Test

	void testCreateAccountDuplicate() {
		when(repository.findById(1)).thenReturn(account);

		assertThrows(BankingException.class, () -> bankService.createAccount(1, "Amit", 500));

		verify(repository, never()).save(any());
	}

	@Test
	void testCreateAccountSuccess() {
		when(repository.findById(1)).thenReturn(null);
		bankService.createAccount(1, "Amit", 1000);
		verify(repository).save(any());
	}

	@Test
	void testGetAccountSuccess() {
		when(repository.findById(1)).thenReturn(account);
		Account result = bankService.getAccount(1);
		assertEquals(account, result);
	}

	@Test
	void testGetAccountNotFound() {
		when(repository.findById(1)).thenReturn(null);
		assertThrows(BankingException.class, () -> bankService.getAccount(1));
	}

	@Test
	void testDepositInvalidAmount() {
		when(repository.findById(1)).thenReturn(account);
		assertThrows(IllegalArgumentException.class, () -> bankService.deposit(1, -100));
		verify(repository, never()).save(any());
	}

}
