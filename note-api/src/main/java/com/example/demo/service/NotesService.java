package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Note;
import com.example.demo.repository.NotesRepository;

@Service
public class NotesService {

	@Autowired
	private NotesRepository notesRepository;

	public Iterable<Note> getNotes() {
		return notesRepository.findAll();
	}

	public Note createNote(Note note) {
		return notesRepository.save(note);
	}

	public Note updateNote(Note note) {
		return notesRepository.save(note);
	}

	public void deleteNote(Long id) {
		notesRepository.deleteById(id);
	}
}