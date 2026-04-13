package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Note;
import com.example.demo.service.NotesService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/notes")
@CrossOrigin(origins = "http://localhost:3000")
public class NotesController {

	@Autowired
	private NotesService noteService;

	@GetMapping
	public Iterable<Note> getNotes() {
		return noteService.getNotes();
	}

	@PostMapping
	public Note createNote(@RequestBody @Valid Note note) {
		return noteService.createNote(note);
	}

	@PutMapping("/{id}")
	public Note updateNote(@PathVariable Long id, @RequestBody Note note) {
		note.setId(id);
		return noteService.updateNote(note);
	}

	@DeleteMapping("/{id}")
	public void deleteNote(@PathVariable Long id) {
		noteService.deleteNote(id);
	}
}