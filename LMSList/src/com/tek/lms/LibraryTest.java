package com.tek.lms;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LibraryTest {
	Library library;

	@BeforeEach
	void setup() {
		library = new Library();
	}

	@Test
	void testReservedTitleIsNull() {

		assertThrows(IllegalArgumentException.class, () -> library.reserve(null), "Title cannot be null");
	}

	@Test
	void testSuccessfullyReservtion() throws BookNotAvailableException {
		Book book = new Book("1", "Learn Java", 234.5f, "xyz");
		Library.books.add(book);
		library.reserve("Learn Java");
		assertEquals(STATUS.BOOKED, book.getStatus());

	}

	@Test
	void testReservedTitleIsBlank() {
		assertThrows(IllegalArgumentException.class, () -> library.reserve(""));
	}

	@Test
	void testReservedTitleIsWhiteSpace() {
		assertThrows(IllegalArgumentException.class, () -> library.reserve(""));

	}
	
	@Test
	void testBookNotAvailable() {
		Book book = new Book("1", "Learn Java", 234.5f, "xyz");
		book.setStatus(STATUS.BOOKED);
		library.books.add(book);
		
		assertThrows(BookNotAvailableException.class, () -> library.reserve("Learn Java"));

	}
	
	@Test
	void testBookIsAvailable() {
		Library library = new Library();
		Book book = new Book("1", "Learn Java", 234.5f, "xyz");
		library.books.add(book);
		book.setStatus(STATUS.AVAILABLE);
		assertDoesNotThrow(BookNotAvailableException.class, ()->library.reserve("Learn Java"));
		
	}

}
