package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.entity.Note;
import com.example.demo.service.NotesService;


@ExtendWith(MockitoExtension.class)
class NotesControllerTest {

	@Mock
    private NotesService noteService;  

    @InjectMocks
    private NotesController noteController;


	@Test
	void getNotes() {
		Iterable<Note> note1 = new ArrayList<>();

		when(noteService.getNotes()).thenReturn(note1);
        Iterable<Note> result = noteController.getNotes();
        assertNotNull(result);
	}
	
	@Test
	void createNotetest() {
		Note note=new Note();
		when( noteService.createNote(note)).thenReturn(note);
		Note result=noteController.createNote(note);
		assertNotNull(result);
	}
//	@Test
//	void updateNotetest() {
//		Note note=new Note();
//		Long id =1L;
//		Note updatedNote = new Note();
//		when(noteService.updateNote(note)).thenReturn(updatedNote);		
//		Note result1 = noteController.updateNote(id, note);
//		assertEquals(id, result1.getId());
//	}
	

void deleteNoteTest() {
        Long id = 1L;
        noteController.deleteNote(id);
        verify(noteService, times(1)).deleteNote(id);
    }

	

}
