package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import com.example.demo.entity.Note;
import com.example.demo.entity.Order1;
import com.example.demo.service.NotesService;



class NotesControllerTest {

	@Mock
    private NotesService noteService;  

    @InjectMocks
    private NotesController noteController;


	@Test
	void testGetOrder() {
		Iterable<Note> orders1 = new ArrayList<>();

		when(noteController.getNotes()).thenReturn(orders1);
        Iterable<Note> result = noteController.getNotes();
        assertNotNull(result);
	}
	

}
